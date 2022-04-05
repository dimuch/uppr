import {getDBPoolData} from '../mysql/mySQLClient';

export async function getArticlesCategoriesDB() {
    const getArticlesCategories = `CALL getArticlesCategories()`;
    const connection = await getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getArticlesCategories, (err, rows, fields) => {
            if (err) {
                reject({data: []})
            }

            try {
                const data = rows[0];
                resolve(data)
            } catch (e) {
                reject({data: []})
            }
        });
    })
}

export async function getArticles(params={category:0}) {
    let top3Article = [];
    const {category} = params;

    try {
        const latestArticles = await getLatestArticlesByCategoryDB(category);

        console.log(111111, latestArticles[0]);

        const otherLatestArticles = latestArticles.slice(1);

        if(!!category){
            top3Article = await getTop3ArticlesWithoutMainDB();
        }

        return {
                top3Article,
                latestArticle: [latestArticles[0]],
                otherLatestArticles: otherLatestArticles,
            };
    } catch (err) {
        console.error('getArticles ==>', err);
        return ({top3Article: [], latestArticle: [], otherLatestArticles: []});
    }
}

export function getDownloadsDB(isAllDownloads) {
    const getTop2Downloads = `CALL getDownloads(${isAllDownloads})`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getTop2Downloads, (err, rows, fields) => {
            if (err) {
                reject({data: []})
            }

            try {
                const data = rows[0];
                resolve(data)
            } catch (e) {
                reject({data: []})
            }
        });
    })
}

//getLatestArticlesByCategoryDB
async function getLatestArticlesByCategoryDB(category) {
    const getLatestArticle = `CALL getLatestArticlesByCategory(${category})`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(getLatestArticle, (err, rows, fields) => {
            if (err) {
                reject({data: []})
            }

            try {
                const data = rows[0].map(item => {
                    return {
                        ...item,
                        published: item.published.toString(),
                    }
                });
                resolve(data)
            } catch (e) {
                reject({data: []})
            }
        });
    })
}

//getTop3ArticlesWithoutMainDB
async function getTop3ArticlesWithoutMainDB() {
    const top3ArticlesWithoutMain = `CALL getTop3ArticlesWithoutMain()`;
    const connection = getDBPoolData();
    return new Promise((resolve, reject) => {
        connection.query(top3ArticlesWithoutMain, (err, rows, fields) => {
            if (err) {
                reject({data: []})
            }

            try {
                const data = rows[0];
                resolve(data)
            } catch (e) {
                reject({data: []})
            }
        });
    })
}