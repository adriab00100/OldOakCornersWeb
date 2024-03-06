export type Frontmatter = {
  readonly path: string | null;
  readonly date: string | null;
  readonly title: string | null;
  readonly author: string | null;
  readonly previewImage: string | null;
  readonly tags: readonly (string | null)[] | null;
};

export type Post = {
  readonly frontmatter: Frontmatter | null;
  readonly excerpt: string | null;
};
