"use server";
import { apiRequest } from "@/utils/apiService";
import { revalidatePath } from "next/cache";

//GET
export const getCategoryService = async () => {
  const data = await apiRequest({ endpoint: "/categories/" });
  // console.log("this is the data that i get:", data);
  return data;
};

//DELETE

export const deleteCategoryService = async (id) => {
  console.log("ss", id);
  const data = await apiRequest({
    endpoint: `/categories/${id}/`,
    method: "DELETE",
  });

  revalidatePath("/");
};

//POST

export const postCategoryService = async ({ name, image }) => {
  console.log("qq", name, image);
  const data = await apiRequest({
    endpoint: `/categories/`,
    method: "POST",
    body: {
      name: name,
      image: image,
    },
  });
  console.log(data);

  revalidatePath("/");
  return data;
};

//edit

export const editCategoryService = async ({ id, name, image }) => {
  console.log("qq", name, image);
  const data = await apiRequest({
    endpoint: `/categories/${id}`,
    method: "PUT",
    body: {
      name: name,
      image: image,
    },
  });
  console.log(data);

  revalidatePath("/");
  return data;
};
