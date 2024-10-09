import React from "react";

interface YouTubeEmbedProps {
  width?: number | string;
  height?: number | string;
  videoId: string;
}

const YouTubeEmbed: React.FC<YouTubeEmbedProps> = ({
  width = 560,
  height = 315,
  videoId,
}) => {
  return (
    <div>
      <iframe
        width={width}
        height={height}
        src={`https://www.youtube.com/embed/${videoId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="YouTube video"
      ></iframe>
    </div>
  );
};

export default YouTubeEmbed;
