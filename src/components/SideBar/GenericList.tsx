import type { ReactNode } from "react";

interface GenericListProps {
  categoryName: string;
  children: ReactNode;
  className?: string;
}

export function GenericList({ children, categoryName, className }: GenericListProps) {
  return (
    <article className={className}>
      <h3>{categoryName}</h3>
      <ul>{children}</ul>
    </article>
  );
}
