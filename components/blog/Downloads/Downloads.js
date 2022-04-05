import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Grid, Typography} from '@mui/material';
import * as Icons from '../../../components/icons/index';

class Downloads extends Component {
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

        const downloads = this.props.items;
        const DownloadsSectionIcon = Icons['DownloadsSectionIcon'];

        return (
            <Grid container className="wrapper">
                <Grid item md={12} className="uppr-section-title">
                    <Grid container spacing={1} alignItems="center">
                        <Grid item md={1} xs={2}>
                            <DownloadsSectionIcon/>
                        </Grid>
                        <Grid item md={11} xs={10}>
                            <Typography variant={'h5'}>
                                Downloads
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={12} className="uppr-section-content">
                    {
                        downloads.map(article => {
                            const Icon = Icons[article.icon];
                            return (
                                <Grid container spacing={3} className="wrapper-download"
                                      alignItems={'center'}
                                      key={article.caption}
                                      onClick={(e) => this.updateArticleViews(article)}
                                >
                                    <Grid item xs={1} className="image">
                                        <Icon/>
                                    </Grid>
                                    <Grid item xs={10} className="title">
                                        <a href={`${article.detailsLink}/${article.id}`}>
                                            <Typography variant={'p'}>
                                                {article.caption}
                                            </Typography>
                                        </a>
                                    </Grid>
                                </Grid>
                            )
                        })
                    }
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

export default connect(mapStateToProps, mapDispatchToProps)(Downloads);
