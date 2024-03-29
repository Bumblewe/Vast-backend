import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { decodeToken, signToken } from '@/app/_utils/AuthUtil';
import { Qahiri } from 'next/font/google';

export async function POST(
  req: Request
) {
  try {
    let userToken = decodeToken(req);
    const body = await req.json();
    const { data } = body;
    let updatedCart;
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
    if(!user?.cartId) {
      const cartItem: any = await prismadb.cartItem.create({
        data:{
          productId:data.id,
          sizeId:data.sizeId,
          colorId:data.colorId,
          quantity:data.quantity
        },
      });
      let cart = await prismadb.cart.create({
        data: {
          cartItemId: [cartItem.id]
        }
      });
      updatedCart = await prismadb.user.update({
        where: {
          id: user?.id,
        },
        data: {
          cartId: cart.id,
        },
        include: {
          cart: {
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
          },
        },
      });
      updatedCart = updatedCart?.cart;
    }else {
      let cartItem = await prismadb.cartItem.create({
        data: {
          productId: data.id,
          sizeId: data.sizeId,
          colorId: data.colorId,
          quantity: data.quantity,
        },
      });
      updatedCart = await prismadb.cart.update({
        where: {
          id: user?.cartId,
        },
        data: {
          cartItemId: [...(user.cart?.cartItemId || []), cartItem.id],
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
    }
    return NextResponse.json({cart:updatedCart,status: 200 });
  } catch (error) {
    console.log("cart", error);
    return NextResponse.json({message:"Internal error"},{ status: 500});
  }
};

export async function GET(req:Request) {
  let userToken = decodeToken(req);
  const user = await prismadb.user.findUnique({
    where: {
      id: userToken.user_id,
    },
    include: {
      cart: {
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
      },
    },
  });  
  if(!user?.cartId)  return NextResponse.json({cart:[], status: 200 });
  return NextResponse.json({ cart:user?.cart, status: 200 });
}

export async function PATCH(
  req: Request
) {
  try {   
    const body = await req.json();
    
    const { data } = body;
    let quantity =
      data.step == "increase"
        ? Number(data.quantity) + 1
        : Number(data.quantity) - 1;    
    
    await prismadb.cartItem.update({
      where: {
        id: data.id,
      },
      data: {
        quantity: JSON.stringify(quantity),
      },
    });
    let userToken = decodeToken(req);
    const user = await prismadb.user.findUnique({
      where: {
        id: userToken.user_id,
      },
      include: {
        cart: {
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
        },
      },
    });  
    if(!user?.cartId)  return NextResponse.json({cart:[], status: 200 });
    return NextResponse.json({ cart:user?.cart, status: 200 });  
  } catch (error) {
    console.log('[BANNER_PATCH]', error);
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

