import sha1 from 'sha-1';
import { v4 as uuidv4 } from 'uuid';
import { setLocalStorage, getLocalStorage } from '../hooks';

export const registerAccountApi = (values) => {
  const { email, firstName, lastName, password } = values;
  const user = { id: uuidv4(), email, firstName, lastName, password: sha1(password) };
  const users = getLocalStorage('users') ? getLocalStorage('users') : [];
  const isExisted = users.find((usr) => usr.email === user.email);
  const response = {
    code: null,
  };
  if (isExisted) {
    response.code = 400;
    response.type = 'error';
    response.message = 'Sorry the email is taken';
  } else {
    setLocalStorage('users', [...users, user]);
    response.code = 200;
    response.type = 'success';
    response.message = 'Congratulations!, you have been registerd';
  }

  return response;
};

export const loginApi = (values) => {
  const { email, password } = values;
  const users = getLocalStorage('users') ? getLocalStorage('users') : [];
  const existedIndex = users.findIndex(
    (usr) => usr.email === email && usr.password === sha1(password)
  );
  const response = {
    code: null,
  };
  if (existedIndex !== -1) {
    const user = { ...users[existedIndex], token: sha1(Math.random().toString(36)) };
    const {id,  firstName, lastName, token } = user;
    users.splice(existedIndex, 1);
    setLocalStorage('users', [...users, user]);
    response.code = 200;
    response.type = 'success';
    response.message = 'Login successfully';
    response.data = {
      user: { id, firstName, lastName, email },
      token,
    };
  } else {
    response.code = 400;
    response.type = 'error';
    response.message = 'Sorry! You have entered an invalid email or password ';
  }

  return response;
};
