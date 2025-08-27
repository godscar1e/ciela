// constants/templates.ts
import { client } from '../../sanity/client'; // Adjust path to your client file

export type Template = {
  slug: string;
  title: string;
};

export const templates: Template[] = await client.fetch(
  `*[_type == "template"]{ slug, title }`
);
