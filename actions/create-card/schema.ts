import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string()
    .nonempty({ message: "Title is required." })
    .min(3, { message: "Title is too short." }),

  boardId: z
    .string()
    .nonempty({ message: "Board ID is required." }),

  listId: z
    .string()
    .nonempty({ message: "List ID is required." }),
});
