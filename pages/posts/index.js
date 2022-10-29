import { getPosts } from 'api/posts';
import BlogLayout from 'layouts/Blog';
import Posts from 'modules/Posts';

export default function Blog({ allPosts }) {
  return (
    <BlogLayout>
      <Posts list={allPosts} />
    </BlogLayout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getPosts();

  return {
    props: { allPosts },
  };
};
