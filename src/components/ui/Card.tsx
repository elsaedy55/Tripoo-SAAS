import clsx from "clsx";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Card({ className, ...props }: CardProps) {
  return (
    <div
      className={clsx("bg-white rounded-lg border border-gray-200 shadow-sm", className)}
      {...props}
    />
  );
}

export function CardHeader({ className, ...props }: CardProps) {
  return <div className={clsx("p-6 pb-3", className)} {...props} />;
}

export function CardTitle({ className, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  return <h3 className={clsx("text-lg font-medium text-gray-900", className)} {...props} />;
}

export function CardContent({ className, ...props }: CardProps) {
  return <div className={clsx("p-6 pt-0", className)} {...props} />;
}
