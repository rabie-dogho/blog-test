export const BlogActionTypes = Object.freeze({
  SET_BLOG_STATE: 'SET_BLOG_STATE',
  POST_ARTICLE: 'POST_ARTICLE',
  EDIT_ARTICLE:"EDIT_ARTICLE",
  FETCH_ARTICLES: "FETCH_ARTICLES",
  FETCH_ARTICLE: "FETCH_ARTICLE",
  DELETE_ARTICLE: "DELETE_ARTICLE",


});

export const setBlogState = (stateName, stateValue, pageName) => ({
  type: BlogActionTypes.SET_BLOG_STATE,
  stateName,
  stateValue,
  pageName,
});


export const postArticle = (values) => ({
  type: BlogActionTypes.POST_ARTICLE,
  values,
});

export const editArticle = (values, articleId, userId) => ({
  type: BlogActionTypes.EDIT_ARTICLE,
  values,
  articleId,
  userId,
});


export const fetchArticles = (userId) => ({
  type: BlogActionTypes.FETCH_ARTICLES,
  userId
})

export const fetchArticle = (userId, articleId) => ({
  type: BlogActionTypes.FETCH_ARTICLE,
  userId,
  articleId
})

export const deleteArticle = (userId, articleId) => ({
  type: BlogActionTypes.DELETE_ARTICLE,
  userId,
  articleId
})
