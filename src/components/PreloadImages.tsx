import React, { useState, useEffect, ReactNode } from 'react';
import { Transition } from '@headlessui/react';

interface PreloadImagesProps {
  children: ReactNode;
}

const PreloadImages: React.FC<PreloadImagesProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const images = document.images;
    const totalImages = images.length;
    let imagesLoaded = 0;

    const imageLoaded = () => {
      imagesLoaded++;
      if (imagesLoaded === totalImages) {
        setLoading(false);
      }
    };

    for (let i = 0; i < totalImages; i++) {
      if (images[i].complete) {
        imageLoaded();
      } else {
        images[i].onload = imageLoaded;
        images[i].onerror = imageLoaded; 
      }
    }

    if (totalImages === 0) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <Transition
          show={!loading}
          enter="transition-opacity duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          {children}
        </Transition>
      )}
    </>
  );
};

export default PreloadImages;

