import { PostCreateForm, PostUpdateForm } from '@/types/types';
import { Post, Prisma } from '@prisma/client';
import { prisma } from './db';

export async function getPosts(): Promise<Post[]> {
  const posts = await prisma.post.findMany({});
  console.log('getPosts', posts);
  return posts;
}

export async function getPostById(id: number): Promise<Post | null> {
  const post = await prisma.post.findUnique({
    where: { id },
  });

  console.log('getPostById', post);
  return post;
}

export function createPost(data: PostCreateForm): Promise<Post> {
  const post = prisma.post.create({
    data: {
      title: data.title,
      content: data.content ?? Prisma.JsonNull,
      categoryId: data.categoryId ?? null,
    },
  });
  console.log('createPost', post);
  return post;
}

export async function updatePost(id: number, updatedPost: PostUpdateForm): Promise<Post> {
  const data: Record<string, any> = {};

  if (typeof updatedPost.title === 'string') {
    data.title = updatedPost.title;
  }

  if (typeof updatedPost.content === 'string') {
    data.content = updatedPost.content;
  }

  if ('categoryId' in updatedPost) {
    data.categoryId = updatedPost.categoryId ?? null;
  }

  const post = await prisma.post.update({
    data,
    where: { id },
  });

  console.log('updatePost', post);
  return post;
}

export async function deletePost(id: number): Promise<Post | null> {
  try {
    const deleted = await prisma.post.delete({
      where: { id },
    });

    console.log('deletePost', deleted);
    return deleted;
  } catch (error: any) {
    if (error.code === 'P2025') {
      // Prisma throws if no record found
      return null;
    }
    throw error;
  }
}
