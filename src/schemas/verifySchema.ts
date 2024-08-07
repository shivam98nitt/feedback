import { z } from "zod";

export const verifySchema = z.object({
    code: z.string().length(6, 'Verification coe must be 6 digits')
})