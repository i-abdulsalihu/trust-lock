import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";
import { createAvatar } from "@dicebear/core";
import { adventurerNeutral } from "@dicebear/collection";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatAddress(
  _addr: string | undefined,
  _n: number = 6,
): string | undefined {
  if (!_addr) return "undefined";
  return _addr?.length > _n
    ? _addr.slice(0, _n) + "..." + _addr.slice(_addr.length - 4)
    : _addr;
}

export function generateAvatar(_str: string) {
  const avatar = createAvatar(adventurerNeutral, {
    seed: `str-${_str?.toLowerCase()}`,
  });
  const svg = avatar.toDataUri();
  return svg;
}
