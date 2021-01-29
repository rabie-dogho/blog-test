import cookie from 'js-cookie';
// import { setTokenHeader, removeTokenHeader } from '../../config/axios';

export const setAuthInfo = async entity => {
  const {  token, user } = entity;
  cookie.set('token', token, { expires: 30 * 24 * 60 * 60 });
  cookie.set('user', JSON.stringify(user));

//   setTokenHeader(accessToken);
};


export const clearAuthInfo = () => {
    cookie.remove('token');  
    cookie.remove('user');
    
    // removeTokenHeader();
  };