import * as z from 'zod';

import { emailSchema } from '@/types/utilSchema';

export const loginSchema = z
  .object({
    email: emailSchema,
    password: z.string().min(1),
  })
  .required();

export type LoginRequest = z.infer<typeof loginSchema>;
