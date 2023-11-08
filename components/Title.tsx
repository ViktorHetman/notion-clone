"use client";

import React from "react";
import { useMutation } from "convex/react";

import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Skeleton } from "./ui/skeleton";

import { api } from "@/convex/_generated/api";
import { TitleProps } from "@/types/propsTypes";

const Title = ({ initialData }: TitleProps) => {
  const update = useMutation(api.documents.update);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [isEditing, setIsEditing] = React.useState<boolean>(false);
  const [title, setTitle] = React.useState<string>(
    initialData.title || "Untitled"
  );

  const enableInput = () => {
    setTitle(initialData.title);
    setIsEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(0, inputRef.current.value.length);
    }, 0);
  };

  const disableInput = () => {
    setIsEditing(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    update({
      id: initialData._id,
      title: e.target.value || "Untitled",
    });
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      disableInput();
    }
  };

  return (
    <div className="flex items-center gap-x-1">
      {!!initialData.icon && <p>{initialData.icon}</p>}
      {isEditing ? (
        <Input
          ref={inputRef}
          onClick={() => enableInput()}
          onBlur={() => disableInput()}
          onChange={(e) => onChange(e)}
          onKeyDown={(e) => onKeyDown(e)}
          value={title}
          className="h-7 px-2 focus-visible:ring-transparent"
        />
      ) : (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => enableInput()}
          className="font-normal h-auto p-1"
        >
          <span className="truncate">{initialData.title}</span>
        </Button>
      )}
    </div>
  );
};

export default Title;

Title.Skeleton = function TitleSkeleton() {
  return <Skeleton className=" h-6 w-20 rounded-md" />;
};
