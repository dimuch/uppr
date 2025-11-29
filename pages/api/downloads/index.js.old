import { addInfoDownloadsStat } from '../../../services/downloadsData.js';

export default async function handler(req, res) {
  //parse request params
  const { downloadId, downloadedCounter } = req.body;

  // add info about user result to stat DB
  await addInfoDownloadsStat(downloadId, downloadedCounter);

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
