import React, { useState, useRef } from 'react';
import { gigs } from '../../data/data';
import GigCard from './GigCard';
import '../../styles/Feedpart.css';
import downIcon from '../../assets/down.png';

export default function FeedPart({ setSelectedGig }) {
  const [sort, setSort] = useState('sales');
  const [open, setOpen] = useState(false);
  const minRef = useRef();
  const maxRef = useRef();

  const reSort = (type) => {
    setSort(type);
    setOpen(false);
  };

  const apply = () => {
    console.log(minRef.current.value);
    console.log(maxRef.current.value);
  };

  return (
    <div className="gigs">
      <div className="gigsContainer">
        <div className="menu">
          <div className="left">
            <span className="text-white">Budget</span>
            <input ref={minRef} type="number" placeholder="min" />
            <input ref={maxRef} type="number" placeholder="max" />
            <button className="budgetbutton" onClick={apply}>
              Apply
            </button>
          </div>
          <div className="right">
            <span className="text-white">Sort by :</span>
            <span
              className="sortType text-white"
              onClick={() => setOpen(!open)}
            >
              {sort === 'sales' ? 'Best Selling' : 'Newest'}

              <img src={downIcon} alt="" onClick={() => setOpen(!open)} />
            </span>
            {open && (
              <div className="rightMenu">
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
                <span onClick={() => reSort('sales')}>Popular</span>
              </div>
            )}
          </div>
        </div>
        <div className="cards">
          {gigs.map((gig) => (
            <GigCard
              key={gig.id}
              item={gig}
              onClick={() => setSelectedGig(gig)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
