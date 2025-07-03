import { nanoid } from 'nanoid';

export const generatenanoid = (length)   => {
    return nanoid(length);
}

export const normalizeUrl = (url) => {
  if (!/^https?:\/\//i.test(url)) {
    return 'https://' + url;
  }
  return url;
}   

