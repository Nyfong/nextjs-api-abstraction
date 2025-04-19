"use client";
import React from "react";
import { EditIcon, DeleteIcon, PostIcon } from "@/components/icons/Icons";
import { handleDelete } from "@/hooks/handledelete";
import { EditDialog } from "./EditDialog";
import { PostDialog } from "./PostDialog";
export default function TableCategory({ data }) {
  const list = [...data];

  return (
    <div>
      <div className="sticky top-0 bg-black flex flex-col gap-5  ">
        <div className="flex gap-5 items-center p-5">
          <p className="text-gray-300">create category</p>
          <PostDialog />
        </div>
      </div>

      <div className="overflow-x-auto max-w-5xl  m-auto ">
        <table className="min-w-full divide-y-2 divide-gray-200">
          <thead className=" ltr:text-left rtl:text-right">
            <tr className="*:font-medium *:text-gray-400">
              <th className="px-3 py-2 whitespace-nowrap">Name</th>
              <th className="px-3 py-2 whitespace-nowrap">image</th>
              <th className="px-3 py-2 whitespace-nowrap">createAt</th>
              <th className="px-3 py-2 whitespace-nowrap">updateAt</th>
              <th className="px-3 py-2 whitespace-nowrap">edit</th>
              <th className="px-3 py-2 whitespace-nowrap">delete</th>
              <th className="px-3 py-2 whitespace-nowrap">id</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {list.map((el, index) => (
              <tr key={index} className="*:text-gray-400 *:first:font-medium">
                <td className="px-3 py-2 whitespace-nowrap">{el.name}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <img
                    src={
                      el?.image == "https://placeimg.com/640/480/any"
                        ? "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg"
                        : el?.image
                    }
                    alt={el.name}
                    className="h-20 w-20 rounded-lg object-cover"
                  />
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  {el?.creationAt}
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{el?.updatedAt}</td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <EditDialog id={el.id} />
                </td>
                <td className="px-3 py-2 whitespace-nowrap">
                  <button onClick={() => handleDelete(el.id)}>
                    <DeleteIcon
                      size={20}
                      className="inline-block text-red-500 hover:text-red-700 cursor-pointer"
                    />
                  </button>
                </td>
                <td className="px-3 py-2 whitespace-nowrap">{el?.id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
