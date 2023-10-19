import {proxy} from 'valtio';

export const contextImageHandler = proxy({
  url: '',
  urlProcessed: '',
  setUrl: ({value}: {value: string}) => {
    contextImageHandler.url = value;
  },
});
