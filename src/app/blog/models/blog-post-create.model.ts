export interface BlogPostCreate {
    title: string;
    content: string;
    categoryId: string;
    privacy: 'public' | 'private' | 'onReference';
  }