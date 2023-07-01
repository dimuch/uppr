import {dbCallWrapper} from '../mysql/mySQLClient';

export async function getDownloadsByCategoryDB(params = {category: 'all'}) {
  const {category} = params;
  const selectClause = `
    SELECT * 
    FROM uppr_ssr.downloads AS Downloads
    LEFT JOIN uppr_ssr.downloads_categories AS DownloadsCategories 
    ON Downloads.download_category_id=DownloadsCategories.id
  `;
  const whereClause = category !== 'all' ? `WHERE DownloadsCategories.name='${category}'` : '' ;
  const orderClause = `ORDER BY Downloads.caption ASC;`;

  const getDownloadsByCategory = `${selectClause} ${whereClause} ${orderClause}`;

  const mapper = (dataDB) => {
    return dataDB.map(item => {
      return {
        ...item,
        publishedDate: new Date(item.publishedDate).toString(),
        image: item.download_image,
        category: item.display_name,
      }
    });
  }

  try {
    const data = await dbCallWrapper(getDownloadsByCategory, mapper);
    return {downloads: data};
  } catch (err) {
    console.error('getDownloadsByCategoryDB ==>', err);
    return {downloads: []};
  }
};

export async function getDownloadDataByCaptionDB(downloadURL) {
  const downloadCaption = downloadURL.replaceAll('_', ' ');
  const selectClause = `
    SELECT * 
    FROM uppr_ssr.downloads AS Downloads
  `;
  const whereClause = `WHERE Downloads.caption='${downloadCaption}'`;
  const orderClause = `;`;

  const getDownloadsByCategory = `${selectClause} ${whereClause} ${orderClause}`;

  try {
    const data = await dbCallWrapper(getDownloadsByCategory);
    return {
      ...data,
      publishedDate: new Date(data.publishedDate).toString(),
    };
  } catch (err) {
    console.error('getDownloadsByCategoryDB ==>', err);
    return {};
  }
};
