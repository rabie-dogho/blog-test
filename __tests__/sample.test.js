import { getRestApi } from '../api/api-urls';
// const endpint = require('../api/api-urls')
// const {getRestApi} = require('../api/api-urls')

describe('Test RestApi function', () => {
  it('replace placeholder ', () => {
    expect(getRestApi('GET_ARTICLE', { params: { articleId: '123456' } })).toEqual(
      '/articles/123456'
    );
  });

  it('replace placeholder and add query params ', () => {
    expect(
      getRestApi('GET_ARTICLE', {
        params: { articleId: '123456' },
        query: {
          q: 'test',
        },
      })
    ).toEqual('/articles/123456?q=test');
  });

  it('replace placeholder and add multiple query params ', () => {
    expect(
      getRestApi('GET_ARTICLE', {
        params: { articleId: '123456' },
        query: {
          q: 'test',
          sort: 'asc'
        },
      })
    ).toEqual('/articles/123456?q=test&sort=asc');
  });

  it('add multiple query params ', () => {
    expect(
      getRestApi('GET_ARTICLES', {
        query: {
          q: 'test',
          sort: 'asc'
        },
      })
    ).toEqual('/articles?q=test&sort=asc');
  });
});
