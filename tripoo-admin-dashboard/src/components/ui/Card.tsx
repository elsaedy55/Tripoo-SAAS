import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={twMerge("bg-white rounded-xl border border-gray-100 shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={twMerge("p-6 pb-3", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={twMerge("text-lg font-bold text-gray-900", className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={twMerge("p-6 pt-0", className)} {...props} />;
}
