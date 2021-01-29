import { Grid } from '@material-ui/core';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticles } from '../../../../redux/actions';
import ArticleCard from '../ArticleCard';
// import PropTypes from 'prop-types'

// const articles = [
//   {
//     title: 'Lizard',
//     body:
//       ' Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//     images: '/static/images/cards/contemplative-reptile.jpg',
//   },
//   {
//     title: 'Snackes',
//     body:
//       ' Snackes are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica',
//     images: '/static/images/cards/contemplative-reptile.jpg',
//   },
// ];

const ArticlesList = () => {
  const dispatch = useDispatch();
  const { id: userId } = useSelector((state) => state.auth.user);
const { list: blogList} = useSelector((state) => state.blog)

  useEffect(() => {
    dispatch(fetchArticles(userId));
  }, []);

  return (
    <Grid container>
      {blogList.length > 0 &&
        blogList.map((article) => (
          <Grid item xs={6} md={4} lg={3} key={article.id}>
            <ArticleCard article={article} />
          </Grid>
        ))}
    </Grid>
  );
};

ArticlesList.propTypes = {};

export default ArticlesList;
