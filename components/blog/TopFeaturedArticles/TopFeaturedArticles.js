import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Typography} from '@mui/material';
import {TopFeaturedArticlesIcon}  from '../../../components/icons/index';

class TopFeaturedArticles extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    updateArticleViews(mainArticleData) {

    }

    render() {
        if (!this.props.items?.length) {
            return null;
        }

        const featuredArticlesData = this.props.items;

        return (
            <Grid container className="wrapper">
                <Grid item md={12} className="uppr-section-title">
                    <Grid container alignItems="center">
                        <Grid item md={1} xs={2}>
                            <TopFeaturedArticlesIcon/>
                        </Grid>
                        <Grid item md={11} xs={10}>
                            <Typography variant={'h5'}>
                                Top featured
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} className="uppr-section-content">
                    <Grid container spacing={3}>
                        {
                            featuredArticlesData.map(article => {
                                return (
                                    <Grid item
                                          key={article.title}
                                          onClick={(e) => this.updateArticleViews(article)}
                                    >
                                        <Grid container spacing={1} className="wrapper-article" alignContent={'center'}>
                                            <Grid item xs={5} className="image">
                                                <Grid container alignContent={'center'}>
                                                    <Grid item>
                                                        <img src={article.image} alt={article.title}/>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={7} className="title">
                                                <a href={article.link}>
                                                    <Typography variant={'p'}>
                                                        {article.title}
                                                    </Typography>
                                                </a>
                                            </Grid>
                                        </Grid>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        // updateArticleViews: (data) => dispatch(updateArticleViews(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopFeaturedArticles);
