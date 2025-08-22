import { z } from "zod";

export const CreateBoard = z.object({
  title: z
    .string()
    .min(3, { message: "Title must be at least 3 characters." })
    .nonempty({ message: "Title is required." }),

  image: z.string().nonempty({ message: "Image is required." }),
});
