import { trim, slugify } from '@/utils/utils';

export const trimSlash = (s: string) => trim(trim(s, '/'));

const createPath = (...params: string[]) => {
  const paths = params
    .map((el) => trimSlash(el))
    .filter((el) => Boolean(el))
    .join('/');
  return '/' + paths + '/';
};

const BASE_PATHNAME = '/';

export const cleanSlug = (text = '') =>
  trimSlash(text)
    .split('/')
    .map((slug) => slugify(slug))
    .join('/');



