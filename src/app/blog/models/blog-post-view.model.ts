export interface BlogPostView {
    id: string; 
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    category: {
      id: string;
      name: string;
    };
    privacy: 'public' | 'private' | 'onReference';
    authorId: string;
    isBlocked: boolean;
    pathsToImages: string[];
  }