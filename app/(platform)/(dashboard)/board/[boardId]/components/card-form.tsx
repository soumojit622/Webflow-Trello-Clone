"use client";

import { useRef, forwardRef, ElementRef, KeyboardEventHandler } from "react";
import { toast } from "sonner";
import { useParams } from "next/navigation";
import { useOnClickOutside, useEventListener } from "usehooks-ts";
import { Plus, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { FormTextarea } from "@/components/form/form-textarea";
import { FormSubmit } from "@/components/form/form-submit";
import { useAction } from "@/hooks/use-action";
import { createCard } from "@/actions/create-card";

type CardFormProps = {
  listId: string;
  enableEditing: () => void;
  disableEditing: () => void;
  isEditing: boolean;
};

export const CardForm = forwardRef<HTMLTextAreaElement, CardFormProps>(
  ({ listId, enableEditing, disableEditing, isEditing }, ref) => {
    const params = useParams();
    const formRef = useRef<ElementRef<"form">>(null);

    const { execute, fieldErrors } = useAction(createCard, {
      onSuccess: (data) => {
        toast.success(`Card "${data.title}" created.`);
        formRef.current?.reset();
      },
      onError: (error) => {
        toast.error(error);
      },
    });

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        disableEditing();
      }
    };

    const onSubmit = (formData: FormData) => {
      const title = formData.get("title") as string;
      const listId = formData.get("listId") as string;
      const boardId = formData.get("boardId") as string;

      if (title.trim().length > 0) {
        execute({ title, listId, boardId });
      } else {
        toast.error("Card title cannot be empty.");
      }
    };

    useOnClickOutside(formRef as React.RefObject<HTMLElement>, disableEditing);
    useEventListener("keydown", onKeyDown);

    const onTextareaKeyDown: KeyboardEventHandler<HTMLTextAreaElement> = (e) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        formRef.current?.requestSubmit();
      }
    };

    if (isEditing) {
      return (
        <form
          ref={formRef}
          action={onSubmit}
          className="m-1 p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <FormTextarea
            id="title"
            onKeyDown={onTextareaKeyDown}
            errors={fieldErrors}
            ref={ref}
            placeholder="Enter a title for this card..."
            className="text-sm px-2 py-1 h-16 font-medium border-transparent hover:border-input focus:border-input transition"
          />

          {/* ✅ Fixed hidden inputs */}
          <input type="hidden" name="listId" defaultValue={listId} />
          <input
            type="hidden"
            name="boardId"
            defaultValue={params.boardId as string}
          />

          <div className="flex items-center gap-x-2">
            <FormSubmit className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-md px-3 py-1">
              Add card
            </FormSubmit>
            <Button
              onClick={disableEditing}
              size="sm"
              variant="ghost"
              type="button"
            >
              <X className="h-5 w-5 text-blue-500" />
            </Button>
          </div>
        </form>
      );
    }

    return (
      <div className="pt-2 px-2">
        <Button
          onClick={enableEditing}
          className="h-auto px-2 py-1.5 w-full justify-start text-sm font-medium text-muted-foreground rounded-md bg-white/80 hover:bg-white/50 transition"
          size="sm"
          variant="ghost"
        >
          <Plus className="h-4 w-4 mr-2 text-blue-500" />
          Add a card
        </Button>
      </div>
    );
  }
);

CardForm.displayName = "CardForm";
