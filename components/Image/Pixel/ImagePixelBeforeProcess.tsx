// TODO: Mobile uses dialog

'use client';

import {SvgArrow3} from '@/components/Svg/SvgArrow3';
import {AspectRatio} from '@/components/ui/aspect-ratio';
import {Button} from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover';
import {contextPixelImageHandler} from '@/context';
import {ProcessingParams} from '@/context/pixel/contextPixelImageHandler';
import {Dictionary} from '@/lib/dictionary';
import {PopoverClose} from '@radix-ui/react-popover';
import Image from 'next/image';
import {MutableRefObject, useRef} from 'react';
import {useSnapshot} from 'valtio';

interface Props {
  t: Dictionary;
  formValueRef: MutableRefObject<ProcessingParams>;
  contextPixelImageHandlerSnapshot: Readonly<typeof contextPixelImageHandler>;
}

function P({t, formValueRef, contextPixelImageHandlerSnapshot}: Props) {
  return (
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
            <h4 className="font-medium leading-none">{t['Image option']}</h4>
            <p className="text-sm text-muted-foreground">
              {t['Image option description']}
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">{t['Image width']}</Label>
              <Input
                id="width"
                className="col-span-2 h-8"
                type="number"
                onChange={(e) => {
                  formValueRef.current.width = Number(e.target.value);
                }}
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">{t['Image height']}</Label>
              <Input
                id="height"
                className="col-span-2 h-8"
                type="number"
                onChange={(e) => {
                  formValueRef.current.height = Number(e.target.value);
                }}
              />
            </div>
            {/* <div className="grid grid-cols-3 items-center gap-4"> */}
            {/*   <Label htmlFor="background"> */}
            {/*     {t['Image background']} */}
            {/*   </Label> */}
            {/*   <Input */}
            {/*     id="background" */}
            {/*     className="col-span-2 h-8" */}
            {/*     type="number" */}
            {/*     onChange={(e) => { */}
            {/*       formValueRef.current.background = Number( */}
            {/*         e.target.value */}
            {/*       ); */}
            {/*     }} */}
            {/*   /> */}
            {/* </div> */}
          </div>
        </div>
        <div className="pt-4 text-right">
          <PopoverClose asChild>
            <Button
              onClick={() => {
                contextPixelImageHandlerSnapshot.processing(
                  formValueRef.current
                );
              }}>
              {t['Sure']}
            </Button>
          </PopoverClose>
        </div>
      </PopoverContent>
    </Popover>
  );
}

function D({t, formValueRef, contextPixelImageHandlerSnapshot}: Props) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          className="scale-75 rounded-md transition-transform hover:scale-110 sm:scale-100"
          width={0}
          height={0}
          src={contextPixelImageHandlerSnapshot.url}
          sizes="100vw"
          style={{width: '200px', height: 'auto'}}
          alt={'Image'}></Image>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{t['Image option']}</DialogTitle>
          <DialogDescription>{t['Image option description']}</DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-4 py-4">
          <div className="flex items-center">
            <Label htmlFor="width" className="w-24">
              {t['Image width']}
            </Label>
            <Input
              id="width"
              className="h-8"
              type="number"
              onChange={(e) => {
                formValueRef.current.width = Number(e.target.value);
              }}
            />
          </div>
          <div className="flex items-center">
            <Label htmlFor="height" className="w-24">
              {t['Image height']}
            </Label>
            <Input
              id="height"
              className="h-8"
              type="number"
              onChange={(e) => {
                formValueRef.current.height = Number(e.target.value);
              }}
            />
          </div>
        </div>
        <DialogFooter>
          <DialogClose asChild>
            <Button
              type="submit"
              onClick={() => {
                contextPixelImageHandlerSnapshot.processing(
                  formValueRef.current
                );
              }}>
              {t['Sure']}
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export function ImagePixelBeforeProcess({t}: {t: Dictionary}) {
  const formValueRef = useRef<ProcessingParams>({
    background: 0,
    height: 0,
    width: 0,
  });
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
            <>
              <div className="hidden sm:block">
                <P
                  t={t}
                  formValueRef={formValueRef}
                  contextPixelImageHandlerSnapshot={
                    contextPixelImageHandlerSnapshot
                  }
                />
              </div>
              <div className="sm:hidden">
                <D
                  t={t}
                  formValueRef={formValueRef}
                  contextPixelImageHandlerSnapshot={
                    contextPixelImageHandlerSnapshot
                  }
                />
              </div>
            </>
          ) : null}
        </AspectRatio>
      </div>
    </div>
  );
}
