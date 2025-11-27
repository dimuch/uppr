import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../../components/common/header/Header';
import { getArticlesDataByIdDB } from '../../../../services/blogData.js';
import * as PageComponent from '../../../../components/articles';

const PAGE_NOT_FOUND = 'PageNotFound';

type Props = {
  params: Promise<{ articleId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { articleId } = await params;
  const articleURL = `/blog/articles/${articleId}`;
  const articleData = await getArticlesDataByIdDB(articleURL);

  if (!articleData || articleData.pageComponent === PAGE_NOT_FOUND) {
    return {
      title: 'Article Not Found | UPPR',
    };
  }

  return {
    title: `${articleData.title} | UPPR Блог`,
    description: articleData.description,
    keywords: 'education on-line, english, business, writing, skills, emails',
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
      shortcut: '/favicon.png',
    },
    openGraph: {
      title: `${articleData.title} | UPPR Блог`,
      description: articleData.description,
      url: `https://uppr.com.ua${articleData.link}`,
      type: 'website',
      images: [
        {
          url: `https://uppr.com.ua${articleData.image}`,
          width: 700,
          height: 400,
        },
      ],
    },
    alternates: {
      canonical: `https://uppr.com.ua${articleData.link}`,
    },
    other: {
      'article:author': 'https://www.facebook.com/ivanna.tabachuk',
      'google-site-verification': '8Ui50OggqnZ5J1RPshJXelSAYWMPvFGWv32MSzHHlJU',
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { articleId } = await params;
  const articleURL = `/blog/articles/${articleId}`;
  const articleData = await getArticlesDataByIdDB(articleURL);

  if (!articleData || articleData.pageComponent === PAGE_NOT_FOUND) {
    notFound();
  }

  const ArticleComponent = PageComponent[articleData.pageComponent];

  if (!ArticleComponent) {
    notFound();
  }

  // JSON-LD structured data for SEO
  const jsonLd = {
    '@context': 'https://schema.org/',
    '@type': 'BlogPosting',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': articleData.link,
      relatedLink: 'https://uppr.com.ua/blog',
    },
    headline: `${articleData.title} | UPPR Блог`,
    url: articleData.link,
    image: {
      '@type': 'ImageObject',
      url: articleData.image,
      width: 700,
      height: 400,
    },
    datePublished: articleData.published,
    author: {
      '@type': 'Person',
      name: articleData.author,
    },
    publisher: {
      '@type': 'Organization',
      name: '[UP]PR',
      logo: {
        '@type': 'ImageObject',
        url: 'https://uppr.com.ua/assets/images/blog-articles/logo.jpg',
        width: 503,
      },
    },
    description: articleData.description,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header search location={'/blog'} />
      <div style={{ overflow: 'hidden' }}>
        <ArticleComponent articleData={articleData} />
      </div>
    </>
  );
}

