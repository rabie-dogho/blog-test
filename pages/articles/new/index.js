import React from 'react';
// import PropTypes from 'prop-types';
import withAuthSync from '../../../services/withAuthSync';
import ArticlesTemplate from '../../../components/templates/ArticlesTemplate';
import ArticleForm from '../../../components/organisms/articles/ArticleForm';

const NewArticlePage = () => (
  <ArticlesTemplate title="Create new Article">
    <ArticleForm />
  </ArticlesTemplate>
);

NewArticlePage.propTypes = {};

export default withAuthSync(NewArticlePage);
