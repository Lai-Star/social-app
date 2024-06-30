import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Gig.css';
import clock from '../../assets/clock.png';
import recycle from '../../assets/recycle.png';
import check from '../../assets/check.png';
import star from '../../assets/star.png';

function Gig() {
  return (
    <div className="gig">
      <div className="gigContainer">
        <div className="gigLeft">
          <h1>I need UI/UX design</h1>
          <div className="gigUser">
            <img
              className="pp"
              src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
            <span>Akshat Jalan</span>
            <div className="gigStars">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
              <span>5</span>
            </div>
          </div>
          <div className="gigSlider">
            <img
              src="https://images.pexels.com/photos/1054777/pexels-photo-1054777.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
            />
          </div>
          <h2>About This Job</h2>
          <p>
            I use an UI program to create images based on text prompts. This
            means I need UI/UX Design. description of your scene without
            requiring any reference images.
          </p>
          <div className="seller">
            <h2>About The Poster</h2>
            <div className="gigSellerUser">
              <img
                className="gigSellerImg"
                src="https://images.pexels.com/photos/720327/pexels-photo-720327.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt=""
              />
              <div className="gigInfo">
                <span>Akshat Jalan</span>
                <div className="gigStars">
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <img src={star} alt="" />
                  <span>5</span>
                </div>
                <button className="Buttons1">Contact Me</button>
              </div>
            </div>
            <div className="box">
              <div className="boxItems">
                <div className="boxItem">
                  <span>From</span>
                  <span>INDIA</span>
                </div>
                <div className="boxItem">
                  <span>Member since</span>
                  <span>Aug 2023</span>
                </div>
                <div className="boxItem">
                  <span>Avg. response time</span>
                  <span>4 hours</span>
                </div>
                <div className="boxItem">
                  <span>Last delivery</span>
                  <span>1 day</span>
                </div>
                <div className="boxItem">
                  <span>Languages</span>
                  <span>English</span>
                </div>
              </div>
              <hr />
              <p>
                My name is Akshat, I enjoy creating UI/UX generated art in my
                spare time. I have a lot of experience using the UI/UX and will
                provide incredibly detailed result.
              </p>
            </div>
          </div>
          <div className="reviews">
            <h2>Comments</h2>
            <div className="reviewsItem">
              <div className="reviewUser">
                <img
                  className="reviewUserpp"
                  src="https://images.pexels.com/photos/839586/pexels-photo-839586.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="gigInfo">
                  <Link
                    to="/profile"
                    target="_blank"
                    className="link hover:underline"
                  >
                    <span>Garner David</span>
                  </Link>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
                <div className="gigInfo float-right ml-auto">
                  <span>$100</span>
                </div>
              </div>
              <div className="gigStars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                I specialize in creating intuitive and visually appealing UI
                designs that enhance user experience and engagement.
              </p>
            </div>
            <hr />
            <div className="reviewsItem">
              <div className="reviewUser">
                <img
                  className="reviewUserpp"
                  src="https://images.pexels.com/photos/4124367/pexels-photo-4124367.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="gigInfo">
                  <Link
                    to="/profile"
                    target="_blank"
                    className="link hover:underline"
                  >
                    <span>Sidney Owen</span>
                  </Link>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                      alt=""
                    />
                    <span>Germany</span>
                  </div>
                </div>
                <div className="gigInfo float-right ml-auto">
                  <span>$100</span>
                </div>
              </div>
              <div className="gigStars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                With extensive experience in UI/UX design, I can deliver a
                seamless and user-friendly interface for generating images from
                text prompts
              </p>
            </div>
            <hr />
            <div className="reviewsItem">
              <div className="reviewUser">
                <img
                  className="reviewUserpp"
                  src="https://images.pexels.com/photos/842980/pexels-photo-842980.jpeg?auto=compress&cs=tinysrgb&w=1600"
                  alt=""
                />
                <div className="gigInfo">
                  <Link
                    to="/profile"
                    target="_blank"
                    className="link hover:underline"
                  >
                    <span>Lyle Giles </span>
                  </Link>
                  <div className="country">
                    <img
                      src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                      alt=""
                    />
                    <span>United States</span>
                  </div>
                </div>
                <div className="gigInfo float-right ml-auto">
                  <span>$100</span>
                </div>
              </div>
              <div className="gigStars">
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <span>5</span>
              </div>
              <p>
                My designs focus on user-centric principles, ensuring your
                application is both beautiful and easy to navigate. I excel at
                transforming complex processes into simple, engaging user
                experiences with modern and clean UI designs.
              </p>
            </div>
          </div>
        </div>
        <div className="gigRight">
          <div className="gigPrice">
            <h3>UI/UX Designs</h3>
            <h2>$150</h2>
          </div>
          <p>
            I will need a unique high quality UI/UX design based on a
            description that you give me
          </p>
          <div className="gigDetails">
            <div className="gigItem">
              <img src={clock} className="h-16" alt="" />
              <span>2 Days Delivery</span>
            </div>
            <div className="gigItem">
              <img src={recycle} alt="" className="h-16" />
              <span>3 Revisions</span>
            </div>
          </div>
          <div className="features">
            <div className="gigItem">
              <img className="checkIcon" src={check} alt="" />
              <span>Prompt writing</span>
            </div>
            <div className="gigItem">
              <img className="checkIcon" src={check} alt="" />
              <span>Artwork delivery</span>
            </div>
            <div className="gigItem">
              <img className="checkIcon" src={check} alt="" />
              <span>Image upscaling</span>
            </div>
            <div className="gigItem">
              <img className="checkIcon" src={check} alt="" />
              <span>Additional design</span>
            </div>
          </div>
          <button className="Buttons">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default Gig;
