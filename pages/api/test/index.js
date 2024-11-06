import { addInfoEmailLevelStat } from '../../../services/testData.js';

export default async function handler(req, res) {
  //parse request params
  const { answer, title, score } = req.body;

  // add info about user result to stat DB
  await addInfoEmailLevelStat(answer, title, score);

  try {
    res.status(200).json({
      data: '',
      message: '',
    });
  } catch (err) {
    console.log('Getting search result in articles', err);
    res.status(400).json({
      data: [],
      message: 'Error occurred',
    });
  }
}
