import React, { useState, useEffect, ReactNode } from 'react';

interface PreloadImagesProps {
  children: ReactNode;
}

const PreloadImages: React.FC<PreloadImagesProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = async () => {
      const images = Array.from(document.images);
      const promises = images.map(img => {
        if (img.complete) {
          return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        console.error("One or more images failed to load.");
      }

      setLoading(false);
    };

    loadImages();
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default PreloadImages;
