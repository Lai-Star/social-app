import React from 'react';
import { Link } from 'react-router-dom';
import starImg from '../../assets/star.png';
import '../../styles/GigCard.css';

const GigCard = ({ item }) => {
  return (
    <div className="gigCard">
      <img className="gigImg" src={item.img} alt="" />
      <div className="info">
        <div className="cardUser">
          <img src={item.pp} alt="" />
          <div className="flex justify-around mt-2">
            <span>{item.username}</span>
            <Link to="/map" className="link hover:underline">
              <div className="country">
                <img
                  src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                  alt=""
                />
                <span>United States</span>
              </div>
            </Link>
          </div>
        </div>
        <Link to="/job-posting/123" className="link hover:underline">
          <p className="text-black">{item.desc}</p>
        </Link>
        <div className="star">
          <div>
            <img className="starImg" src={starImg} alt="" />
            <span>{item.star}</span>
          </div>
          <div className="price">
            <span>STARTING AT</span>
            <h2>${item.price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GigCard;
