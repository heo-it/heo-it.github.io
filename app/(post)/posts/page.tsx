import Link from 'next/link';
import { getAllPostSlugs, getPostBySlug } from '../../../entities/post/model/posts';

const PostPage = async () => {
  const slugs = getAllPostSlugs();
  const posts = slugs.map((slug) => {
    const { metadata } = getPostBySlug(slug);
    return { slug, metadata };
  });

  return (
    <div>
      {posts.map((post) => (
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
