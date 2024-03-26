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
      return NextResponse.json({message:"Mobile required"},{ status: 403});
    }
    const threshold = Date.now() - 1000 * 60 * 30;
		let otps = await prismadb?.otp.count({
      where: {
        mobile: mobile,
        createdAt: { gt: new Date(threshold) },
      },
    });
		if (otps === 3) {
			return NextResponse.json({ message: "too_many_requests"},{status: 429 });
		}
    let code = generateRandomNumber();
    const otp: any = await prismadb.otp.create({
      data: {
        otp: code,
        mobile: mobile,
      },
    });
    // await sendLoginOTP(mobile, code);
    return NextResponse.json({ status: 200 });
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

