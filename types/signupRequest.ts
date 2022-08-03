import isStrongPassword from 'validator/es/lib/isStrongPassword';
import * as z from 'zod';

import { emailSchema, nameSchema } from '@/types/utilSchema';

export const signupSchema = z.object({
  firstname: nameSchema,
  lastname: nameSchema,
  email: emailSchema,
  password: z.string().refine(
    val =>
      isStrongPassword(val, {
        minLength: 8,
        minNumbers: 1,
        minUppercase: 1,
        minLowercase: 1,
        minSymbols: 0,
      }),
    'Password must have at least 8 characters, including at least 1 lowercase letter, 1 uppercase letter, and 1 number.',
  ),
});

export type SignupRequest = z.infer<typeof signupSchema>;
