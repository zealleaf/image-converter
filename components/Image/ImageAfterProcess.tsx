'use client';

import {AspectRatio} from '@/components/ui/aspect-ratio';
import {contextImageHandler} from '@/context';
import Image from 'next/image';
import {useSnapshot} from 'valtio';

export function ImageAfterProcess() {
  const contextImageHandlerSnapshot = useSnapshot(contextImageHandler);

  return (
    <div className="w-full rounded-2xl border-2 border-red-400 border-opacity-80 bg-gray-700">
      <AspectRatio ratio={16 / 9} className="grid place-items-center ">
        {contextImageHandlerSnapshot.urlProcessed ? (
          <Image
            className="rounded-md"
            width={0}
            height={0}
            src={contextImageHandlerSnapshot.urlProcessed}
            sizes="100vw"
            style={{width: '200px', height: 'auto'}}
            alt={'Image'}></Image>
        ) : null}
      </AspectRatio>
    </div>
  );
}
