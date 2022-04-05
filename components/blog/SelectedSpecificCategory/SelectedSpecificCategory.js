import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Grid, Typography } from "@material-ui/core";
import {getDate} from '../../../helpers/getDate';

class SelectedSpecificCategory extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {latestArticle, otherLatestArticles} = this?.props;

        if (!latestArticle || !otherLatestArticles) {
            return null;
        }

        const allArticlesBySelectedCategory = [...latestArticle, ...otherLatestArticles];

        return (
            <Grid container
                  spacing={5}
                  alignItems="flex-start"
                  className="uppr-specific-articles"
            >
                {
                    allArticlesBySelectedCategory.map(article => {
                        article.published = getDate(new Date(article.published));
                        return (
                            <Grid item xs={12} sm={6} md={4}
                                  key={article.title}
                                  onClick={(e) => this.updateArticleViews(article)}
                            >
                                <Grid container
                                      alignContent={'center'}
                                      className="wrapper-article"
                                      wrap="wrap"
                                      alignItems="stretch"
                                >
                                    <Grid item xs={12} className="image">
                                        <Grid container alignContent={'center'}>
                                            <Grid item>
                                                <img src={article.image} alt={article.title}/>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} className="title">
                                        <Grid container justifyContent={'center'}>
                                            <Grid item xs={10} sm={10} md={10} justifyContent={'center'}>
                                                <a href={article.link}>
                                                    <Typography variant={'h6'} align={'center'}>
                                                        {article.title}
                                                    </Typography>
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} className="description">
                                        <Grid container justifyContent={'center'}>
                                            <Grid item xs={10} sm={10} md={10} justifyContent={'center'}>
                                                <Typography align={'center'}>
                                                    {article.description}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                    <Grid item xs={12} className="published">
                                        <Grid container justifyContent={'center'}>
                                            <Grid item xs={10} sm={10} md={10} justifyContent={'center'}>
                                                <Typography variant={'subtitle2'} align={'center'}>
                                                    {article.published}
                                                </Typography>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        )
                    })
                }
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(SelectedSpecificCategory);
