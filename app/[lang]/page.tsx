import {ImageDownload, ImagePreview, ImageUpload} from '@/components/Image';
import {Locale} from '@/i18n.config';
import {getDictionary} from '@/lib/dictionary';

export default async function Home({params}: {params: {lang: Locale}}) {
  const t = await getDictionary(params.lang);

  return (
    <main className="flex">
      <div className="flex flex-grow justify-center">
        <ImageUpload></ImageUpload>
        <ImagePreview></ImagePreview>
        <ImageDownload></ImageDownload>
      </div>
      <div className="flex-grow">Refer to parameters</div>
    </main>
  );
}
