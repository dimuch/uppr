import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Header from '../../../../components/common/header/Header';
import TopBlogImage from '../../../../components/blog/TopBlogImage/TopBlogImage';
import styles from '../../styles.module.scss';
import {
  getDownloadsByCategoryDB,
  getDownloadsCategoriesDB,
} from '../../../../services/downloadsData.js';
import CategoriesList from '../../../../components/downloads/CategoriesList/CategoriesList';
import SelectedSpecificCategory
  from '../../../../components/downloads/SelectedSpecificCategory/SelectedSpecificCategory';

type Props = {
  params: Promise<{ categoryName: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoryName } = await params;

  return {
    title: `Категорія ${categoryName} | UPPR Downloads`,
    description: `Завантаження з категорії ${categoryName}`,
    icons: {
      icon: '/favicon.png',
      apple: '/favicon.png',
      shortcut: '/favicon.png',
    },
  };
}

export default async function DownloadsCategoryPage({ params }: Props) {
  const { categoryName } = await params;

  // Fetch data in parallel
  const [categoriesData] = await Promise.all([getDownloadsCategoriesDB()]);

  const { categories } = categoriesData;

  let downloadsData;
  try {
    downloadsData = await getDownloadsByCategoryDB({
      category: categoryName,
    });
  } catch (e) {
    console.log(`WRONG CATEGORY: ${categoryName}`);
    notFound();
  }

  const { downloads } = downloadsData;

  if (!downloads?.length) {
    notFound();
  }

  return (
    <div className={styles.upprBlogPage}>
      <Header search location={'/downloads'} />
      <div className={`uppr-page-content ${styles.upprPageContent}`}>
        <TopBlogImage caption={''} description={''} imgUrl={undefined} />
        <div className={`uppr-article-categories ${styles.upprArticleCategories}`}>
          <CategoriesList items={categories} selectedCategory={categoryName} />
        </div>

        <div className={`uppr-articles-content ${styles.upprArticlesContent}`}>
          <SelectedSpecificCategory
            articlesByCategory={downloads}
            tags={[]}
          />
        </div>
      </div>
    </div>
  );
}

// Force dynamic rendering to avoid database access during build
export const dynamic = 'force-dynamic';

