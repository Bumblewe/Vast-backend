import prismadb from "@/lib/prismadb";

import { ParentForm } from "./components/parent-form";

const ParentPage = async ({
  params
}: {
  params: { parentId: string, storeId: string }
}) => {
  
  const types = await prismadb.type.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  let Parent = null;
  if (params.parentId != "new") {
    Parent = await prismadb.parent.findUnique({
      where: {
        id: params.parentId,
      },
    });
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ParentForm initialData={Parent} types={types} />
      </div>
    </div>
  );
}

export default ParentPage;
