import React from 'react';
import ImageToggleOnScroll from '../src/ImageToggleOnScroll';

const ImageChangeOnScroll = () => {
  return (
    <div>
      {
        ['image1.jpeg', 'image2.jpeg', 'image3.jpeg', 'image4.jpg', 'image5.jpg', 'image6.gif', 'image7.jpg']
        .map(imgId => {
          return (
            <ImageToggleOnScroll  primaryImg={`/static/images/bw/${imgId}`}
                                  secondaryImg={`/static/images/color/${imgId}`}
                                  alt=""
                                  key={imgId}/>
          );
        })
      }
    </div>
  );
}

export default ImageChangeOnScroll;