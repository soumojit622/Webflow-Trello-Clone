import { z } from "zod";

export const UpdateList = z.object({
  title: z
    .string()
    .min(3, { message: "Title is too short." })
    .nonempty({ message: "Title is required." }),

  id: z
    .string()
    .nonempty({ message: "List ID is required." }),

  boardId: z
    .string()
    .nonempty({ message: "Board ID is required." }),
});
