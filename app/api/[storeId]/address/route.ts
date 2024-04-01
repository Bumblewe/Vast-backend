import { NextResponse } from 'next/server';
import {decodeToken} from '@/app/_utils/AuthUtil';

import prismadb from '@/lib/prismadb';
 
export async function POST(
  req: Request,
) {
  try {
    let userToken = decodeToken(req);

    const body = await req.json();

    const { line1, city, state, pincode } = body;

    if (!pincode || !line1 || !city || !state) {
      return NextResponse.json(
        { message: "Incomplete Address" },
        { status: 403 }
      );
    }

    const user = await prismadb.user.update({
      where: {
        id: userToken.user_id,
      },
      data:{
        address: `${line1},${city},${state},${pincode}`
      }
    });
    return NextResponse.json({ address:user.address,status: 200 });
  } catch (error) {
    console.log('[ADDRESS_POST]', error);
    return new NextResponse("Internal error", { status: 500 });
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
