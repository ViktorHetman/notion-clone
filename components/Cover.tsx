"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import { CoverImageProps } from "@/types/propsTypes";

const Cover = ({ url, preview }: CoverImageProps) => {
  return (
    <div
      className={cn(
        "relative w-full h-[35vh] group",
        !url && "h-[12vh]",
        url && "bg-muted"
      )}
    >
      {!!url && <Image src={url} fill alt="Cover" className="object-cover" />}
    </div>
  );
};

export default Cover;
