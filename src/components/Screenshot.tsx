import { FC, ReactNode, useRef, useState } from "react";

export interface ScreenshotProps {
  imageSrc: string;
  caption?: string | ReactNode;
}

const Screenshot: FC<ScreenshotProps> = ({ imageSrc, caption = "" }) => {
  const [zoomed, setZoomed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const getImgClassName = () => {
    const classes = ['screenshot__image'];
    if (zoomed) {
      classes.push('screenshot__zoomed');
      if (imgRef.current && (imgRef.current.naturalHeight > imgRef.current.naturalWidth)) {
        classes.push('screenshot__zoomed-tall');
      }
    }
    return classes.join(' ');
  };

  return (
    <div className="screenshot">
      <figure>
        <img
          className={getImgClassName()}
          src={imageSrc}
          ref={imgRef}
          onClick={() => setZoomed(!zoomed)}
        />
        <figcaption className="screenshot__caption">{caption}</figcaption>
      </figure>
      {zoomed && <div className="dimmer" onClick={() => setZoomed(false)} />}
    </div>
  );
}

export default Screenshot;
