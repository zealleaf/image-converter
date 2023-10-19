'use client';

import {contextImageHandler} from '@/context';
import {Button} from '../ui/button';

const handleImageChange = (e: any) => {
  const file = e.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onloadend = () => {
      contextImageHandler.setUrl({value: reader.result as string});
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

export function ButtonSelectAImage({text}: {text: string}) {
  return (
    <div>
      <Button onClick={handleButtonClick}>{text}</Button>
    </div>
  );
}