import { z } from "zod";

export const UpdateCard = z.object({
  boardId: z
    .string()
    .nonempty({ message: "Board ID is required." }),

  description: z
    .string()
    .min(3, { message: "Description is too short." })
    .optional(),

  title: z
    .string()
    .min(3, { message: "Title is too short." })
    .optional(),

  id: z
    .string()
    .nonempty({ message: "Card ID is required." }),
});
