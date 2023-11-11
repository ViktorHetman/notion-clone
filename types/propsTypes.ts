import { LucideIcon } from "lucide-react";

import { Doc, Id } from "@/convex/_generated/dataModel";

export interface ItemProps {
  id?: Id<"documents">;
  documentsIcon?: string;
  active?: boolean;
  expanded?: boolean;
  isSearch?: boolean;
  level?: number;
  onExpand?: () => void;
  onClick?: () => void;
  label: string;
  icon: LucideIcon;
}

export interface DocumentListProps {
  parentDocumentId?: Id<"documents">;
  level?: number;
  data?: Doc<"documents">[];
}

export interface ConfirmModalProps {
  children: React.ReactNode;
  onConfirm: () => void;
}

export interface NavbarMainProps {
  isCollapsed: boolean;
  onResetWidth: () => void;
}

export interface TitleProps {
  initialData: Doc<"documents">;
}

export interface DocumentIdPageProps {
  params: {
    documentId: Id<"documents">;
  };
}

export interface ToolbarProps {
  initialData: Doc<"documents">;
  preview?: boolean;
}

export interface IconPickerProps {
  onChange: (icon: string) => void;
  children: React.ReactNode;
  asChild?: boolean;
}

export interface CoverImageProps {
  url: string;
  preview?: boolean;
}

export interface EditorProps {
  onChange: (value: string) => void;
  initialContent?: string;
  editable?: boolean;
}

export interface PublishProps {
  initialData: Doc<"documents">;
}
