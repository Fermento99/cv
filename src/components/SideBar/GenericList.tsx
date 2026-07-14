import type { ReactNode } from "react";

interface GenericListProps {
  categoryName: string;
  children: ReactNode;
}

export function GenericList({ children, categoryName }: GenericListProps) {
  return (
    <article>
      <h3>{categoryName}</h3>
      <ul>
        {children}
      </ul>
    </article>
  );
}
