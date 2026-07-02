import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const keys = () =>
  createEnv({
    skipValidation: process.env.SKIP_ENV_VALIDATION === "true",
    server: {
      BASEHUB_TOKEN: z
        .string()
        .refine(
          (val) => !val || val.startsWith("bshb_pk_"),
          "BASEHUB_TOKEN must start with bshb_pk_ when provided"
        )
        .optional()
        .or(z.literal("")),
    },
    runtimeEnv: {
      BASEHUB_TOKEN: process.env.BASEHUB_TOKEN,
    },
  });
