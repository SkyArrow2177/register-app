import * as z from 'zod';

export function toTitleCase(str: string): string {
  return str.replace(/\b\w+/g, function (txt: string) {
    return txt.charAt(0).toUpperCase() + txt.substring(1).toLowerCase();
  });
}

export const nameSchema = z.string().min(1).transform(toTitleCase);
export const emailSchema = z.string().email().trim().min(1);
