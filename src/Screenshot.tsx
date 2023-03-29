import { FC, ReactNode, useState } from "react";

interface ScreenshotProps {
  image: any;
  caption?: string | ReactNode;
}

const Screenshot: FC<ScreenshotProps> = ({ image, caption }) => {
  const [zoomed, setZoomed] = useState(false);

  return (
    <>
      <figure className="screenshotContainer" onClick={() => setZoomed(!zoomed)}>
        <img className={`screenshot${zoomed ? ' zoomed' : ''}`} src={image} />
        {caption && <figcaption>{caption}</figcaption>}
      </figure>
      {zoomed && <div className="dimmer" onClick={() => setZoomed(false)} />}
    </>
    
  );
}

export default Screenshot;
