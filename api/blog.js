import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import { setLocalStorage, getLocalStorage } from '../hooks';

export const postArticleApi = (values) => {
  const article = { id: uuidv4(), ...values, date: moment() };
  const articles = getLocalStorage('articles') ? getLocalStorage('articles') : [];

  const response = {
    code: null,
  };

  setLocalStorage('articles', [...articles, article]);
  response.code = 200;
  response.type = 'success';
  response.message = 'Article Saved Successfuly';

  return response;
};

export const putArticleApi = async (values, articleId, userId) => {
  const articles = getLocalStorage('articles') ? getLocalStorage('articles') : [];
  const userArticleIndex = await articles.findIndex(
    (article) => article.userId === userId && article.id === articleId
  );
  const response = {
    code: null,
  };

  if (userArticleIndex !== -1) {
    const newArticle = { ...articles[userArticleIndex], ...values };
    articles.splice(userArticleIndex, 1);
    // articles.push(newArticle)

    response.code = 200;
    response.type = 'success';
    response.message = 'Article Updated Successfully successfully';
    response.data = { ...newArticle };
    setLocalStorage('articles', [...articles, newArticle]);
  } else {
    response.code = 404;
    response.type = 'error';
    response.message = 'Article not found';
    response.data = {};
  }

  return response;
};

export const fetchArticlesApi = async (userId) => {
  const articles = getLocalStorage('articles') ? getLocalStorage('articles') : [];
  const userArticles = await articles.filter((article) => article.userId === userId);
  const response = {
    code: null,
  };

  if (userArticles && userArticles.length > 0) {
    response.code = 200;
    response.type = 'success';
    response.message = 'Article fetched successfully';
    response.data = [...userArticles];
  } else {
    response.code = 204;
    response.type = 'success';
    response.message = 'Article fetched successfully';
    response.data = [];
  }

  return response;
};

export const fetchArticleApi = async (userId, articleId) => {
  const articles = getLocalStorage('articles') ? getLocalStorage('articles') : [];
  const userArticle = await articles.find(
    (article) => article.userId === userId && article.id === articleId
  );
  const response = {
    code: null,
  };

  if (userArticle) {
    response.code = 200;
    response.type = 'success';
    response.message = 'Article fetched successfully';
    response.data = { ...userArticle };
  } else {
    response.code = 404;
    response.type = 'error';
    response.message = 'Article not found';
    response.data = {};
  }

  return response;
};

export const deleteArticleApi = async (userId, articleId) => {
  const articles = getLocalStorage('articles') ? getLocalStorage('articles') : [];
  const userArticleIndex = await articles.findIndex(
    (article) => article.userId === userId && article.id === articleId
  );

  const response = {
    code: null,
  };

  if (userArticleIndex !== -1) {
    articles.splice(userArticleIndex, 1);
    setLocalStorage('articles', [...articles]);

    response.code = 200;
    response.type = 'success';
    response.message = 'Article deleted successfully';
  } else {
    response.code = 404;
    response.type = 'error';
    response.message = 'Article not found';
    response.data = {};
  }

  return response;
};
