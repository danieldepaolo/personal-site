import React from "react";
import Screenshot, { ScreenshotProps } from "./Screenshot";

export interface WorkItemProps extends React.PropsWithChildren {
  title: string;
  screenshots: ScreenshotProps[];
}

export default function WorkItem({ title, screenshots, children }: WorkItemProps) {
  return (
    <div className="card work-item">
      <h3 className="u-margin-bottom-small">{title}</h3>
      {children}
      <div className="screenshot-grid">
        {screenshots.map(({ imageSrc, caption }) => (
          <Screenshot imageSrc={imageSrc} caption={caption} />
        ))}
      </div>
    </div>
  );
}
