import React, { useState } from 'react';
import '../styles/Gallery.css';

const images = [
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gettyimages.com.au%2Fgi-resources%2Fimages%2Ffrontdoor%2Fcreative%2FPanoramicImagesRM%2FFD_image.jpg&f=1',
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbpucette.b.p.pic.centerblog.net%2Ffv86ll9r.jpg&f=1',
  'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimagejournal.org%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2F23466317216_b99485ba14_o-panorama.jpg&f=1',
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-4.jpg&f=1',
  'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];
const catImages = [
  {
    src: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gettyimages.com.au%2Fgi-resources%2Fimages%2Ffrontdoor%2Fcreative%2FPanoramicImagesRM%2FFD_image.jpg&f=1',
    title: 'Plotting Cat',
  },
  {
    src: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbpucette.b.p.pic.centerblog.net%2Ffv86ll9r.jpg&f=1',
    title: 'Angry Cat',
  },
  {
    src: 'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimagejournal.org%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2F23466317216_b99485ba14_o-panorama.jpg&f=1',
    title: 'Curious Cat',
  },
  {
    src: 'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-4.jpg&f=1',
    title: 'Prowling Cat',
  },
  {
    src: 'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Sleepy Cat',
  },
];

const PostingPicture = () => {
  const [selectedImage, setSelectedImage] = useState(images[0]);

  const handleImageClick = (src) => {
    setSelectedImage(src);
  };

  return (
    <div className="flex-1 w-full h-full">
      <div className="flex grid grid-cols-12 gap-4">
        <div className="col-span-5 gallery relative">
          {images.map((src, index) => (
            <div
              key={index}
              className="clipped-border absolute transition-transform duration-200 cursor-pointer"
              onClick={() => handleImageClick(src)}
            >
              <img
                src={src}
                className="w-[250px] h-[250px] object-cover"
                alt=""
                id="clipped"
              />
            </div>
          ))}
          <div className="gallery-shadow"></div>
        </div>
        <div className="col-span-7 flex items-center justify-center">
          <div className="overflow-hidden rounded-xl max-h-[600px] w-full flex items-center justify-center bg-gray-200">
            <img
              key={selectedImage} // Add key to re-trigger animation on change
              className="img2 max-h-full w-full object-contain animate-scaleUp"
              src={selectedImage}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="container">
          {catImages.map((cat, index) => (
            <div
              key={index}
              className="card"
              onClick={() => handleImageClick(cat.src)}
            >
              <img src={cat.src} alt={cat.title} />
              <div className="card__head">{cat.title}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostingPicture;
