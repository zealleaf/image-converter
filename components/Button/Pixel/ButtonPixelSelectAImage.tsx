'use client';

import {Button} from '@/components/ui/button';
import {contextPixelImageHandler} from '@/context';

const handleImageChange = (e: any) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      contextPixelImageHandler.setUrl(reader.result as string);
      contextPixelImageHandler.setImageName(file.name);
    };

    reader.readAsDataURL(file);
  }
};

const handleButtonClick = () => {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = 'image/*';
  input.addEventListener('change', handleImageChange);

  input.click();
};

export function ButtonPixelSelectAImage({text}: {text: string}) {
  return (
    <div>
      <Button onClick={handleButtonClick}>{text}</Button>
    </div>
  );
}
