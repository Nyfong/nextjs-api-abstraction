import { deleteCategoryService } from "@/service/category.service";
export const handleDelete = async (id) => {
  console.log("idddd", id);
  const confirmed = window.confirm(
    "Are you sure you want to delete this category?"
  );
  if (!confirmed) return;

  try {
    await deleteCategoryService(id);
    alert("Deleted successfully!");
    // optional: trigger a refresh or callback to reload categories
  } catch (err) {
    console.error(err);
    alert("Delete failed!");
  }
};
