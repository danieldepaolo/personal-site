import { FC, ReactNode, useState } from "react";

interface ScreenshotProps {
  imageSrc: string;
  caption?: string | ReactNode;
}

const Screenshot: FC<ScreenshotProps> = ({ imageSrc, caption }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <figure className="screenshotContainer">
        <img className={`screenshot${zoomed ? ' zoomed' : ''}`} src={imageSrc} onClick={() => setZoomed(!zoomed)} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {zoomed && <div className="dimmer" onClick={() => setZoomed(false)} />}
    </>
  );
}

export default Screenshot;
