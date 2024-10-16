import * as z from 'zod';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ZodSchema } from 'zod';

export const profileSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Your firstname should be at least 3 letters' }),
  lastName: z
    .string()
    .min(3, { message: 'Your lastname should be at least 3 letters' }),
  userName: z
    .string()
    .min(3, { message: 'Your username should be at least 3 letters' }),
});

export function validatedWithZodSchema<T>(
  schema: ZodSchema<T>,
  data: unknown
): T {
  const result = schema.safeParse(data);

  if (!result.success) {
    const err = result.error.errors.map((err) => err.message);
    throw new Error(err.join(','));
  }
  return result.data;
}
