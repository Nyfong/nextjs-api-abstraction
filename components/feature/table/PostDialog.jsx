"use client";

import { PostIcon } from "../../icons/Icons";
import { Button } from "@/components/ui/button";
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
import { categoryAction } from "@/actions/category";
import { useActionState, useEffect } from "react";
import { postCategoryService } from "@/service/category.service";
export function PostDialog() {
  const [state, formAction, pending] = new useActionState(
    postCategoryService,
    null
  );

  useEffect(() => {
    console.log("useEffect triggered", state);
    if (state?.message === "You are authenticated!") {
      toast.success("Login successful!");
    } else if (state?.status) {
      toast.error(state?.message || "Something went wrong!");
    }
  }, [state]);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">
          <PostIcon size={20} className="inline-block" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        {/* aa */}
        <div className="grid gap-4 py-4">
          <form action={categoryAction}>
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
