"use client";

import { ElementRef, useRef } from "react";
import { List } from "@prisma/client";
import { toast } from "sonner";
import { MoreHorizontal, X, Copy, Plus, Trash2 } from "lucide-react";

import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FormSubmit } from "@/components/form/form-submit";

import { deleteList } from "@/actions/delete-list";
import { copyList } from "@/actions/copy-list";
import { useAction } from "@/hooks/use-action";

type ListOptionsProps = {
  data: List;
  onAddCard: () => void;
};

export const ListOptions = ({ data, onAddCard }: ListOptionsProps) => {
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute: executeDelete } = useAction(deleteList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" deleted`);
      closeRef.current?.click();
    },
    onError: (error) => toast.error(error),
  });

  const { execute: executeCopy } = useAction(copyList, {
    onSuccess: (data) => {
      toast.success(`List "${data.title}" copied`);
      closeRef.current?.click();
    },
    onError: (error) => toast.error(error),
  });

  const onDelete = (formData: FormData) => {
    executeDelete({
      id: formData.get("id") as string,
      boardId: formData.get("boardId") as string,
    });
  };

  const onCopy = (formData: FormData) => {
    executeCopy({
      id: formData.get("id") as string,
      boardId: formData.get("boardId") as string,
    });
  };

  return (
    <Popover>
      <PopoverTrigger>
        <Button
          asChild
          variant="ghost"
          className="h-auto w-auto p-2 hover:bg-neutral-100"
        >
          <MoreHorizontal className="h-5 w-5 text-neutral-600" />
        </Button>
      </PopoverTrigger>

      <PopoverContent
        side="bottom"
        align="start"
        className="w-48 rounded-xl border border-neutral-200 shadow-lg p-2 bg-white"
      >
        {/* Header */}
        <div className="relative mb-2 text-sm font-medium text-neutral-700 text-center">
          List actions
          <PopoverClose ref={closeRef} asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 top-0 h-6 w-6 text-neutral-500 hover:text-neutral-700 hover:bg-neutral-100"
            >
              <X className="h-4 w-4" />
            </Button>
          </PopoverClose>
        </div>

        <Separator className="mb-2" />

        {/* Actions */}
        <div className="flex flex-col space-y-1">
          <Button
            onClick={onAddCard}
            variant="ghost"
            className="w-full justify-start gap-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100"
          >
            <Plus className="h-4 w-4" />
            Add card
          </Button>

          <form action={onCopy}>
            <input type="hidden" name="id" value={data.id} />
            <input type="hidden" name="boardId" value={data.boardId} />
            <FormSubmit
              variant="ghost"
              className="w-full justify-start gap-2 text-sm font-normal text-neutral-700 hover:bg-neutral-100"
            >
              <Copy className="h-4 w-4" />
              Copy list
            </FormSubmit>
          </form>

          <Separator />

          <form action={onDelete}>
            <input type="hidden" name="id" value={data.id} />
            <input type="hidden" name="boardId" value={data.boardId} />
            <FormSubmit
              variant="ghost"
              className="w-full h-9 px-3 justify-start text-sm font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600 transition"
            >
              <Trash2 className="h-4 w-4 text-red-500" />
              Delete list
            </FormSubmit>
          </form>
        </div>
      </PopoverContent>
    </Popover>
  );
};
