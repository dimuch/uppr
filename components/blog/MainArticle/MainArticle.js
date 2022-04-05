import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Typography} from '@mui/material';
import {getDate} from '../../../helpers/getDate';

class MainArticle extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    updateArticleViews(mainArticleData) {
        mainArticleData.views += 1;

        // this.props.updateArticleViews(mainArticleData);
    }

    render() {
        const mainArticleData = this?.props?.items[0] || {};

        if (!mainArticleData) {
            return null;
        }

        mainArticleData.published = getDate(new Date(mainArticleData.published));

        return (
            <Grid container className="wrapper" onClick={(e) => this.updateArticleViews(mainArticleData)}>
                <Grid item md={12} className="image">
                    <img src={mainArticleData.image} alt={mainArticleData.title}/>
                </Grid>
                <Grid container className="uppr-article-details">
                    <Grid item md={12} className="title">
                        <a href={mainArticleData.link}>
                            <Typography variant={'h3'}>
                                {mainArticleData.title}
                            </Typography>
                        </a>
                    </Grid>
                    <Grid item md={12} className="description">
                        <Typography>
                            {mainArticleData.description}
                        </Typography>
                    </Grid>
                    <Grid item md={12} className="summary">
                        <Grid container>
                            <Grid item md={10} className="left-part">
                                <Grid container>
                                    <Typography variant={'subtitle2'} className="summary-item">
                                        Опубліковано: {mainArticleData.published}
                                    </Typography>
                                </Grid>
                            </Grid>
                            <Grid item md={2} className="right-part">
                                <a href={mainArticleData.link}>
                                    <Typography variant={'subtitle2'} className="read-more">
                                        Читати &rArr;
                                    </Typography>
                                </a>
                            </Grid>
                        </Grid>
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
        updateArticleViews: (data) => dispatch(updateArticleViews(data)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(MainArticle);
