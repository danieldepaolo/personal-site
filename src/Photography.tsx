const seattleImports = Object.values(import.meta.glob("./images/photos/Seattle/*", { as: 'url' }));
const sfBayAreaImports = Object.values(import.meta.glob("./images/photos/SfBayArea/*", { as: 'url' }));

import { Gallery, Image as GridImage } from "react-grid-gallery";
import { useEffect, useState } from "react";
import Screenshot from "./Screenshot";

export type ImportFunc = () => Promise<string>;

async function createImageList(importFuncs: ImportFunc[]): Promise<HTMLImageElement[]> {
  const imageList = await Promise.all(importFuncs
    .map(async (func: ImportFunc) => {
      const url = await func();
      const image = new Image();
      image.src = url;
      return image;
    }));
  return imageList;
}

export default function Photography() {
  const [seattleImages, setSeattleImages] = useState<GridImage[]>([]);
  const [sfBayAreaImages, setSfBayAreaImages] = useState<GridImage[]>([]);

  useEffect(() => {
    createImageList(seattleImports).then((list) => list.map(img => ({ src: img.src, height: img.height, width: img.width }))).then(setSeattleImages);
    createImageList(sfBayAreaImports).then((list) => list.map(img => ({ src: img.src, height: img.height, width: img.width }))).then(setSfBayAreaImages);
  }, []);

  console.log(sfBayAreaImages);

  return (
    <>
      <h2>Seattle Photos</h2>
      {seattleImages.length && <Gallery images={seattleImages} />}
      <h2>San Francisco Bay Area Photos</h2>
      {sfBayAreaImages.length && <Gallery images={sfBayAreaImages} />}
    </>
  );
}
