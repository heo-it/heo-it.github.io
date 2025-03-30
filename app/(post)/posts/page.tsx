import Link from 'next/link';

const PostPage = async () => {
  const result = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
    method: 'GET',
  });
  const data = await result.json();

  // TODO - UI 작업
  return (
    <div>
      {data.map((post: { slug: string; metadata: { title: string; date: string } }) => (
        <div key={post.slug}>
          <h2>{post.metadata.title}</h2>
          <p>{post.metadata.date}</p>
          <Link href={`/posts/${post.slug}`}>{post.slug}</Link>
        </div>
      ))}
    </div>
  );
};

export default PostPage;
