import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../../components/common/header/Header';
import CategoriesList from '../../../../components/blog/CategoriesList/CategoriesList';
import SelectedSpecificCategory from '../../../../components/blog/SelectedSpecificCategory/SelectedSpecificCategory';
import TopBlogImage from '../../../../components/blog/TopBlogImage/TopBlogImage';
import {
  getArticlesByCategoryNameDB,
  getArticlesCategoriesDB,
  getTagsDB,
} from '../../../../services/blogData.js';
import styles from '../../../blog/styles.module.scss';

type Props = {
  params: Promise<{ categoryName: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryName } = await params;

  return {
    title: `Категорія ${categoryName} | UPPR Блог`,
    description: `Статті з категорії ${categoryName}`,
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
      shortcut: '/favicon.png',
    },
  };
}

export default async function BlogCategoryPage({ params }: Props) {
  const { categoryName } = await params;

  // Fetch data in parallel
  const [articleCategories, tags] = await Promise.all([
    getArticlesCategoriesDB(),
    getTagsDB(),
  ]);

  let articlesByCategory = [];
  try {
    articlesByCategory = await getArticlesByCategoryNameDB(categoryName);
  } catch (e) {
    console.log(`WRONG CATEGORY: ${categoryName}`);
    // Return 404 if category not found
    notFound();
  }

  if (!articlesByCategory?.length) {
    notFound();
  }

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/blog'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage />
        <div className={`uppr-article-categories ${styles.upprArticleCategories}`}>
          <CategoriesList items={articleCategories} selectedCategory={categoryName} />
        </div>

        <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
          <SelectedSpecificCategory
            articlesByCategory={articlesByCategory}
            selectedCategory={categoryName}
            tags={tags}
          />
        </div>
      </div>
    </div>
  );
}

// Generate static params for all categories at build time
export async function generateStaticParams() {
  const categories = await getArticlesCategoriesDB();
  
  // Filter out 'All' category and return category names
  return categories
    .filter(category => category.name !== 'All')
    .map(category => ({
      categoryName: category.name,
    }));
}

// Enable ISR with 1 week revalidation
export const revalidate = 604800; // 1 week in seconds

