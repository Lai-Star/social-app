import * as React from 'react';
// import CreditCard from '../components/payment/CreditCard';
import Checkout from '../components/payment/Checkout';
import '../styles/CreditCard.css';

export default function Payment() {
  return (
    <div className="pt-7 pb-14 pl-4 shadow-sm bg-white bg-opacity-80">
      <Checkout />
    </div>
  );
}
