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
        images[i].onerror = imageLoaded; // Call imageLoaded on error to proceed regardless
      }
    }

    // If there are no images, set loading to false
    if (totalImages === 0) {
      setLoading(false);
    }
  }, []);

  return (
    <>
      {loading ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
          {/* Customize your loading indicator here */}
          <div className="text-2xl">Loading...</div>
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
