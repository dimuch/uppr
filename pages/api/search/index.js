import {searchInArticlesParamsDB} from '../../../services/blogData';

export default async function handler (req, res) {
    //parse request params
    const {text: searchText} = req.query;

    //make search by search text in article Table
    const result = await searchInArticlesParamsDB(searchText);

    try {
        res.status(200).json({data: result, message: ''});
    } catch (err) {
        console.log('Getting search result in articles', err);
        res.status(400).json({data: [], message: 'Error occurred'});
    }
}
