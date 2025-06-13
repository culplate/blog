import { credentialsSchema } from '@/lib/validations/auth';
import { Prisma } from '@prisma/client';
import { z } from 'zod';

// Post type definitions
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

// Zod schema types
export type CredentialsInput = z.infer<typeof credentialsSchema>;
