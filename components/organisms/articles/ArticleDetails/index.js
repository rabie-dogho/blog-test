/* eslint-disable react/no-danger */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';
// import PropTypes from 'prop-types'
import moment from 'moment'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Typography } from '@material-ui/core';
import { fetchArticle } from '../../../../redux/actions';
import { useArticleDetialsStyles } from './style';

const grid = {
  xs: 12,
  sm: 12,
  md: 12,
  lg: 12,
};

const ArticleDetails = () => {
  const router = useRouter();
  const { articleId } = router.query;
  const classes = useArticleDetialsStyles();

  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth.user);
  const { article } = useSelector((state) => state.blog);

  useEffect(() => {
    if ((userId, articleId)) {
      dispatch(fetchArticle(userId, articleId));
    }
  }, [userId, articleId]);

  return (
    <div>
      {article && article.id && (
        <>
          <Grid container>
            <Grid item {...grid}>
              <Typography variant="h1">{article.title}</Typography>
              <Typography variant="body2" color="textSecondary" component="p">
            {moment(article.date).format("DD MMM YYYY HH:mm")}
          </Typography>
            </Grid>
            <Grid item {...grid}>
              <img className={classes.image} src={article.image} alt={article.title} />
              <div
                dangerouslySetInnerHTML={{
                  __html: article.body,
                }}
              />
            </Grid>
          </Grid>
          {/* <image src={article.image} /> */}
        </>
      )}
    </div>
  );
};

ArticleDetails.propTypes = {};

export default ArticleDetails;
