import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';

const PostDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  if (!slug) {
    notFound();
  }

  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${slug}`, {
    method: 'GET',
  });
  const data = await result.json();

  // TODO - UI 작업
  return (
    <div>
      <p>metadata.title : {data.metadata.title}</p>
      <p>metadata.description : {data.metadata.description}</p>
      <MDXRemote source={data.content} />
    </div>
  );
};

export default PostDetailPage;
