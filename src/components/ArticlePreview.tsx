import { useMemo } from 'react';
import NextLink from 'next/link';
import { Paragraph, ArticleTitle } from '@components/typography';

type Props = {
  blog: {
    slug: string;
    title: string;
    publishedAt: string;
    views: number;
  };
};

const ArticlePreview = ({ blog }: Props) => {
  const date = useMemo(() => {
    return new Date(blog.publishedAt).toLocaleString('en-US', {
      month: 'short',
      day: '2-digit',
      year: 'numeric',
    });
  }, [blog.publishedAt]);

  const link = `/blog/${blog.slug}`;

  return (
    <li className='mb-4 border border-neutral-700 rounded-md'>
      <NextLink href={link}>
        <div className='py-4 px-6'>
          <ArticleTitle>{blog.title}</ArticleTitle>

          <Paragraph primary={false} className='!my-0 font-primary text-base'>
            {date} • {blog.views} views
          </Paragraph>
        </div>
      </NextLink>
    </li>
  );
};

export default ArticlePreview;
