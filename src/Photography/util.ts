import { AppImage } from "../types";

// Async url import functions from Vite
// https://vitejs.dev/guide/features.html#glob-import
type ImportFunc = () => Promise<string>;

export const createHtmlImageList = async (importFuncs: ImportFunc[]): Promise<HTMLImageElement[]> => {
  const imageList = await Promise.all(importFuncs
    .map(async (func: ImportFunc) => {
      const url = await func();
      const image = new Image();
      image.src = url;
      return image;
    }));
  return imageList;
}

export const createAppImages = async (importFuncs: ImportFunc[]): Promise<AppImage[]> => {
  const images = await createHtmlImageList(importFuncs);
  return images.map(img => ({ src: img.src, height: img.height, width: img.width }));
}
