import { dbCallWrapper } from '../mysql/mySQLClient.js';

export async function addInfoEmailLevelStat(answer, title, score) {
  const query = `
    INSERT INTO uppr_ssr.email_level
    (user_answer, user_score, user_title)
    VALUES(?, ?, ?);
  `;

  return await dbCallWrapper(query, null, [answer, score, title]);
}
