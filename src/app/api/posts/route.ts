import { createPost, getPosts } from '@/lib/posts';
import { NextResponse } from 'next/server';

// This file handles the API routes for posts, allowing fetching and creating posts.
// The GET method retrieves all posts, while the POST method creates a new post.

export async function GET() {
  try {
    const posts = await getPosts();

    return NextResponse.json(posts, {
      status: 200,
    });
  } catch (error) {
    console.error('Error fetching posts:', error);

    return NextResponse.json(
      { error: 'Failed to fetch posts' },
      {
        status: 500,
      },
    );
  }
}

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const newPost = await createPost(data);

    return NextResponse.json(newPost, {
      status: 201,
    });
  } catch (error) {
    console.error('Error creating post:', error);

    return NextResponse.json(
      { error: 'Failed to create post' },
      {
        status: 500,
      },
    );
  }
}
