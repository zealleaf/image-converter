import Image from 'next/image';
import {AspectRatio} from '@/components/ui/aspect-ratio';

interface ImageDownloadProps {
  src?: string;
  alt?: string;
}

export function ImageAfterProcess({src, alt}: ImageDownloadProps) {
  return (
    <div className="w-full rounded-2xl bg-gray-500">
      <AspectRatio ratio={16 / 9}>
        {/* <Image */}
        {/*   className="rounded-md object-cover" */}
        {/*   width={0} */}
        {/*   height={0} */}
        {/*   src={'https://avatars.githubusercontent.com/u/106396432?v=4'} */}
        {/*   sizes="100vw" */}
        {/*   style={{width: '100%', height: 'auto'}} */}
        {/*   alt={'Image'}></Image> */}
      </AspectRatio>
    </div>
  );
}
