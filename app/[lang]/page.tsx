import {ImageAfterProcess, ImageBeforeProcess} from '@/components/Image';
import {SvgArrow1} from '@/components/Svg/SvgArrow1';
import {SvgArrow2} from '@/components/Svg/SvgArrow2';
import {WrapTilt} from '@/components/Wrap';
import {Button} from '@/components/ui/button';
import {Locale} from '@/i18n.config';
import {getDictionary} from '@/lib/dictionary';

export default async function Home({params}: {params: {lang: Locale}}) {
  const t = await getDictionary(params.lang);

  return (
    <main className="flex flex-col gap-6 sm:mx-12 sm:my-12 sm:flex-row lg:mx-24">
      <div className="relative flex flex-col gap-10 sm:w-1/2 sm:min-w-[300px]">
        <ImageBeforeProcess />
        <WrapTilt
          scale={1.1}
          perspective={1000}
          glareEnable={true}
          glareMaxOpacity={0.45}
          glareBorderRadius={'16px'}>
          <ImageAfterProcess />
        </WrapTilt>
        <section className="absolute right-[-12rem] hidden w-1/2 lg:block">
          <div className="relative top-20">
            <SvgArrow1 />
          </div>
          <div className="relative top-16">
            <SvgArrow2 />
          </div>
        </section>
      </div>

      <div className="flex flex-col justify-center sm:w-1/2 sm:pl-32">
        <section className="space-y-3">
          <div>
            <Button>{t['Select a image']}</Button>
          </div>
          <div>
            <Button>{t['Download the processed image']}</Button>
          </div>
        </section>
      </div>
    </main>
  );
}
