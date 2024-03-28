import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { comparePasswords } from '@/app/_utils/Helper';
import { decodeToken, signToken } from '@/app/_utils/AuthUtil';
import { Constants } from '@/app/_utils/Constants';

export async function GET(
  req: Request
) {
  try {
    let userToken = decodeToken(req);

    const user: any = await prismadb.user.findUnique({
      where: {
        id:userToken.user_id
      },
      include: {
        cart: true
      }
    });
    let res_user: any = { ...user };
    delete res_user.password;
    return NextResponse.json({ user: user, status: 200 });
  } catch (error) {
    console.log("user", error);
    return NextResponse.json({message:"Internal error"},{ status: 500});
  }
};

export async function OPTIONS(req: Request) {
  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("[OTP]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

