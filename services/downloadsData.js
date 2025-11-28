import { dbCallWrapper } from '../mysql/mySQLClient.js';

export async function getDownloadsCategoriesDB() {
  const selectClause = `
    SELECT * 
    FROM uppr_ssr.downloads_charge_types AS DownloadChargeTypes
  `;

  const whereClause = '';
  const orderClause = `ORDER BY DownloadChargeTypes.id ASC;`;

  const getDownloadsByCategory = `${selectClause} ${whereClause} ${orderClause}`;

  const mapper = dataDB => {
    return dataDB.map(item => {
      return {
        ...item,
        title: item.display_name,
      };
    });
  };

  try {
    const data = await dbCallWrapper(getDownloadsByCategory, mapper);
    return {
      categories: data,
    };
  } catch (err) {
    console.error('getDownloadsCategoriesDB ==>', err);
    return {
      categories: [],
    };
  }
}

export async function getDownloadsByCategoryDB(
  params = {
    category: 'all',
  },
) {
  const { category } = params;
  const selectClause = `
    SELECT * 
    FROM uppr_ssr.downloads AS Downloads
    LEFT JOIN uppr_ssr.downloads_charge_types AS DownloadsChargeTypes 
    ON Downloads.download_charge_type=DownloadsChargeTypes.id
  `;
  const whereClause = category !== 'all' ? `WHERE DownloadsChargeTypes.name='${category}'` : '';
  const orderClause = `ORDER BY Downloads.download_order ASC;`;

  const getDownloadsByCategory = `${selectClause} ${whereClause} ${orderClause}`;

  const mapper = dataDB => {
    return dataDB.map(item => {
      return {
        ...item,
        publishedDate: new Date(item.publishedDate).toString(),
        image: item.image,
        category: item.display_name,
        isDirectDownload: item.isDirectDownload,
        downloadLink: item.download_link,
      };
    });
  };

  try {
    const data = await dbCallWrapper(getDownloadsByCategory, mapper);
    return {
      downloads: data,
    };
  } catch (err) {
    console.error('getDownloadsByCategoryDB ==>', err);
    return {
      downloads: [],
    };
  }
}

export async function getDownloadDataByCaptionDB(downloadCaption) {
  // Build the full download link from the caption
  const downloadLink = `/downloads/details/${downloadCaption}`;

  const selectClause = `
    SELECT Downloads.*, Downloads.id as downloadId, Downloads.downloaded_counter as downloadedCounter,
      Downloads.download_link as downloadLink,
      Authors.*, DownloadsChargeTypes.*
    FROM uppr_ssr.downloads AS Downloads
    LEFT JOIN uppr_ssr.authors AS Authors
    ON Authors.id=Downloads.authorId
    LEFT JOIN uppr_ssr.downloads_charge_types AS DownloadsChargeTypes
    ON DownloadsChargeTypes.id=Downloads.download_charge_type
  `;
  const whereClause = `WHERE LOWER(Downloads.download_link)='${downloadLink.toLowerCase()}'`;
  const orderClause = ``;

  const getDownloadsByCategory = `${selectClause} ${whereClause} ${orderClause} ;`;

  const mapper = dataDB => {
    const itemData = dataDB[0];

    // If no data found, return null
    if (!itemData) {
      return null;
    }

    return {
      ...itemData,
      publishedDate: new Date(itemData.publishedDate).toString(),
      downloadComponent: itemData?.['download_component'] || 'PageNotFound',
      author: `${itemData?.name || ''} ${itemData?.sername || ''}`.trim(),
      chargeTypeCaption: itemData?.display_name || 'Free',
      downloadLink: itemData.download_link,
    };
  };

  try {
    return dbCallWrapper(getDownloadsByCategory, mapper);
  } catch (err) {
    console.error('getDownloadDataByCaptionDB ==>', err);
    return null;
  }
}

export async function addInfoDownloadsStat(downloadId, downloadedCounter) {
  const query = `
    UPDATE uppr_ssr.downloads
    SET downloads.downloaded_counter = ${downloadedCounter}
    WHERE id = ${downloadId};
  `;

  return await dbCallWrapper(query);
}
