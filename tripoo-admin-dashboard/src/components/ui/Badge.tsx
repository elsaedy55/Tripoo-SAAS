import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "secondary" | "destructive" | "outline" | "success" | "warning";
}

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ className, variant = "default", ...props }, ref) => {
    const variants = {
      default: "border-transparent bg-blue-600 text-white hover:bg-blue-700",
      secondary: "border-transparent bg-gray-100 text-gray-900 hover:bg-gray-200",
      destructive: "border-transparent bg-red-100 text-red-700 hover:bg-red-200",
      outline: "text-gray-900 border-gray-200 hover:bg-gray-100",
      success: "border-transparent bg-green-100 text-green-700 hover:bg-green-200",
      warning: "border-transparent bg-yellow-100 text-yellow-700 hover:bg-yellow-200",
    };

    return (
      <span
        ref={ref}
        className={twMerge(
          "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
          variants[variant],
          className
        )}
        {...props}
      />
    );
  }
);
Badge.displayName = "Badge";
