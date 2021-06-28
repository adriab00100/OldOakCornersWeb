export type Frontmatter = {
  path: string;
  date: string;
  title: string;
  author: string;
  previewImage: string;
  tags: string[];
};

export type Post = {
  frontmatter: Frontmatter;
  id: string;
  excerpt: string;
  html: string;
};
