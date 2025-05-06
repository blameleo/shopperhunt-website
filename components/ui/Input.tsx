import * as React from "react";
import { cn } from "@/app/lib";

const Input = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      {...props}
      ref={ref}
      className={cn(
        "p-[16px] placeholder:text-[14px] bg-[#FAFAFA] border-[2px] border-[#D3D3D3] rounded-[10px]",
        className
      )}
    />
  );
});

Input.displayName = "Input";

export default Input;
