import { useEffect, useState } from 'react';

export const useLocalStorage = (key, defaultValue) => {
  // try {
  const stored = typeof window !== 'undefined' ? localStorage.getItem(key) : null;
  const initial = stored ? JSON.parse(stored) : defaultValue;
  const [value, setValue] = useState(initial);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);
  // } catch(error) {
  // console.error(error)
  // }
  return [value, setValue];
};

export const setLocalStorage = async (key, value) => {
  if (typeof window !== 'undefined') {
    await localStorage.setItem(key, JSON.stringify(value));
  }
};

export const getLocalStorage = (key) => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem(key);
    if (stored) {
      return JSON.parse(stored);
    }
  }
  return null;
};
