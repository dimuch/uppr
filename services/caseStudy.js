import { dbCallWrapper } from '../mysql/mySQLClient';

const MAIN_TABLE_NAME = 'case_study';

const HELPER_TABLE_NAMES = {
  TAG_CASE_STUDY: 'tags_case_study',
  AUTHORS: 'authors',
};

export async function getCaseStudiesAll() {
  const selectClause = `
    SELECT * 
    FROM uppr_ssr.${MAIN_TABLE_NAME} AS ${MAIN_TABLE_NAME}
    LEFT JOIN uppr_ssr.${HELPER_TABLE_NAMES.TAG_CASE_STUDY} AS ${HELPER_TABLE_NAMES.TAG_CASE_STUDY} 
    ON ${HELPER_TABLE_NAMES.TAG_CASE_STUDY}.id=${MAIN_TABLE_NAME}.case_study_tagId
    LEFT JOIN uppr_ssr.${HELPER_TABLE_NAMES.AUTHORS} AS ${HELPER_TABLE_NAMES.AUTHORS} 
    ON ${HELPER_TABLE_NAMES.AUTHORS}.id=${MAIN_TABLE_NAME}.case_study_authorId
  `;
  const whereClause = '';
  const orderClause = `ORDER BY ${MAIN_TABLE_NAME}.case_study_publishedDate DESC;`;

  const getCaseStudies = `${selectClause} ${whereClause} ${orderClause}`;

  const mapper = dataDB => {
    return dataDB.map(item => {
      return {
        id: item.id,
        title: item['case_study_caption'],
        imageThumb: item['case_study_imageThumb'],
        imageModal: item['case_study_imageModal'],
        imageModalHeader: item['case_study_imageModalHeader'],
        publishedDate: new Date(item['case_study_publishedDate']).toString(),
        tagName: item['tags_case_study_name'],
        tagColor: item['tags_case_study_color'],
        author: `${item.name} ${item.surname}`,
        Component: item['case_study_pageComponent'],
      };
    });
  };

  try {
    const data = await dbCallWrapper(getCaseStudies, mapper);
    return {
      caseStudy: data,
    };
  } catch (err) {
    console.error('getCaseStudiesAll ==>', err);
    return {
      caseStudy: [],
    };
  }
}

//to convert title to component name
const utilFunction = item => {
  return item.split(' ').reduce((result, item) => {
    const capitalCaseItem = String(item).charAt(0).toUpperCase() + String(item).slice(1);
    return result + capitalCaseItem;
  }, '');
};

// Import utility functions from utils
export { titleToSlug, slugToTitle } from '../utils/caseStudySlug.js';

// Get a single case study by title
export async function getCaseStudyByTitle(title) {
  const selectClause = `
    SELECT * 
    FROM uppr_ssr.${MAIN_TABLE_NAME} AS ${MAIN_TABLE_NAME}
    LEFT JOIN uppr_ssr.${HELPER_TABLE_NAMES.TAG_CASE_STUDY} AS ${HELPER_TABLE_NAMES.TAG_CASE_STUDY} 
    ON ${HELPER_TABLE_NAMES.TAG_CASE_STUDY}.id=${MAIN_TABLE_NAME}.case_study_tagId
    LEFT JOIN uppr_ssr.${HELPER_TABLE_NAMES.AUTHORS} AS ${HELPER_TABLE_NAMES.AUTHORS} 
    ON ${HELPER_TABLE_NAMES.AUTHORS}.id=${MAIN_TABLE_NAME}.case_study_authorId
  `;
  const whereClause = `WHERE LOWER(TRIM(${MAIN_TABLE_NAME}.case_study_caption)) = LOWER(TRIM('${title.replace(/'/g, "''")}'))`;
  const orderClause = ``;

  const getCaseStudy = `${selectClause} ${whereClause} ${orderClause}`;

  const mapper = dataDB => {
    if (!dataDB || dataDB.length === 0) {
      return null;
    }
    const item = dataDB[0];
    return {
      id: item.id,
      title: item['case_study_caption'],
      imageThumb: item['case_study_imageThumb'],
      imageModal: item['case_study_imageModal'],
      imageModalHeader: item['case_study_imageModalHeader'],
      publishedDate: new Date(item['case_study_publishedDate']).toString(),
      tagName: item['tags_case_study_name'],
      tagColor: item['tags_case_study_color'],
      author: `${item.name} ${item.surname}`,
      Component: item['case_study_pageComponent'],
    };
  };

  try {
    const data = await dbCallWrapper(getCaseStudy, mapper);
    return data;
  } catch (err) {
    console.error('getCaseStudyByTitle ==>', err);
    return null;
  }
}
