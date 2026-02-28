import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merges Tailwind CSS classes intelligently
 * Combines clsx for conditional classes and tailwind-merge for conflict resolution
 *
 * @example
 * cn("px-2 py-1", condition && "bg-black", "px-4")
 * // Returns: "py-1 bg-black px-4" (px-4 overrides px-2)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
