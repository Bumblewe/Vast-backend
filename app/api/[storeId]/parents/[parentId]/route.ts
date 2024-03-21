import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs";

import prismadb from "@/lib/prismadb";

export async function GET(
  req: Request,
  { params }: { params: { parentId: string } }
) {
  try {
    if (!params.parentId) {
      return new NextResponse("parent id is required", { status: 400 });
    }

    const parent = await prismadb.parent.findUnique({
      where: {
        id: params.parentId
      }
    });
  
    return NextResponse.json(parent);
  } catch (error) {
    console.log('[PARENT_GET]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};

export async function DELETE(
  req: Request,
  { params }: { params: { parentId: string, storeId: string } }
) {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!params.parentId) {
      return new NextResponse("Parent id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const parent = await prismadb.parent.delete({
      where: {
        id: params.parentId,
      }
    });
  
    return NextResponse.json(parent);
  } catch (error) {
    console.log('[PARENT_DELETE]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};


export async function PATCH(
  req: Request,
  { params }: { params: { parentId: string, storeId: string } }
) {
  try {   
    const { userId } = auth();

    const body = await req.json();
    
    const { name, typeId } = body;
    
    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 403 });
    }

    if (!typeId) {
      return new NextResponse("Type ID is required", { status: 400 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.parentId) {
      return new NextResponse("Parent id is required", { status: 400 });
    }

    const storeByUserId = await prismadb.store.findFirst({
      where: {
        id: params.storeId,
        userId,
      }
    });

    if (!storeByUserId) {
      return new NextResponse("Unauthorized", { status: 405 });
    }

    const parent = await prismadb.parent.update({
      where: {
        id: params.parentId,
      },
      data: {
        name,
        typeId: typeId
      }
    });
  
    return NextResponse.json(parent);
  } catch (error) {
    console.log('[CATEGORY_PATCH]', error);
    return new NextResponse("Internal error", { status: 500 });
  }
};
