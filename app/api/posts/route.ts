import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { NextResponse } from 'next/server';

const postsDirectory = path.join(process.cwd(), '_posts');

export async function GET() {
  try {
    const files = fs.readdirSync(postsDirectory).filter((file) => file.endsWith('.md') || file.endsWith('.mdx'));

    const posts = files.map((filename) => {
      const filePath = path.join(postsDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf-8');
      const { data } = matter(fileContents);

      return {
        slug: filename.replace(/\.(md|mdx)$/, ''),
        metadata: data,
      };
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
