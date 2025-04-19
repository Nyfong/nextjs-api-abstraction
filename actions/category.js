import {
  editCategoryService,
  postCategoryService,
} from "@/service/category.service";
import { toast } from "react-toastify";
export const categoryAction = async (formData) => {
  const name = formData.get("name");
  const image = formData.get("image");

  if (!name || !image) {
    toast.warning("Please fill in all fields!");
    return;
  }

  try {
    const data = await postCategoryService({ name, image });
    console.log("Data:", data);
    toast.success("Category created successfully! 🚀");
  } catch (err) {
    console.error("Error:", err);
  }
};
export const categoryActionEdit = async (formData) => {
  const name = formData.get("name");
  const image = formData.get("image");
  const id = formData.get("id");

  if (!name || !image) {
    toast.warning("Please fill in all fields!");
    return;
  }

  try {
    const data = await editCategoryService({ id, name, image });
    console.log("Data:", data);
    toast.success("Category update successfully! 🚀");
  } catch (err) {
    console.error("Error:", err);
  }
};
