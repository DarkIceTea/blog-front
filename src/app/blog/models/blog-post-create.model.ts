export interface BlogPostCreate {
    Title: string;
    Content: string;
    CategoryIds: string[];
    Privacy: 'public' | 'private' | 'onReference';
  }