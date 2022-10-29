import { useRouter } from 'next/router';

import { getPosts, getPostBySlug } from 'api/posts';
import NotFound from 'modules/NotFound';
import PostSingle from 'modules/Posts/Single';
import { markdownToHtml } from 'utils/markdown';

export default function Post({ post }) {
  const router = useRouter();

  if (!router.isFallback && !post.slug) {
    return <NotFound />;
  }

  return <PostSingle {...post} />;
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: { ...post, content },
    },
  };
}

export async function getStaticPaths() {
  const posts = getPosts(true);

  return {
    paths: posts.map(({ slug }) => {
      return { params: { slug } };
    }),
    fallback: false,
  };
}
