import React, { useEffect } from 'react';
// import PropTypes from 'prop-types'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { fetchArticle } from '../../../../redux/actions';
import ArticleForm from '../ArticleForm';
import ArticleDelete from '../ArticleDelete';

const ArticleEdit = () => {
  const router = useRouter();
  const { articleId } = router.query;
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
          <ArticleForm article={article} />
          <ArticleDelete article={article} userId={userId} />
        </>
      )}
    </div>
  );
};

ArticleEdit.propTypes = {};

export default ArticleEdit;
