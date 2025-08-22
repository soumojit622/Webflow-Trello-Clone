"use client";

import { ElementRef, useRef } from "react";
import { useRouter } from "next/navigation";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverClose,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";

import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";
import { FormPicker } from "@/components/form/form-picker";
import { useAction } from "@/hooks/use-action";
import { useProModal } from "@/hooks/use-pro-modal";
import { createBoard } from "@/actions/create-board";

type FormPopoverProps = {
  children: React.ReactNode;
  side?: "left" | "right" | "top" | "bottom";
  align?: "start" | "center" | "end";
  sideOffset?: number;
};

export const FormPopover = ({
  children,
  side = "bottom",
  align,
  sideOffset,
}: FormPopoverProps) => {
  const proModal = useProModal();
  const router = useRouter();
  const closeRef = useRef<ElementRef<"button">>(null);

  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      closeRef.current?.click();
      toast.success("Board created.");
      router.push(`/board/${data.id}`);
    },
    onError: (error) => {
      toast.error(error);
      proModal.onOpen();
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const image = formData.get("image") as string;

    execute({ title, image });
  };

  return (
    <Popover>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        align={align}
        side={side}
        sideOffset={sideOffset}
        className="w-80 rounded-xl border border-gray-200 bg-white shadow-lg p-5 relative animate-in fade-in-0 zoom-in-95"
      >
        {/* Header */}
        <div className="text-base font-semibold text-center pb-3">
          Create a new Board
        </div>

        {/* Close button */}
        <PopoverClose ref={closeRef} asChild>
          <Button
            variant="ghost"
            className="h-auto w-auto p-2 absolute top-3 right-3 text-gray-500 hover:text-gray-700 transition-colors"
          >
            <X className="h-4 w-4" />
          </Button>
        </PopoverClose>

        {/* Form */}
        <form action={onSubmit} className="space-y-5">
          <div className="space-y-4">
            <FormPicker id="image" errors={fieldErrors} />
            <FormInput
              id="title"
              label="Board Title"
              type="text"
              errors={fieldErrors}
            />
          </div>

          <FormSubmit className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded-lg flex items-center justify-center gap-2 transition">
            <Plus className="h-4 w-4" />
            Create
          </FormSubmit>
        </form>
      </PopoverContent>
    </Popover>
  );
};
