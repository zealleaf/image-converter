// TODO: Mobile uses dialog

'use client';

import {SvgArrow3} from '@/components/Svg/SvgArrow3';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {contextPixelImageHandler} from '@/context';
import {Dictionary} from '@/lib/dictionary';
import Image from 'next/image';
import {useSnapshot} from 'valtio';

export function ImagePixelBeforeProcess({t}: {t: Dictionary}) {
  const contextPixelImageHandlerSnapshot = useSnapshot(
    contextPixelImageHandler
  );

  return (
    <div>
      {contextPixelImageHandlerSnapshot.url ? (
        <div className="absolute left-6 top-[-60px] z-[10] w-48 animate-accordion-up">
          <span className="relative left-6 top-[75px] inline-block rotate-[10deg] font-bold text-blue-500">
            click
          </span>
          <SvgArrow3 />
        </div>
      ) : null}
      <div className="relative w-full cursor-pointer rounded-2xl border-2 border-blue-300 border-opacity-80 bg-gray-800 transition-transform hover:z-30 hover:scale-105">
        <AspectRatio ratio={16 / 9} className="grid place-items-center">
          {contextPixelImageHandlerSnapshot.url ? (
            <Popover>
              <PopoverTrigger asChild>
                <Image
                  className="scale-90 rounded-md transition-transform hover:scale-110 sm:scale-100"
                  width={0}
                  height={0}
                  src={contextPixelImageHandlerSnapshot.url}
                  sizes="100vw"
                  style={{width: '200px', height: 'auto'}}
                  alt={'Image'}></Image>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <h4 className="font-medium leading-none">
                      {t['Image option']}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {t['Image option description']}
                    </p>
                  </div>
                  <div className="grid gap-2">
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="pixel">{t['Image pixel']}</Label>
                      <Input id="pixel" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="width">{t['Image width']}</Label>
                      <Input id="width" className="col-span-2 h-8" />
                    </div>
                    <div className="grid grid-cols-3 items-center gap-4">
                      <Label htmlFor="height">{t['Image height']}</Label>
                      <Input id="height" className="col-span-2 h-8" />
                    </div>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          ) : null}
        </AspectRatio>
      </div>
    </div>
  );
}
