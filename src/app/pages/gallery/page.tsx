"use client";
import Navbar from '@/app/navbar';
import React from 'react';

interface Image {
  id: number;
  src: string;
  alt: string;
}

const images: Image[] = [
  { id: 1, src: '/s1.jpg', alt: 'Image 1' },
  { id: 2, src: '/s2.jpg', alt: 'Image 2' },
  { id: 3, src: '/s1.jpg', alt: 'Image 3' },
  { id: 2, src: '/s2.jpg', alt: 'Image 2' },
  { id: 3, src: '/s1.jpg', alt: 'Image 3' },
  { id: 2, src: '/s2.jpg', alt: 'Image 2' },
  { id: 3, src: '/s1.jpg', alt: 'Image 3' },
  { id: 2, src: '/s2.jpg', alt: 'Image 2' },
  { id: 3, src: '/s1.jpg', alt: 'Image 3' },
  { id: 2, src: '/s2.jpg', alt: 'Image 2' },
  { id: 3, src: '/s1.jpg', alt: 'Image 3' },
  { id: 3, src: '/s1.jpg', alt: 'Image 3' },
  
  // Add more images as needed
];

const Gallery = () => {
  return (
    <div>
       <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-4xl font-semibold text-center mb-8">APS Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map(image => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
              <img src={image.src} alt={image.alt} className="w-full h-72 object-cover transform hover:scale-105 transition-transform duration-300"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
