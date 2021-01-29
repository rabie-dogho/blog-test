import { call, put, takeLatest } from 'redux-saga/effects';
import Router from 'next/router';
import { BlogActionTypes, setBlogState } from '../actions';
import { alert } from '../../helper/alert';
import { fetchArticleApi, fetchArticlesApi, postArticleApi, putArticleApi, deleteArticleApi } from '../../api/blog';
// // import {
// //   getTidesApi,

// // } from '../../api';

function* postArticleSaga({ values }) {
  try {
    const response = yield call(postArticleApi, values);
    alert(response.type, response.message);
    if (response.code === 200) {
      Router.push('/articles');
    }
  } catch (e) {
    console.error(e);
    alert('error', 'Error posting article !');
  }
}

function* editArticleSaga({ values, articleId, userId }) {
  try {
    const response = yield call(putArticleApi, values, articleId, userId);
    alert(response.type, response.message);
    if (response.code === 200) {
      Router.push('/articles');
    }
  } catch (e) {
    console.error(e);
    alert('error', 'Error posting article !');
  }
}

function* fetchArticlesSaga({ userId }) {
  try {
    const response = yield call(fetchArticlesApi, userId);
    // alert(response.type, response.message);
    console.log(response);
    yield put(setBlogState('list', response.data));
  } catch (e) {
    console.error(e);
    alert('error', 'Error fetching articles !');
  }
}

function* fetchArticleSaga({ userId, articleId }) {
  try {
    const response = yield call(fetchArticleApi, userId, articleId);
    alert(response.type, response.message);
    console.log(response);
    yield put(setBlogState('article', response.data));
  } catch (e) {
    console.error(e);
    alert('error', 'Error fetching articles !');
  }
}

function* deleteArticleSaga({ userId, articleId }) {
  try {
    const response = yield call(deleteArticleApi, userId, articleId);
    alert(response.type, response.message);
    console.log(response);
    // yield put(setBlogState('article', response.data));
    if (response.code === 200) {
      Router.push('/articles');
    }
  
  } catch (e) {
    console.error(e);
    alert('error', 'Error fetching articles !');
  }
}

export default [
  takeLatest(BlogActionTypes.POST_ARTICLE, postArticleSaga),
  takeLatest(BlogActionTypes.EDIT_ARTICLE, editArticleSaga),
  takeLatest(BlogActionTypes.FETCH_ARTICLES, fetchArticlesSaga),
  takeLatest(BlogActionTypes.FETCH_ARTICLE, fetchArticleSaga),
  takeLatest(BlogActionTypes.DELETE_ARTICLE, deleteArticleSaga),
];
