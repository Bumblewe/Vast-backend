import { NextResponse } from 'next/server';
import {signToken} from '@/app/_utils/AuthUtil';

import prismadb from '@/lib/prismadb';
import { Constants } from '@/app/_utils/Constants';
import { getHashedPassword } from '@/app/_utils/Helper';
 
export async function POST(
  req: Request,
) {
  try {

    const body = await req.json();

    const { mobile, otp, data, new_user } = body;

    if(new_user && !data){
      return NextResponse.json({message:"Data missing"},{ status: 403 });
    }

    if (!mobile) {
      return NextResponse.json({message:"Mobile required"},{ status: 403 });
    }

    if (!otp) {
      return NextResponse.json({message:"Otp is required"},{ status: 400 });
    }

    const otp_record = await prismadb.otp.findFirst({
      where: {
        mobile
      },
      orderBy: [{createdAt:"desc"}]
    });

    if ((Date.now() - new Date(otp_record?.createdAt || '').getTime()) > 1000 * 60 * 10) {      
      return NextResponse.json({message:"otp_expired"},{ status: 403 })
		}
		if (otp_record?.otp !== otp) {
      return NextResponse.json({message:"incorrect_otp"},{status:400})
		}
    if (!otp_record) {
      return NextResponse.json({message:"Unauthorized"},{status:405})
    }

    if(new_user){
      const user = await prismadb.user.create({
        data: {
          email: data.email,
          name: data.name,
          role: "USER",
          mobile: mobile,
          address: "",
          password: getHashedPassword(data.password),
        },
      });

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
    }
  } catch (error) {
    console.log('[BANNER_POST]', error);
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
