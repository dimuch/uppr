import {getDBPoolData} from '../mysql/mySQLClient';

export async function getArticlesCategoriesDB() {
    const getArticlesCategories = `CALL getArticlesCategories()`;
    const connection = await getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getArticlesCategories, (err, rows, fields) => {
            if (err) {
                console.log('getArticlesCategoriesDB ERROR', err);
                reject({data: []});
            }

            try {
                const data = [{id: 0, name: 'All', isSelected: true}, ...rows[0]];

                resolve(data);
            } catch (e) {
                reject({data: []});
            }
        });
    });
}

export async function getArticles(params = {category: 0}) {
    let top3Article = [];
    const {category} = params;

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
        return {top3Article: [], latestArticle: [], otherLatestArticles: []};
    }
}

export function getDownloadsDB(isAllDownloads = true) {
    const getDownloads = `CALL getDownloads(${isAllDownloads})`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getDownloads, (err, rows, fields) => {
            if (err) {
                console.log('getDownloadsDB ERROR', err);
                reject({data: []});
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
                reject({data: []});
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
                console.log('getLatestArticlesByCategoryDB ERROR', err);
                reject({data: []});
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
                reject({data: []});
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
                reject({data: []});
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
                reject({data: []});
            }
        });
    });
}

//getArticlesDataByIdDB
export async function getArticlesDataByIdDB(articleURL) {
    const baseArticleData = await getArticleBaseDataByURL(articleURL);
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
    const getArticlesDataById = `CALL getArticleBaseDataByURL('${articleURL}')`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getArticlesDataById, (err, rows, fields) => {
            if (err) {
                console.log('getArticlesDataById ERROR', err);
                reject({data: []});
            }

            try {
                const tempData = rows[0].map(item => item);

                const data = {
                    ...tempData[0],
                    published: new Date(tempData[0].published).toString(),
                }

                resolve(data);
            } catch (e) {
                reject({data: []});
            }
        });
    });
}

//getArticlesDataByIdDB
export async function getArticleTagsById(articleId) {
    const getArticleTagsById = `CALL getArticleTagsById(${articleId})`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getArticleTagsById, (err, rows, fields) => {
            if (err) {
                console.log('getArticlesDataById ERROR', err);
                reject({tags: []});
            }

            try {
                const data = rows[0].map((item) => item.name);

                resolve({tags: data});
            } catch (e) {
                reject({tags: []});
            }
        });
    });
}

//getArticlesDataByIdDB
export async function getArticleCategoryById(articleId) {
    const getArticleCategoryById = `CALL getArticleCategoryById(${articleId})`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getArticleCategoryById, (err, rows, fields) => {
            if (err) {
                console.log('getArticlesDataById ERROR', err);
                reject({category: {}});
            }

            try {
                const data = rows[0].map((item) => item);

                resolve({
                    category: {
                        name: data[0].name,
                        color: data[0].categoryColor,
                        id:data[0].article_category,
                    },
                });
            } catch (e) {
                reject({category: {}});
            }
        });
    });
}

//getRelevantArticlesDB
export async function getRelevantArticlesByCategory(categoryId) {
    const getRelevantArticlesByCategoryId = `CALL getRelevantArticlesByCategoryId(${categoryId})`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getRelevantArticlesByCategoryId, (err, rows, fields) => {
            if (err) {
                console.log('getArticlesDataById ERROR', err);
                reject({relevantArticles: []});
            }

            try {
                const data = rows[0].map((item) => ({
                    ...item,
                    published: new Date(item.published).toString(),
                }));

                resolve({relevantArticles: data});
            } catch (e) {
                reject({relevantArticles: []});
            }
        });
    });
}
