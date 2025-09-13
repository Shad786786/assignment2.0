import { cn } from "@/lib/utils";

export function Button({ className, ...props }) {
  return (
    <button
      className={cn(
        "bg-blue-600 text-white font-medium px-4 py-2 rounded hover:bg-blue-700 transition-all",
        className
      )}
      {...props}
    />
  );
}
