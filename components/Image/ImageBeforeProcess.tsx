'use client';

import {AspectRatio} from '@/components/ui/aspect-ratio';
import {contextImageHandler} from '@/context';
import Image from 'next/image';
import {useSnapshot} from 'valtio';
import {SvgArrow3} from '../Svg/SvgArrow3';

export function ImageBeforeProcess() {
  const contextImageHandlerSnapshot = useSnapshot(contextImageHandler);

  return (
    <div>
      {contextImageHandlerSnapshot.url ? (
        <div className="absolute left-6 top-[-60px] z-[10] w-48 animate-accordion-up">
          <span className="relative left-6 top-[75px] inline-block rotate-[10deg] font-bold text-blue-500">
            click
          </span>
          <SvgArrow3 />
        </div>
      ) : null}
      <div className="relative w-full cursor-pointer rounded-2xl border-2 border-blue-300 border-opacity-80 bg-gray-800 transition-transform hover:z-30 hover:scale-105">
        <AspectRatio ratio={16 / 9} className="grid place-items-center">
          {contextImageHandlerSnapshot.url ? (
            <Image
              className="scale-90 rounded-md transition-transform hover:scale-110 sm:scale-100"
              width={0}
              height={0}
              src={contextImageHandlerSnapshot.url}
              sizes="100vw"
              style={{width: '200px', height: 'auto'}}
              alt={'Image'}></Image>
          ) : null}
        </AspectRatio>
      </div>
    </div>
  );
}
