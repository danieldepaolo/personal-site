import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { AppImage } from '../types';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

export interface ImageGalleryProps {
  images: AppImage[];
  galleryMargin?: number;
}

export default function ImageGallery({ images, galleryMargin }: ImageGalleryProps) {
  const [index, setIndex] = useState<number | undefined>();

  return (
    <div className="imageGalleryContainer">
      <Gallery
        images={images}
        onClick={setIndex}
        enableImageSelection={false}
        margin={galleryMargin}
      />
      <Lightbox
        slides={images}
        open={index !== undefined}
        index={index}
        close={() => setIndex(undefined)}
      />
    </div>
  );
}
