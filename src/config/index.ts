import keysDev from './development';
import keysPrd from './production';
import keysHml from './homolog';
import { IKey } from '../interfaces';

const key = (): IKey => {
  if (process.env.NODE_ENV === 'PRD') {
    return keysPrd;
  }
  if (process.env.NODE_ENV === 'HML') {
    return keysHml;
  }
  return keysDev;
};

export default key();
