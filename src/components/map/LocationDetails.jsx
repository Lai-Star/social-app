import React from 'react';

export default function LocationDetails() {
  return (
    <div className="p-4 bg-black text-white bg-opacity-90 flex justify-center items-center shadow-lg">
      <div className="w-1/3 p-auto">
        <img
          src="/img/city.JFIF"
          alt="City"
          className="rounded w-[400px] h-[400px] object-cover shadow-lg"
        />
      </div>
      <div className="w-1/3 pl-4">
        <h2 className="text-2xl font-bold">Machtabbe</h2>
        <p className="mt-8">
          Paris, France&apos;s capital, is a major European city and a global
          center for art, fashion, gastronomy and culture. Its 19th-century
          cityscape is crisscrossed by wide boulevards and the River Seine.
          Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic
          Notre-Dame cathedral, the city is known for its cafe culture and
          designer boutiques along the Rue du Faubourg Saint-Honor&eacute;. ―
          Google
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded mt-8">
          Explore
        </button>
      </div>
    </div>
  );
}
