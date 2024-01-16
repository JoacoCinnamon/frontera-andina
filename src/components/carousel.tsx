import React from "react";
import ImageGallery, { type ReactImageGalleryProps } from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

type CarouselProps = {
  images: {
    original: string;
    thumbnail: string;
  }[];
} & Omit<ReactImageGalleryProps, "items">; // Omitir la propiedad 'items'

export const Carousel: React.FC<CarouselProps> = ({ images, ...props }) => {
  return <ImageGallery
    items={images}
    {...props} />;
};
