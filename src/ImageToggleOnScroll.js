import React, { useRef, useEffect, useState } from 'react';

const ImageToggleOnScroll = ({ primaryImg, secondaryImg }) => {
  const imageRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    window.addEventListener('scroll', scrollHandler);
    setInview(isInView);
    setIsLoading(false);
    return ( () => {
      window.removeEventListener('scroll', scrollHandler);
    })
  }, [isLoading])
  
  const [inView, setInview] = useState(false);
  const isInView = () => {
    if (imageRef.current) {
      const rect = imageRef.current.getBoundingClientRect();
      return rect.top >= 0 && rect.bottom <= window.innerHeight;
    }
    return false;
  };

  const scrollHandler = () => {
    setInview(() => {
      return isInView();
    });
  };
  
  return isLoading ? null : (
    <div>
      <img
            src={inView ? secondaryImg : primaryImg}
            ref={imageRef}
            width="300"
            height="300"
            alt=""/>
    </div>
  );
}

export default ImageToggleOnScroll;