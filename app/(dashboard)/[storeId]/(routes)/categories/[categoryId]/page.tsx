import prismadb from "@/lib/prismadb";

import { CategoryForm } from "./components/category-form";

const CategoryPage = async ({
  params
}: {
  params: { categoryId: string, storeId: string }
}) => {
  let category = null;
  if (params.categoryId != "new") {
    category = await prismadb.category.findUnique({
      where: {
        id: params.categoryId,
      },
    });
  }
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  const parents = await prismadb.parent.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      type: true
    }
  });
  
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm parents={parents} billboards={billboards} initialData={category} />
      </div>
    </div>
  );
}

export default CategoryPage;
