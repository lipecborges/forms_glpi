import { z } from "zod";


export const groupIdSchema = z.object({
    id: z.number()
});
