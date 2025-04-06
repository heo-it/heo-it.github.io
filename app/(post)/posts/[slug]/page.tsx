import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { getAllPostSlugs, getPostBySlug } from '../../../../entities/post/model/posts';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({ slug }));
}

const PostPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  try {
    const { metadata, content } = getPostBySlug(slug);

    return (
      <div>
        <h1>{metadata.title}</h1>
        <p>{metadata.date}</p>
        <MDXRemote source={content} />
      </div>
    );
  } catch (e) {
    console.error('Error fetching post:', e);
    return notFound();
  }
};

export default PostPage;
