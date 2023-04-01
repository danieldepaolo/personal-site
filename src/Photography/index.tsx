const seattleImports = Object.values(import.meta.glob("../images/photos/Seattle/*", { as: 'url' }));
const sfBayAreaImports = Object.values(import.meta.glob("../images/photos/SfBayArea/*", { as: 'url' }));

import { useEffect, useState } from "react";
import { createAppImages } from "./util";
import ImageGallery from "./ImageGallery";
import { AppImage } from "../types";

export type ImportFunc = () => Promise<string>;

export default function Photography() {
  const [seattleImages, setSeattleImages] = useState<AppImage[]>([]);
  const [sfBayAreaImages, setSfBayAreaImages] = useState<AppImage[]>([]);

  useEffect(() => {
    createAppImages(seattleImports).then(setSeattleImages);
    createAppImages(sfBayAreaImports).then(setSfBayAreaImages);
  }, []);

  return (
    <>
      <h2>Seattle Photos</h2>
      {seattleImages.length && <ImageGallery images={seattleImages} />}
      <h2>San Francisco Bay Area Photos</h2>
      {sfBayAreaImages.length && <ImageGallery images={sfBayAreaImages} />}
    </>
  );
}
