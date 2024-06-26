import React from 'react';
import '../styles/Gallery.css';

const images = [
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.gettyimages.com.au%2Fgi-resources%2Fimages%2Ffrontdoor%2Fcreative%2FPanoramicImagesRM%2FFD_image.jpg&f=1',
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fbpucette.b.p.pic.centerblog.net%2Ffv86ll9r.jpg&f=1',
  'https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fimagejournal.org%2Fwp-content%2Fuploads%2Fbb-plugin%2Fcache%2F23466317216_b99485ba14_o-panorama.jpg&f=1',
  'https://proxy.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.lokeshdhakar.com%2Fprojects%2Flightbox2%2Fimages%2Fimage-4.jpg&f=1',
  'https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
];

const PostingPicture = () => {
  return (
    <div className="flex w-full h-full grid grid-cols-12">
      <div className="col-span-5 gallery relative">
        {images.map((src, index) => (
          <>
            <div
              key={index}
              className={`clipped-border absolute transition-transform duration-200 cursor-pointer`}
            >
              <img
                src={src}
                className="w-[250px] h-[250px]"
                alt=""
                id="clipped"
              />
            </div>
          </>
        ))}
        <div className="gallery-shadow"></div>
      </div>
      <div className="col-span-7">
        <div className=" overflow-hidden rounded-xl col-span-3 max-h-[600px]">
          <img
            className="h-full w-full object-cover "
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1399&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default PostingPicture;
