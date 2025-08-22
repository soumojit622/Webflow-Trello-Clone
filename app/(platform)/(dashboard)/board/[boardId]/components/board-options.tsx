"use client";

import { toast } from "sonner";
import { MoreHorizontal, X, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverClose,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { deleteBoard } from "@/actions/delete-board";
import { useAction } from "@/hooks/use-action";

type BoardOptionsProps = {
  id: string;
};

export const BoardOptions = ({ id }: BoardOptionsProps) => {
  const { execute, isLoading } = useAction(deleteBoard, {
    onError: (error) => {
      toast.error(error);
    },
  });

  const onDelete = () => {
    execute({ id });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="h-auto w-auto p-2" variant="transparent">
          <MoreHorizontal className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-60 rounded-xl shadow-xl border bg-white px-2 py-3"
        side="bottom"
        align="start"
      >
        {/* Header */}
        <div className="relative mb-3 text-center">
          <span className="text-sm font-medium text-neutral-700">
            Board Actions
          </span>
          <PopoverClose asChild>
            <Button
              className="h-auto w-auto p-1 absolute top-0 right-0 text-neutral-400 hover:text-red-500 transition"
              variant="ghost"
            >
              <X className="h-4 w-4" />
            </Button>
          </PopoverClose>
        </div>

        <div className="space-y-1">
          {/* Delete option */}
          <Button
            variant="ghost"
            onClick={onDelete}
            disabled={isLoading}
            aria-disabled={isLoading}
            className="w-full h-9 px-3 justify-start text-sm font-medium text-neutral-600 hover:bg-red-50 hover:text-red-600 transition"
          >
            <Trash2 className="h-4 w-4 blue text-red-500" />
            Delete board
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};
