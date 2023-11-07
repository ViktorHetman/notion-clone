"use client";

import React from "react";
import { useParams, useRouter } from "next/navigation";
import { useQuery, useMutation } from "convex/react";
import { toast } from "sonner";
import { SearchIcon, Trash, Undo } from "lucide-react";

import { Spinner } from "./Spinner";
import { Input } from "./ui/input";

import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import ConfirmModal from "./modals/ConfirmModal";

const TrashBox = () => {
  const router = useRouter();
  const params = useParams();
  const documents = useQuery(api.documents.getArchived);
  const restore = useMutation(api.documents.restore);
  const remove = useMutation(api.documents.remove);

  const [search, setSearched] = React.useState<string>("");

  const filteredDocuments = documents?.filter((document) => {
    return document.title.toLowerCase().includes(search.toLowerCase());
  });

  const onClick = (documentId: string) => {
    router.push(`/documents/${documentId}`);
  };

  const onRestore = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>,
    documentId: Id<"documents">
  ) => {
    e.stopPropagation();

    const promise = restore({ id: documentId });

    toast.promise(promise, {
      loading: "Restoring note...",
      success: "Note Restored!",
      error: "Failed to restore note",
    });
  };

  const onRemove = (documentId: Id<"documents">) => {
    const promise = remove({ id: documentId });

    toast.promise(promise, {
      loading: "Deleting note...",
      success: "Note Deleted",
      error: "Failed to delete note",
    });

    if (params.documentId === documentId) {
      router.push("/documents");
    }
  };

  if (documents === undefined) {
    return (
      <div className="h-full flex items-center justify-center p-4">
        <Spinner size="lg" />
      </div>
    );
  }

  return (
    <div className="text-sm">
      <div className="flex items-center gap-x-1 p-2">
        <SearchIcon className="w-4 h-4" />
        <Input
          value={search}
          onChange={(e) => setSearched(e.target.value)}
          className="
        h-7 px-2 focus-visible:ring-transparent bg-secondary"
          placeholder="Filter by page title..."
        />
      </div>
      <div className="mt-2 px-1 pb-1">
        <p className="hidden last:block text-xs text-center pb-2 text-muted-foreground">
          No documents found
        </p>
        {filteredDocuments?.map((document) => (
          <div
            key={document._id}
            role="button"
            onClick={() => onClick(document._id)}
            className="text-sm rounded-sm w-full hover:bg-primary/5 flex
            items-center text-primary justify-between"
          >
            <span className="truncate pl-2">{document.title}</span>
            <div className="flex items-center">
              <div
                onClick={(e) => onRestore(e, document._id)}
                role="button"
                className="rounded-sm p-2 hover:bg-neutral-200 dark:hover:bg-neutral-600"
              >
                <Undo className="w-4 h-4 text-muted-foreground" />
              </div>
              <ConfirmModal onConfirm={() => onRemove(document._id)}>
                <div
                  role="button"
                  className="rounded-sm p-2 hover:bg-rose-200 dark:hover:bg-rose-300"
                >
                  <Trash className="w-4 h-4 text-rose-500" />
                </div>
              </ConfirmModal>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrashBox;
