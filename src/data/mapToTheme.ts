import type { Theme } from "../types/Theme";
import type { ThemeScheme } from "../types/ThemeScheme";

export const mapToTheme = (slug: string, schema: ThemeScheme): Theme => ({
  slug: slug,
  name: schema.name,
  author: schema.author,
  base00: schema.palette.base00,
  base01: schema.palette.base01,
  base02: schema.palette.base02,
  base03: schema.palette.base03,
  base04: schema.palette.base04,
  base05: schema.palette.base05,
  base06: schema.palette.base06,
  base07: schema.palette.base07,
  base08: schema.palette.base08,
  base09: schema.palette.base09,
  base0A: schema.palette.base0A,
  base0B: schema.palette.base0B,
  base0C: schema.palette.base0C,
  base0D: schema.palette.base0D,
  base0E: schema.palette.base0E,
  base0F: schema.palette.base0F,
})
