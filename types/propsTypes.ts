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
