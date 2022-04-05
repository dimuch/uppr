import { getDBPoolData } from "../mysql/mySQLClient";

export async function getArticlesCategoriesDB() {
  const getArticlesCategories = `CALL getArticlesCategories()`;
  const connection = await getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getArticlesCategories, (err, rows, fields) => {
      if (err) {
        console.log("getArticlesCategoriesDB ERROR", err);
        reject({ data: [] });
      }

      try {
        const data = [{ id: 0, name: "All", isSelected: true }, ...rows[0]];

        resolve(data);
      } catch (e) {
        reject({ data: [] });
      }
    });
  });
}

export async function getArticles(params = { category: 0 }) {
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
    console.error("getArticles ==>", err);
    return { top3Article: [], latestArticle: [], otherLatestArticles: [] };
  }
}

export function getDownloadsDB(isAllDownloads = true) {
  const getDownloads = `CALL getDownloads(${isAllDownloads})`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getDownloads, (err, rows, fields) => {
      if (err) {
        console.log("getDownloadsDB ERROR", err);
        reject({ data: [] });
      }

      try {
        const data = rows[0].map((item) => {
          return {
            ...item,
            publishedDate: new Date(item.publishedDate).toString(),
          };
        });
        resolve(data);
      } catch (e) {
        reject({ data: [] });
      }
    });
  });
}

//getLatestArticlesByCategoryDB
async function getLatestArticlesByCategoryDB(category) {
  const getLatestArticle = `CALL getLatestArticlesByCategory(${category})`;
  const connection = getDBPoolData();
  return new Promise((resolve, reject) => {
    connection.query(getLatestArticle, (err, rows, fields) => {
      if (err) {
        console.log("getLatestArticlesByCategoryDB ERROR", err);
        reject({ data: [] });
      }

      try {
        const data = rows[0].map((item) => {
          return {
            ...item,
            published: new Date(item.published).toString(),
          };
        });
        resolve(data);
      } catch (e) {
        reject({ data: [] });
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
        console.log("getTop3ArticlesWithoutMainDB ERROR", err);
        reject({ data: [] });
      }

      try {
        const data = rows[0].map((item) => {
          return {
            ...item,
            published: new Date(item.published).toString(),
          };
        });

        resolve(data);
      } catch (e) {
        reject({ data: [] });
      }
    });
  });
}
