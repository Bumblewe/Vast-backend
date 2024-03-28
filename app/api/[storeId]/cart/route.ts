import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { decodeToken, signToken } from '@/app/_utils/AuthUtil';

export async function POST(
  req: Request
) {
  try {
    let userToken = decodeToken(req);
    const body = await req.json();
    const { data } = body;
   
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
    let cartId = user?.cartId || '';
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
      await prismadb.user.update({
        where: {
          id: user?.id
        },
        data: {
          cartId: cart.id
        }
      })
      cartId = cart.id
    }else {
        let cartItem = user?.cart?.cartItem?.find((item)=>item.productId==data.id);
        if(!cartItem){
            cartItem = await prismadb.cartItem.create({
              data: {
                productId: data.id,
                sizeId: data.sizeId,
                colorId: data.colorId,
                quantity: data.quantity,
              },
            });
            await prismadb.cart.update({
              where: {
                id: user?.cartId,
              },
              data: {
                cartItemId: [...(user.cart?.cartItemId || []), cartItem.id],
              },
            }); 
        }else{
          await prismadb.cartItem.update({
            where: {
              id: cartItem.id,
            },
            data: {
              productId: data.id,
              sizeId: data.sizeId,
              colorId: data.colorId,
              quantity: data.quantity,
            },
          });   
        }
    }
    let updatedCart = await prismadb.cart.findUnique({
      where: {
        id: cartId,
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


export async function OPTIONS(req: Request) {
  try {
    return NextResponse.json({ status: 200 });
  } catch (error) {
    console.log("Cart", error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

