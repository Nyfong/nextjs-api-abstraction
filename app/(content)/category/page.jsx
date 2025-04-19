import React from "react";
import TableCategory from "@/components/feature/table/TableCategory";
import { getCategoryService } from "@/service/category.service";
export default async function Category() {
  const data = await getCategoryService();
  console.log("this is the data", data);
  return (
    <>
      <div className="bg-black p-5">
        <TableCategory data={data} />
      </div>
    </>
  );
}
