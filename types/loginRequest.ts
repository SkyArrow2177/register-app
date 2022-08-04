import { z } from 'zod';

import { emailSchema } from '@/types/utilSchema';

const loginSchema = z
  .object({
    email: emailSchema,
    password: z.string().min(1),
  })
  .required();

type LoginSchemaT = z.infer<typeof loginSchema>;

const loginRequest = z
  .object({
    body: loginSchema,
  })
  .required();

type LoginRequestT = z.infer<typeof loginRequest>;

export type { LoginRequestT, LoginSchemaT };
export { loginRequest, loginSchema };
