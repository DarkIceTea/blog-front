import { Tag } from "./tag.model";

export interface BlogPostView {
    id: string; 
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    categoryName: string;
    categoryId: string;
    tags: Tag[];
    privacy: 'public' | 'private' | 'onReference';
    authorId: string;
    isBlocked: boolean;
    pathsToImages: string[];
  }