import {proxy} from 'valtio';

export const contextPixelImageHandler = proxy({
  url: '',
  urlProcessed: '',
  setUrl: ({value}: {value: string}) => {
    contextPixelImageHandler.url = value;
  },
});
