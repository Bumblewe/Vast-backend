import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { sendLoginOTP } from '@/app/_utils/SMSUtil';
import { generateRandomNumber } from '@/app/_utils/Helper';

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();
    const { mobile } = body;
    if (!mobile) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }
    let code = generateRandomNumber();
    const otp: any = await prismadb.otp.create({
      data: {
        otp: code,
        mobile: mobile,
      },
    });
    await sendLoginOTP(mobile, code);
    return NextResponse.json(otp);
  } catch (error) {
    console.log("[OTP]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function OPTIONS(
  req: Request
) {
  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("[OTP]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

