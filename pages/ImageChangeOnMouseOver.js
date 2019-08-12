import React from 'react';
import ImageToggleOnMouseOver from './../src/ImageToggleOnMouseOver';

const ImageChangeOnMouseOver = () => {
  return (
    <div>
      <ImageToggleOnMouseOver primaryImg="/static/images/bw/image1.jpeg"
                              secondaryImg="/static/images/color/image1.jpeg"
                              alt="" />
      &nbsp; &nbsp; &nbsp;
      <ImageToggleOnMouseOver primaryImg="/static/images/bw/image2.jpeg"
                              secondaryImg="/static/images/color/image2.jpeg"
                              alt="" />
    </div>
  );
}

export default ImageChangeOnMouseOver;