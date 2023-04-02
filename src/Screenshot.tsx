import { FC, ReactNode, useRef, useState } from "react";

interface ScreenshotProps {
  imageSrc: string;
  caption?: string | ReactNode;
}

const Screenshot: FC<ScreenshotProps> = ({ imageSrc, caption }) => {
  const [zoomed, setZoomed] = useState(false);
  const imgRef = useRef<HTMLImageElement | null>(null);

  const getImgClassName = () => {
    const classes = ['screenshot'];
    if (zoomed) {
      classes.push('zoomed');
      if (imgRef.current && (imgRef.current.naturalHeight > imgRef.current.naturalWidth)) {
        classes.push('zoomed-tall');
      }
    }
    return classes.join(' ');
  };

  return (
    <>
      <figure className="screenshotContainer">
        <img
          className={getImgClassName()}
          src={imageSrc}
          ref={imgRef}
          onClick={() => setZoomed(!zoomed)}
        />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {zoomed && <div className="dimmer" onClick={() => setZoomed(false)} />}
    </>
  );
}

export default Screenshot;
