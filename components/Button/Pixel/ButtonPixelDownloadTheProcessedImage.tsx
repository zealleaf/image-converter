'use client';

import {Button} from '@/components/ui/button';
import {contextPixelImageHandler} from '@/context';
import {useSnapshot} from 'valtio';

export function ButtonPixelDownloadTheProcessedImage({text}: {text: string}) {
  const contextPixelImageHandlerSnapshot = useSnapshot(
    contextPixelImageHandler
  );
  return (
    <div>
      <Button onClick={contextPixelImageHandlerSnapshot.downloadProcessedImage}>
        {text}
      </Button>
    </div>
  );
}
