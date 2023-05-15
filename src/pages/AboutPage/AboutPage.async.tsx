import {lazy} from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
  setTimeout(() => {
    // @ts-ignore
    return resolve(import('./AboutPage'));
  }, 1500)
}));