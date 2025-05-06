import { cn } from "@/app/lib";
import { cva, type VariantProps } from "class-variance-authority";
import React from "react";

const buttonVariants = cva(
  "relative inline-block px-7 py-3 text-lg font-semibold text-[#422800] bg-[#F2DA10] rounded-[12px] hover:bg-gray-800 hover:text-[#F2DA10] ",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-[#422800] shadow-[2px_2px_0_0_#000000] transition-all duration-200 ease-out hover:bg-white active:shadow-[2px_2px_0_0_#422800] active:translate-x-[2px] active:translate-y-[2px] md:min-w-[120px] md:px-10",
        secondary:
          "border-2 border-black shadow-[2px_2px_0_0_#ffffff] transition-all duration-200 ease-out hover:bg-white active:shadow-[2px_2px_0_0_#422800] active:translate-x-[2px] active:translate-y-[2px] md:min-w-[120px] md:px-10",
      },
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, ...props }, ref) => {
    const Comp = "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };

// export default function Button({ text, shadow, href }: ButtonProps) {
//   const router = useRouter();
//   const pathName = usePathname();
//   return (
//     <button
//       onClick={() => router.push(href || "")}
//       className={`relative inline-block px-6 py-3 text-lg font-semibold text-[#422800] ${
//         pathName !== "/signup" ? "bg-[#F2DA10]" : "bg-black text-[#F2DA10]"
//       }   border-2 border-[#422800] rounded-[12px] ${
//         shadow ? "shadow-[2px_2px_0_0_#ffffff]" : "shadow-[2px_2px_0_0_#422800]"
//       }  transition-all duration-200 ease-out hover:bg-white active:shadow-[2px_2px_0_0_#422800] active:translate-x-[2px] active:translate-y-[2px] md:min-w-[120px] md:px-10`}
//     >
//       {text}
//     </button>
//   );
// }
