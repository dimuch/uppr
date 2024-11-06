import { dbCallWrapper } from '../mysql/mySQLClient.js';

export async function addInfoEmailLevelStat(answer, title, score) {
  const query = `
    INSERT INTO uppr_ssr.email_level
    (user_answer, user_score, user_title)
    VALUES('${answer}', ${score}, '${title}');
  `;

  return await dbCallWrapper(query);
}
