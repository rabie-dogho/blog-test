import React from 'react';
// import PropTypes from 'prop-types'
import ArticlesTemplate from '../../../../components/templates/ArticlesTemplate';
import ArticleEdit from '../../../../components/organisms/articles/ArticleEdit';
import withAuthSync from '../../../../services/withAuthSync';

const EditArticlePage = () => (
  <ArticlesTemplate title="Edit Article">
    <ArticleEdit />
  </ArticlesTemplate>
);

EditArticlePage.propTypes = {};

export default withAuthSync(EditArticlePage);
