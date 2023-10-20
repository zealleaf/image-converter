import {
  ButtonPixelDownloadTheProcessedImage,
  ButtonPixelSelectAImage,
} from '@/components/Button/Pixel';
import {
  ImagePixelAfterProcess,
  ImagePixelBeforeProcess,
} from '@/components/Image/Pixel';
import {SvgArrow1} from '@/components/Svg/SvgArrow1';
import {SvgArrow2} from '@/components/Svg/SvgArrow2';
import {WrapTilt} from '@/components/Wrap/WrapTilt';
import {Locale} from '@/i18n.config';
import {getDictionary} from '@/lib/dictionary';

export default async function Pixel({params}: {params: {lang: Locale}}) {
  const t = await getDictionary(params.lang);

  return (
    <main className="flex flex-col gap-6 sm:mx-12 sm:my-12 md:flex-row lg:mx-24">
      <div className="relative flex flex-col gap-10 sm:w-full md:flex-col lg:w-1/2">
        <div className="md:w-[450px]">
          <ImagePixelBeforeProcess t={t} />
        </div>
        <div className="md:w-[450px]">
          <WrapTilt
            scale={1.05}
            perspective={2000}
            glareEnable={true}
            glareMaxOpacity={0.45}
            glareBorderRadius={'16px'}>
            <ImagePixelAfterProcess />
          </WrapTilt>
        </div>
        <section className="absolute left-[420px] hidden w-1/2 xl:block">
          <div className="relative top-20">
            <SvgArrow1 />
          </div>
          <div className="relative top-2 z-[-1] rotate-[25deg]">
            <SvgArrow2 />
          </div>
        </section>
      </div>

      <div className="flex flex-col justify-center md:w-1/2 lg:pl-32">
        <section className="space-y-3">
          <ButtonPixelSelectAImage
            text={t['Select a image']}></ButtonPixelSelectAImage>
          <ButtonPixelDownloadTheProcessedImage
            text={
              t['Download the processed image']
            }></ButtonPixelDownloadTheProcessedImage>
        </section>
      </div>
    </main>
  );
}
