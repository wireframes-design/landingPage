# YouTubeEmbed Component

The `YouTubeEmbed` component is a reusable React component for embedding YouTube videos. It allows you to specify the video ID and optional width and height for the iframe.

## Installation

1. Ensure you have a React project set up. If not, you can create one using Create React App:

   ```bash
   npx create-react-app my-app
   cd my-app


```tsx
import React from 'react';

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
```

## Usage
Import and use the `YouTubeEmbed` component in your application. For example, you can modify the App.tsx file as follows:

```tsx
import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const App: React.FC = () => {
  return (
    <div>
      <h1>Embedded YouTube Videos</h1>
      <YouTubeEmbed videoId="dQw4w9WgXcQ" />
      <YouTubeEmbed videoId="anotherVideoId" width="800px" height="450px" />
      <YouTubeEmbed videoId="yetAnotherVideoId" width={800} height={450} />
    </div>
  );
};

export default App;
```

## Props
The `YouTubeEmbed` component accepts the following props:

1. `videoId` (string, required): The ID of the YouTube video to embed.
2. `width` (number | string, optional): The width of the iframe. Default is 560.
3. `height` (number | string, optional): The height of the iframe. Default is 315.

## Example

```tsx
import React from 'react';
import YouTubeEmbed from './YouTubeEmbed';

const App: React.FC = () => {
  return (
    <div>
      <h1>Embedded YouTube Videos</h1>
      <YouTubeEmbed videoId="dQw4w9WgXcQ" />
      <YouTubeEmbed videoId="anotherVideoId" width="800px" height="450px" />
      <YouTubeEmbed videoId="yetAnotherVideoId" width={800} height={450} />
    </div>
  );
};

export default App;
```