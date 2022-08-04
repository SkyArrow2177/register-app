import isStrongPassword from 'validator/es/lib/isStrongPassword';
import { z } from 'zod';

import { emailSchema, nameSchema } from '@/types/utilSchema';

const signupPasswordError =
  'Password must have at least 8 characters, including at least 1 lowercase letter, 1 uppercase letter, and 1 number.';

const signupSchema = z
  .object({
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
      signupPasswordError,
    ),
  })
  .required();

type SignupSchemaT = z.infer<typeof signupSchema>;

const signupRequest = z
  .object({
    body: signupSchema,
  })
  .required();

type SignupRequestT = z.infer<typeof signupRequest>;

export type { SignupRequestT, SignupSchemaT };
export { signupPasswordError, signupRequest, signupSchema };
