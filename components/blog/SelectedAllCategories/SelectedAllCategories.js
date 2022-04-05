import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid} from '@mui/material';
import MainArticle from '../MainArticle/MainArticle';
import TopFeaturedArticles from '../TopFeaturedArticles/TopFeaturedArticles';
import Downloads from '../Downloads/Downloads';

class SelectedAllCategories extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        const {latestArticle, top3Article, downloads} = this?.props;

        if (!latestArticle || !top3Article || !downloads) {
            return null;
        }

        return (
            <Grid container
                  spacing={3}
                  alignItems="flex-start"
                  className="uppr-all-articles"
            >
                <Grid item md={8} className="uppr-articles-list">
                    <Grid container>
                        <Grid item className="uppr-main-article-block">
                            <MainArticle
                                items={latestArticle}
                            />
                        </Grid>
                        <Grid item className="uppr-latest-articles">
                            Hi
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} className="uppr-side-block">
                    <TopFeaturedArticles
                        items={top3Article}
                    />
                    <Downloads
                        items={downloads}
                    />
                </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(SelectedAllCategories);
