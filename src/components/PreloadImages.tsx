import React, { useState, useEffect, ReactNode } from 'react';

interface PreloadImagesProps {
  children: ReactNode;
}

const PreloadImages: React.FC<PreloadImagesProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Specify the type for observer
    let observer: MutationObserver | null = null;
    
    const loadImages = async () => {
      const images = Array.from(document.images);
      const promises = images.map((img) => {
        if (img.complete && img.naturalHeight !== 0) {
          return Promise.resolve();
        }
        return new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });
      });

      try {
        await Promise.all(promises);
        setLoading(false);
      } catch (error) {
        console.error("One or more images failed to load.");
      }
    };

    const config = { childList: true, subtree: true };
    observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          loadImages();
        }
      }
    });

    observer.observe(document.body, config);

    // Initial load in case all images are already in the DOM
    loadImages();

    return () => {
      // Use the observer?.disconnect() to safely disconnect if observer is not null
      observer?.disconnect();
    };
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
