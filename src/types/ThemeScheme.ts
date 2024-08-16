import { z } from "astro:content";
import { themeSchema } from '../schemas/themeSchema'

export type ThemeScheme = z.infer<typeof themeSchema>;
