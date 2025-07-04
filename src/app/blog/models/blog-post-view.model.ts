export interface BlogPostView {
    Id: string; // Guid в C# обычно представляется строкой в JSON
    Title: string;
    Content: string;
    CreatedAt: Date;
    UpdatedAt: Date;
    Category: {
      Id: string;
      Name: string;
    };
    Privacy: 'public' | 'private' | 'onReference';
    AuthorId: string;
    IsBlocked: boolean;
    PathsToImages: string[];
  }