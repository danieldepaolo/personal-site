import { Image } from 'react-grid-gallery';
import { ImageSource } from 'yet-another-react-lightbox';

export interface AppImage extends Image {
  srcSet?: ImageSource[];
}
