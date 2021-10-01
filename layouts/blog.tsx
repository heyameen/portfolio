import * as gtag from '../lib/gtag';

import React, {useEffect} from 'react';
import { format, parseISO } from 'date-fns';

import Container from '../components/Container';
import Image from 'next/image';
import ViewCounter from '../components/viewCounter';

// import Subscribe from '../components/Subscribe';


const editUrl = (slug) =>
  `https://github.com/heyameen/portfolio/edit/main/data/blog/${slug}.mdx`;
const discussUrl = (slug) =>
  `https://mobile.twitter.com/search?q=${encodeURIComponent(
    `https://ameenalade.dev/blog/${slug}`
  )}`;

export default function BlogLayout({ children, frontMatter }) {

  // useEffect(() => {
  //     gtag.event({
  //       action: `Blog: ${frontMatter.title}`,
  //       category: "blog post",
  //       label: 'Blog read',
  //       value: frontMatter.title
  //     })
  // }, []);

  return (
    <Container
      title={`${frontMatter.title} – Ameen Alade`}
      description={frontMatter.summary}
      image={`https://ameenalade.dev${frontMatter.image}`}
      date={new Date(frontMatter.publishedAt).toISOString()}
      type="article"
    >
      <article className="flex flex-col justify-center items-start max-w-3xl mx-auto mb-16 w-full">
        <h1 className="font-bold text-3xl md:text-5xl tracking-tight mb-4 text-black dark:text-white">
          {frontMatter.title}
        </h1>
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full mt-2">
          <div className="flex items-center">
            <Image
              alt="Ameen Alade"
              height={24}
              width={24}
              src="/avatar.jpg"
              className="rounded-full"
            />
            <p className="text-sm text-gray-700 dark:text-gray-300 ml-2">
              {frontMatter.by}
              {'Ameen Alade / '}
              {format(parseISO(frontMatter.publishedAt), 'MMMM dd, yyyy')}
            </p>
          </div>
          <p className="text-sm text-gray-500 min-w-32 mt-2 md:mt-0">
            {frontMatter.readingTime.text}
            {` • `}
            <ViewCounter slug={frontMatter.slug} />
          </p>
        </div>
        <div className="prose dark:prose-dark max-w-none w-full">
          {children}
        </div>
        
        <div className="text-sm text-gray-700 dark:text-gray-300 mt-8">
          <a
            href={discussUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Discuss on Twitter'}
          </a>
          {` • `}
          <a
            href={editUrl(frontMatter.slug)}
            target="_blank"
            rel="noopener noreferrer"
          >
            {'Edit on GitHub'}
          </a>
        </div>
      </article>
    </Container>
  );
}
