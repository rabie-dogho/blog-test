import React from 'react';
// import PropTypes from 'prop-types';
import ArticlesTemplate from '../../../../components/templates/ArticlesTemplate';
import ArticleDetails from '../../../../components/organisms/articles/ArticleDetails';
import withAuthSync from '../../../../services/withAuthSync';

const ViewArticlePage = () => (
    <ArticlesTemplate title="view Article">
      <ArticleDetails />
    </ArticlesTemplate>
  );

ViewArticlePage.propTypes = {};

export default withAuthSync(ViewArticlePage);
