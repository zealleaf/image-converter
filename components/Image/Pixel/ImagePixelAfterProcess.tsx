'use client';

import {AspectRatio} from '@/components/ui/aspect-ratio';
import {contextPixelImageHandler} from '@/context';
import Image from 'next/image';
import {useSnapshot} from 'valtio';

export function ImagePixelAfterProcess() {
  const contextPixelImageHandlerSnapshot = useSnapshot(
    contextPixelImageHandler
  );

  return (
    <div className="w-full rounded-2xl border-2 border-red-400 border-opacity-80 bg-gray-700">
      <AspectRatio ratio={16 / 9} className="grid place-items-center ">
        {contextPixelImageHandlerSnapshot.urlProcessed ? (
          <Image
            className="max-h-[calc(40vw)] w-auto rounded-md sm:max-h-60"
            width={0}
            height={0}
            src={contextPixelImageHandlerSnapshot.urlProcessed}
            alt={'Image'}></Image>
        ) : null}
      </AspectRatio>
    </div>
  );
}
