import { useState } from 'react';

type ImageWithFallbackProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  fallbackSrc?: string;
};

const DEFAULT_FALLBACK_SRC =
  'data:image/svg+xml;charset=UTF-8,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22960%22 height=%22640%22 viewBox=%220 0 960 640%22%3E%3Crect width=%22960%22 height=%22640%22 fill=%22%23f5f5f5%22/%3E%3Cpath d=%22M180 440l150-150 110 110 90-90 250 250H180z%22 fill=%22%23d9d9d9%22/%3E%3Ccircle cx=%22310%22 cy=%22240%22 r=%2240%22 fill=%22%23d9d9d9%22/%3E%3C/svg%3E';

export function ImageWithFallback({
  src,
  alt,
  fallbackSrc = DEFAULT_FALLBACK_SRC,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      {...props}
      src={currentSrc}
      alt={alt}
      onError={(event) => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc);
        }
        onError?.(event);
      }}
    />
  );
}