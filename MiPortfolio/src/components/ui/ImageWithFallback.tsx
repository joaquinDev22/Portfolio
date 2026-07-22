import { useState } from "react";
import type { SyntheticEvent } from "react";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallbackSrc?: string;
  alt: string;
}

export default function ImageWithFallback({
  src,
  fallbackSrc = "https://placehold.co/600x400/0f172a/3b82f6?text=Imagen+No+Disponible",
  alt,
  className,
  onError,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState<string>(src);
  const [isError, setIsError] = useState<boolean>(false);

  const handleError = (e: SyntheticEvent<HTMLImageElement, Event>) => {
    if (!isError) {
      setIsError(true);
      setImgSrc(fallbackSrc);
    }
    if (onError) {
      onError(e);
    }
  };

  return (
    <img
      {...props}
      src={imgSrc}
      alt={alt}
      className={className}
      onError={handleError}
    />
  );
}
