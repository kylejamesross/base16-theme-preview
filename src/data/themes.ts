import { themeSchema } from "../schemas/themeSchema";
import yaml from 'yaml'
import type { Theme } from "../types/Theme";
import { mapToTheme } from "./mapToTheme";

const yamlFiles = import.meta.glob('../content/themes/*.yaml', { query: '?raw', import: 'default' });

let themes: Theme[] = [];

for (const path in yamlFiles) {
  const fileContents = await yamlFiles[path]();

  if (typeof fileContents !== 'string') {
    throw new Error(`Unable to get file contents file to string for path: ${path}`)
  }

  const fileName = path.split('/').pop();
  const slug = fileName?.split('.yaml').at(0);

  if (!slug) {
    throw new Error(`Unable to generate slug for path ${path}`)
  }

  const parsedContent = yaml.parse(fileContents);
  const schema = themeSchema.parse(parsedContent);
  const theme = mapToTheme(slug, schema); 
  themes.push(theme);
}

themes.sort((a, b) => a.name.localeCompare(b.name));

export default themes;
