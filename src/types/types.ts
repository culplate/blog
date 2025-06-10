import { Prisma } from '@prisma/client';

export type Post = {
  id: number;
  title: string;
  content: Prisma.JsonValue;
  createdAt: Date;
  updatedAt: Date;
  categoryId?: number | null;
  category?: string | null;
};

export type PostCreateForm = Omit<Post, 'id' | 'createdAt' | 'updatedAt'>;
export type PostUpdateForm = Partial<PostCreateForm>;
