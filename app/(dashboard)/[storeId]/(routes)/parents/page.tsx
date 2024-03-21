import { format } from "date-fns";

import prismadb from "@/lib/prismadb";

import { ParentColumn } from "./components/columns"
import { ParentsClient } from "./components/client";

const ParentsPage = async ({
  params
}: {
  params: { storeId: string }
}) => {
  const Parents = await prismadb.parent.findMany({
    where: {
      storeId: params.storeId
    },
    include: {
      type:true
    }
  });

  const formattedParents: ParentColumn[] = Parents.map((item) => ({
    id: item.id,
    name: item.name + '-' + item.type.label,
    createdAt: format(item.createdAt, 'MMMM do, yyyy'),
    type: item.type.label
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ParentsClient data={formattedParents} />
      </div>
    </div>
  );
};

export default ParentsPage;
