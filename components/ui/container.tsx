import { cn } from "@/lib/utils";
import { PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
}

export function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <div
      className={cn(
        "max-w-[80rem] w-full m-auto px-4 lg:px-6 py-6 h-full",
        className
      )}
    >
      {children}
    </div>
  );
}
