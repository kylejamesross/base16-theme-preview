import { z } from "zod";

export const themeSchema = z.object({
  name: z.string(),
  author: z.string(),
  palette: z.object({
    base00: z.string().length(6),
    base01: z.string().length(6),
    base02: z.string().length(6),
    base03: z.string().length(6),
    base04: z.string().length(6),
    base05: z.string().length(6),
    base06: z.string().length(6),
    base07: z.string().length(6),
    base08: z.string().length(6),
    base09: z.string().length(6),
    base0A: z.string().length(6),
    base0B: z.string().length(6),
    base0C: z.string().length(6),
    base0D: z.string().length(6),
    base0E: z.string().length(6),
    base0F: z.string().length(6),
  }),
})
