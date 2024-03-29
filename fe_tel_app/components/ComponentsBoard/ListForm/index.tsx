"use client";

import { toast } from "sonner";
import { Plus, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState, useRef, ElementRef } from "react";
import { useEventListener, useOnClickOutside } from "usehooks-ts";

//import { useAction } from "@/hooks/use-action";
//import { createList } from "@/actions/create-list";
import { FormInput } from "@/components/Form/form-input";
import { FormSubmit } from "@/components/Form/form-submit";
import { Button } from "@nextui-org/react";
import { RegisterOptions, FieldValues, UseFormRegisterReturn } from "react-hook-form";

export const ListForm = () => {
  const router = useRouter();
  const params = useParams();

  const formRef = useRef<ElementRef<"form">>(null);
  const inputRef = useRef<ElementRef<"input">>(null);

  const [isEditing, setIsEditing] = useState(false);

  const enableEditing = () => {
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    });
  };

  const disableEditing = () => {
    setIsEditing(false);
  };

  // const { execute, fieldErrors } = useAction(createList, {
  //   onSuccess: (data) => {
  //     toast.success(`List "${data.title}" created`);
  //     disableEditing();
  //     router.refresh();
  //   },
  //   onError: (error) => {
  //     toast.error(error);
  //   },
  // });

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      disableEditing();
    };
  };

  useEventListener("keydown", onKeyDown);
  useOnClickOutside(formRef, disableEditing);

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;
    const boardId = formData.get("boardId") as string;

    // execute({
    //   title,
    //   boardId
    // });
  }

  if (isEditing) {
    return (
      <li className="shrink-0 h-full w-[272px] select-none">
        <form
          action={onSubmit}
          ref={formRef}
          className="w-full p-3 rounded-md bg-white space-y-4 shadow-md"
        >
          <FormInput
            ref={inputRef}
            //errors={fieldErrors}
            id="title"
            className="text-sm px-2 py-1 h-7 font-medium border-transparent hover:border-input focus:border-input transition"
            placeholder="Enter list title..." 
            register={function <TFieldName extends string = string>(name: TFieldName, options?: RegisterOptions<FieldValues, TFieldName> | undefined): UseFormRegisterReturn<TFieldName> {
              throw new Error("Function not implemented.");
            } }          />
          <input
            hidden
            value={params.boardId}
            name="boardId"
          />
          <div className="flex items-center gap-x-1">
            <FormSubmit>
              Add list
            </FormSubmit>
            <Button 
              onClick={disableEditing}
              size="sm"
              variant="ghost"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
        </form>
      </li>
    );
  };

  return (
    <li className="shrink-0 h-full w-[272px] select-none">
      <button
        onClick={enableEditing}
        className="w-full rounded-md bg-white/80 hover:bg-white/50 transition p-3 flex items-center font-medium text-sm"
      >
        <Plus className="h-4 w-4 mr-2" />
        Add a list
      </button>
    </li>
  );
};