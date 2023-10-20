import {proxy} from 'valtio';

export interface ProcessingParams {
  background: number;
  height: number;
  width: number;
}

export const contextPixelImageHandler = proxy({
  url: '',
  urlProcessed: '',
  imageName: '',
  setUrl: (value: string) => {
    contextPixelImageHandler.url = value;
  },
  setImageName: (value: string) => {
    contextPixelImageHandler.imageName = value;
  },
  processing: (value: ProcessingParams) => {
    generateImageFromUrl(
      contextPixelImageHandler.url,
      value.width,
      value.height
    ).then((res) => {
      contextPixelImageHandler.urlProcessed = res;
    });
  },
  downloadProcessedImage: () => {
    downloadProcessedImage(
      contextPixelImageHandler.urlProcessed,
      contextPixelImageHandler.imageName
    );
  },
});

async function generateImageFromUrl(
  imageUrl: string,
  targetWidth: number,
  targetHeight: number
): Promise<string> {
  try {
    // Create an Image object
    const image = new Image();

    // Wait for the image to load
    await new Promise((resolve) => {
      image.onload = resolve;
      image.src = imageUrl;
    });

    // Create a Canvas element
    const canvas = document.createElement('canvas');
    canvas.width = targetWidth;
    canvas.height = targetHeight;

    // Get the 2D context
    const context = canvas.getContext('2d');

    if (!context) {
      throw new Error('Unable to get Canvas 2D context');
    }

    // Calculate the scaling factors
    const scaleWidth = targetWidth / image.width;
    const scaleHeight = targetHeight / image.height;

    // Choose the smaller scaling factor to ensure the image fits completely in the Canvas
    const scale = Math.min(scaleWidth, scaleHeight);

    // Calculate the new width and height
    const newWidth = image.width * scale;
    const newHeight = image.height * scale;

    // Calculate the center position
    const offsetX = (targetWidth - newWidth) / 2;
    const offsetY = (targetHeight - newHeight) / 2;

    // Draw the image on the Canvas
    context.drawImage(image, offsetX, offsetY, newWidth, newHeight);

    // Convert the Canvas to a DataURL
    const generatedImageUrl = canvas.toDataURL('image/jpeg');

    // Return the generated image URL
    return generatedImageUrl;
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}

async function downloadProcessedImage(
  imageUrl: string,
  imageFileName: string
): Promise<void> {
  try {
    // Fetch the image data
    const response = await fetch(imageUrl);
    const blob = await response.blob();

    // Create a temporary anchor element
    const downloadLink = document.createElement('a');
    document.body.appendChild(downloadLink);

    // Set the download attribute and href
    downloadLink.download = imageFileName;
    downloadLink.href = URL.createObjectURL(blob);

    // Trigger a click on the anchor to start the download
    downloadLink.click();

    // Clean up
    document.body.removeChild(downloadLink);
  } catch (error) {
    console.error('An error occurred:', error);
    throw error;
  }
}
