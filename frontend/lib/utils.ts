import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAddress(
  _addr: string | undefined,
  _n: number = 6,
): string | undefined {
  if (!_addr) return "undefined";
  return _addr?.length > _n
    ? _addr.slice(0, _n) + "···" + _addr.slice(_addr.length - 4)
    : _addr;
}
