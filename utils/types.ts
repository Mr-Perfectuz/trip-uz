export type actionFunction = (
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prevState: any,
  formData: FormData
) => Promise<{ message: string }>;
