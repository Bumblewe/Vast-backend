import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { decodeToken, signToken } from '@/app/_utils/AuthUtil';

export async function DELETE(
  req: Request,
  { params }: { params: { cartItemId: string} }
) {
  try {
    let userToken = decodeToken(req);
    const user = await prismadb.user.findUnique({
      where: {
        id: userToken.user_id,
      },
      include: {
        cart: {
          include: {
            cartItem: true,
          },
        },
      },
    });
    
    let updatedCart = await prismadb.cart.update({
      where: {
        id: user?.cartId || "",
      },
      data: {
        cartItemId: {
          set: user?.cart?.cartItemId.filter(
            (cartItem) => cartItem != params.cartItemId
          ),
        },
      },

      include: {
        cartItem: {
          include: {
            color: true,
            size: true,
            product: {
              include: {
                images: true,
                category: true,
                color: true,
                size: true,
              },
            },
          },
        },
      },
    });
    await prismadb.cartItem.delete({
      where: {
        id: params.cartItemId,
      },
    });
    return NextResponse.json({cart:updatedCart,status:200});
  } catch (error) {
    console.log('[CartItem DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function OPTIONS(req: Request) {
  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("Cart", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

