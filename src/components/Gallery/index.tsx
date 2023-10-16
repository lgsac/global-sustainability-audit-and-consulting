import React, { ReactNode } from 'react';
import LightGallery from 'lightgallery/react';
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

type GalleryProps = {
  children: ReactNode;
}

export const imgsGallery: string[] = [
  "/img/banner-consultoria.webp",
  "/img/benson-hill-proterra.webp",
  "/img/consulting.webp",
  "/img/hero-background.webp",
  "/img/home-working-1.webp",
  "/img/home-working-2.webp",
  "/img/home-working-3.webp",
  "/img/home-working-4.webp"
]

const Gallery: React.FunctionComponent<GalleryProps> = ( children ) => {

  return (
    <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
    >
        {children}
    </LightGallery>
  );
}

export default Gallery;