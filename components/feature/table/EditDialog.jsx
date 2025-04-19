import { EditIcon } from "@/components/icons/Icons";
import { Button } from "@/components/ui/button";
import { editCategoryService } from "@/service/category.service";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { categoryActionEdit } from "@/actions/category";

export function EditDialog({ id }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">
          <EditIcon size={20} className="inline-block" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit Category id : {id}</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <form action={categoryActionEdit}>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" name="name" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Image
              </Label>
              <Input id="image" name="image" className="col-span-3" />
            </div>
            <input type="hidden" id="id" name="id" value={id} />
            <div className="flex justify-end">
              <Button className="mt-5" type="submit">
                Save changes
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
}
