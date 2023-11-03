"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const DocumentsPage = () => {
  const { user, isSignedIn } = useUser();

  console.log(user?.firstName, isSignedIn);

  return (
    <div
      className="h-full flex flex-col items-center justify-center
  space-y-4"
    >
      <Image
        src="/empty.png"
        height="300"
        width="300"
        alt="Empty document"
        className="dark:hidden"
      />
      <Image
        src="/empty-white.png"
        height="300"
        width="300"
        alt="Empty document"
        className="hidden dark:block"
      />
      <h2 className="text-lg font-medium">
        Welcome to {user?.firstName}&apos;s Notion Clone
      </h2>
      <Button>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </div>
  );
};

export default DocumentsPage;
