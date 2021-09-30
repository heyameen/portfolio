import { getFileBySlug, getFiles } from '../../lib/mdx';

import BlogLayout from '../../layouts/blog';
import Tweet from '../../components/tweet';
import components from '../../components/MDXComponent';
import { getMDXComponent } from 'mdx-bundler/client';
import { getTweets } from '../../lib/twitter';
import { useMemo } from 'react';

export default function Blog({ code, frontMatter, tweets }) {
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const StaticTweet = ({ id }) => {
    const tweet = tweets.find((tweet) => tweet.id === id);
    return <Tweet {...tweet} />;
  };

  return (
    <BlogLayout frontMatter={frontMatter}>
      <Component
        components={
          {
            ...components,
            StaticTweet
          } as any
        }
      />
    </BlogLayout>
  );
}

export async function getStaticPaths() {
  const posts = await getFiles('blog');

  return {
    paths: posts.map((p) => ({
      params: {
        slug: p.replace(/\.mdx/, '')
      }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const post = await getFileBySlug('blog', params.slug);
  const tweets = await getTweets(post.tweetIDs);

  return { props: { ...post, tweets } };
}
