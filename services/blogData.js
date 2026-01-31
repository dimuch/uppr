import { dbCallWrapper, getDBPoolData } from '../mysql/mySQLClient';

export async function getArticlesCategoriesDB() {
  const getArticlesCategories = `CALL getArticlesCategories()`;
  const connection = await getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getArticlesCategories, (err, rows, fields) => {
      if (err) {
        console.log('getArticlesCategoriesDB ERROR', err);
        reject({
          data: [],
        });
        return;
      }

      try {
        if (!rows || !rows[0]) {
          reject({
            data: [],
          });
          return;
        }

        const data = [
          {
            id: 0,
            name: 'All',
            isSelected: true,
          },
          ...rows[0],
        ];

        resolve(data);
      } catch (err) {
        console.log('getArticlesCategoriesDB ERROR', err);
        reject({
          data: [],
        });
      }
    });
  });
}

export async function getArticles(
  params = {
    category: 0,
  },
) {
  let top3Article = [];
  const { category } = params;

  try {
    const latestArticles = await getLatestArticlesByCategoryDB(category);
    const otherLatestArticles = latestArticles.slice(1);

    if (!category) {
      top3Article = await getTop3ArticlesWithoutMainDB();
    }

    return {
      top3Article,
      latestArticle: [latestArticles[0]],
      otherLatestArticles: otherLatestArticles,
    };
  } catch (err) {
    console.error('getArticles ==>', err);
    return {
      top3Article: [],
      latestArticle: [],
      otherLatestArticles: [],
    };
  }
}

export function getDownloadsDB(isAllDownloads = true) {
  const getDownloads = `CALL getDownloads(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getDownloads, [isAllDownloads], (err, rows, fields) => {
      if (err) {
        console.log('getDownloadsDB ERROR', err);
        reject({
          data: [],
        });
      }

      try {
        const data = rows[0].map(item => {
          return {
            ...item,
            publishedDate: new Date(item.publishedDate).toString(),
          };
        });
        resolve(data);
      } catch (err) {
        console.log('getDownloadsDB ERROR', err);
        reject({
          data: [],
        });
      }
    });
  });
}

export function getTagsDB(preselectedTag = '') {
  const getTags = `CALL getTags()`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getTags, (err, rows, fields) => {
      if (err) {
        console.log('getTagsDB ERROR', err);
        reject({
          data: [],
        });
      }

      try {
        const data = rows[0].map(item => {
          return {
            ...item,
            selected: preselectedTag.includes(item.name),
          };
        });
        resolve(data);
      } catch (err) {
        console.log('getTagsDB ERROR', err);
        reject({
          data: [],
        });
      }
    });
  });
}

//getLatestArticlesByCategoryDB
async function getLatestArticlesByCategoryDB(category) {
  const getLatestArticle = `CALL getLatestArticlesByCategory(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getLatestArticle, [category], (err, rows, fields) => {
      if (err) {
        console.log('getLatestArticlesByCategoryDB ERROR', err);
        reject({
          data: [],
        });
        return;
      }

      try {
        if (!rows || !rows[0]) {
          reject({
            data: [],
          });
          return;
        }

        const data = rows[0].map(item => {
          return {
            ...item,
            published: new Date(item.published).toString(),
            publishedOrder: new Date(item.published).getTime(),
          };
        });
        resolve(data);
      } catch (err) {
        console.log('getLatestArticlesByCategoryDB ERROR', err);
        reject({
          data: [],
        });
      }
    });
  });
}

//getTop3ArticlesWithoutMainDB
async function getTop3ArticlesWithoutMainDB() {
  const top3ArticlesWithoutMain = `CALL getTop3ArticlesWithoutMain()`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(top3ArticlesWithoutMain, (err, rows, fields) => {
      if (err) {
        console.log('getTop3ArticlesWithoutMainDB ERROR', err);
        reject({
          data: [],
        });
        return;
      }

      try {
        if (!rows || !rows[0]) {
          reject({
            data: [],
          });
          return;
        }

        const data = rows[0].map(item => {
          return {
            ...item,
            published: new Date(item.published).toString(),
          };
        });

        resolve(data);
      } catch (err) {
        console.log('getTop3ArticlesWithoutMainDB ERROR', err);
        reject({
          data: [],
        });
      }
    });
  });
}

//getArticlesDataByIdDB
export async function getArticlesDataByIdDB(articleURL) {
  const baseArticleData = await getArticleBaseDataByURL(articleURL);

  if (!baseArticleData) {
    return {
      pageComponent: 'PageNotFound',
    };
  }

  const articleTags = await getArticleTagsById(baseArticleData.id);
  const articleCategory = await getArticleCategoryById(baseArticleData.id);
  const relevantArticles = await getRelevantArticlesByCategory(articleCategory.category.id);

  return {
    ...baseArticleData,
    ...articleTags,
    ...articleCategory,
    ...relevantArticles,
  };
}

//getArticleBaseDataById
export async function getArticleBaseDataByURL(articleURL) {
  const getArticlesDataById = `CALL getArticleBaseDataByURL(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getArticlesDataById, [articleURL], (err, rows, fields) => {
      if (err) {
        console.log('getArticleBaseDataByURL ERROR', err);
        resolve(null);
      }

      try {
        const tempData = rows[0].map(item => item);

        const data = {
          ...tempData[0],
          published: new Date(tempData[0]?.published).toString(),
        };

        resolve(data);
      } catch (e) {
        console.log('getArticleBaseDataByURL CATCH ===> ', e);
        resolve(null);
      }
    });
  });
}

//getArticlesTagsById
export async function getArticleTagsById(articleId) {
  const getArticleTagsById = `CALL getArticleTagsById(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getArticleTagsById, [articleId], (err, rows, fields) => {
      if (err) {
        console.log('getArticleTagsById ERROR', err);
        reject({
          tags: [],
        });
        return;
      }

      try {
        if (!rows || !rows[0]) {
          reject({
            tags: [],
          });
          return;
        }

        const data = rows[0].map(item => item.name);

        resolve({
          tags: data,
        });
      } catch (e) {
        reject({
          tags: [],
        });
      }
    });
  });
}

//getArticlesCategoryById
export async function getArticleCategoryById(articleId) {
  const getArticleCategoryById = `CALL getArticleCategoryById(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getArticleCategoryById, [articleId], (err, rows, fields) => {
      if (err) {
        console.log('getArticleCategoryById ERROR', err);
        reject({
          category: {
          },
        });
        return;
      }

      try {
        if (!rows || !rows[0] || !rows[0][0]) {
          reject({
            category: {
            },
          });
          return;
        }

        const data = rows[0].map(item => item);

        resolve({
          category: {
            name: data[0].name,
            color: data[0].categoryColor,
            id: data[0].article_category,
          },
        });
      } catch (e) {
        reject({
          category: {
          },
        });
      }
    });
  });
}

//getRelevantArticlesByCategory
export async function getRelevantArticlesByCategory(categoryId) {
  const getRelevantArticlesByCategoryId = `CALL getRelevantArticlesByCategoryId(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getRelevantArticlesByCategoryId, [categoryId], (err, rows, fields) => {
      if (err) {
        console.log('getRelevantArticlesByCategory ERROR', err);
        reject({
          relevantArticles: [],
        });
        return;
      }

      try {
        if (!rows || !rows[0]) {
          reject({
            relevantArticles: [],
          });
          return;
        }

        const data = rows[0].map(item => ({
          ...item,
          published: new Date(item.published).toString(),
        }));

        resolve({
          relevantArticles: data,
        });
      } catch (e) {
        reject({
          relevantArticles: [],
        });
      }
    });
  });
}

//getRelevantArticlesByCategory
export async function getArticlesByCategoryNameDB(categoryName) {
  const getRelevantArticlesByCategoryName = `CALL getRelevantArticlesByCategoryName(?)`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getRelevantArticlesByCategoryName, [categoryName], (err, rows, fields) => {
      if (err) {
        console.log('getArticlesByCategoryNameDB ERROR', err);
        reject({
          relevantArticles: [],
        });
        return;
      }

      try {
        if (!rows || !rows[0]) {
          reject([]);
          return;
        }

        const data = rows[0].map(item => ({
          ...item,
          published: new Date(item.published).toString(),
        }));

        resolve(data);
      } catch (e) {
        reject([]);
      }
    });
  });
}

//getArticlesByCategoryDB
export async function getArticlesByCategoryDB() {
  const categories = await getArticlesCategoriesDB();

  const articlesByCategory = await Promise.allSettled(
    categories.slice(1).map(async item => {
      return {
        name: item.name,
        articles: await getLatestArticlesByCategoryDB(item.id),
      };
    }),
  );

  return Array.from(articlesByCategory).map(item => item.value);
}

//getArticlesByTagsNameDB
export async function getArticlesByTagsNameDB(tags = '') {
  const tagArray = !tags ? [] : tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0);

  const selectClause = `
    SELECT DISTINCT Articles.id, Articles.article_color, Articles.title, Articles.englishTitle,
      Articles.published, Articles.link, Articles.description, Articles.image, Articles.views,
      Articles.is_section_main_image, Articles.author, Articles.pageComponent, Categories.name,
      Categories.categoryColor
    FROM uppr_ssr.articles AS Articles
    LEFT JOIN uppr_ssr.article_tags AS ArticlesByTags 
    ON Articles.id=ArticlesByTags.article_id
    LEFT JOIN uppr_ssr.tags AS Tags
    ON ArticlesByTags.atricle_tag_id=Tags.id
    LEFT JOIN uppr_ssr.articles_by_categories AS ArticlesByCategories
    ON ArticlesByCategories.article_id = Articles.id
    LEFT JOIN uppr_ssr.categories AS Categories
    ON ArticlesByCategories.article_category = Categories.id
  `;
  // Use parameterized query with placeholders for IN clause
  const placeholders = tagArray.map(() => '?').join(',');
  const whereClause = tagArray.length > 0 ? `WHERE Tags.name IN (${placeholders})` : ``;
  const orderClause = `ORDER BY Articles.published DESC;`;

  const getArticlesByTagsName = `${selectClause} ${whereClause} ${orderClause}`;

  const connection = await getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getArticlesByTagsName, tagArray, (err, rows, fields) => {
      if (err) {
        console.log('getArticlesByTagsNameDB ERROR', err);
        reject({
          data: [],
        });
        return;
      }

      try {
        if (!rows) {
          reject({
            data: [],
          });
          return;
        }

        const data = rows.map(item => ({
          ...item,
          published: new Date(item.published).toString(),
        }));

        resolve(data);
      } catch (err) {
        console.log('getArticlesByTagsNameDB ERROR', err);
        reject({
          data: [],
        });
      }
    });
  });
}

//search articles by search text
export async function searchInArticlesParamsDB(searchText) {
  const searchInArticlesParams = `CALL searchInArticlesParams(?)`;
  return await dbCallWrapper(searchInArticlesParams, null, [searchText]);
}

/**
 * Insert a new article into the articles table.
 * Used when submitting a new article via /api/articles/submit.
 * @param {Object} article - Article fields: article_color, title, englishTitle, published, link, description, image, views, is_section_main_image, author, pageComponent
 * @returns {Promise<{ success: boolean, insertId?: number, error?: string }>}
 */
export async function insertArticleToDB(article) {
  const insertArticle = `
    INSERT INTO articles (
      article_color, title, englishTitle, published, link, description,
      image, views, is_section_main_image, author, pageComponent
    ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;
  const params = [
    article.article_color,
    article.title,
    article.englishTitle ?? '',
    article.published,
    article.link,
    article.description,
    article.image,
    article.views ?? '0000000000',
    article.is_section_main_image ?? 0,
    article.author,
    article.pageComponent,
  ];
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(insertArticle, params, (err, result) => {
      if (err) {
        console.log('insertArticleToDB ERROR', err);
        reject({ success: false, error: err.message });
        return;
      }
      try {
        resolve({ success: true, insertId: result?.insertId });
      } catch (e) {
        console.log('insertArticleToDB CATCH', e);
        reject({ success: false, error: e?.message ?? 'Unknown error' });
      }
    });
  });
}
