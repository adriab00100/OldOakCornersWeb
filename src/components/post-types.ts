export type PostFrontmatter = {
  readonly path: string | null;
  readonly date: string | null;
  readonly title: string | null;
  readonly author: string | null;
  readonly previewImage: string | null;
  readonly tags: readonly (string | null)[] | null;
};

export type Post = {
  readonly frontmatter: PostFrontmatter | null;
  readonly excerpt: string | null;
};
