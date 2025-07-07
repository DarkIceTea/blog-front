export interface BlogPostCreate {
    Title: string;
    Content: string;
    CategoryId: string;
    Privacy: 'public' | 'private' | 'onReference';
  }