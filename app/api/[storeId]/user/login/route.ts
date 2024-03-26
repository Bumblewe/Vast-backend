import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { sendLoginOTP } from '@/app/_utils/SMSUtil';
import { comparePasswords, generateRandomNumber } from '@/app/_utils/Helper';
import { signToken } from '@/app/_utils/AuthUtil';
import { Constants } from '@/app/_utils/Constants';

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();
    const { email,password } = body;
    if (!email) {
      return NextResponse.json({message:"Email required"},{ status: 403});
    }
    if (!password) {
      return NextResponse.json({message:"Password required"},{ status: 403});
    }
    const user: any = await prismadb.user.findUnique({
      where: {
        email:email
      },
    });
    if (!comparePasswords(password, user?.password)) {
      return NextResponse.json({message:"Incorrect Password"},{ status: 500});
		}
    let token = signToken(
      user.id,
      user.name ?? "N/A",
      "+91",
      user.mobile,
      Constants.ROLES.USER
    );
    let res_user: any = { ...user };
    delete res_user.password;
    return NextResponse.json({ token: token, user: res_user, status: 200 });
  } catch (error) {
    console.log("[OTP]", error);
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

