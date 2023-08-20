import React from 'react';
import { FaStar } from 'react-icons/fa'; 
import image0 from '../assets/0.jpg'
import image1 from '../assets/2.jpg'
import image2 from '../assets/1.jpg'
import image3 from '../assets/4.jpg'

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className=" flex flex-wrap gap-6 border border-solid border-gray-300 rounded bg-white p-8 items-center my-6 shadow-md">
        <div className="image-container flex flex-1 items-center">
          <div className="small-image w-1/6">
            <img src={image0} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            <img src={image1} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            <img src={image2} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            <img src={image3} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
          </div>
          <div className="big-image w-3/4 p-4">
            <img src={image0} alt="" className="big-image-2 w-full transform transition-transform hover:scale-105" />
          </div>
        </div>
        <div className="content flex-1">
          <h3 className="text-3xl font-semibold mb-2">Womens Air Jordan 4 Sail Muslin</h3>
          <div className="stars flex items-center space-x-1">
            <FaStar className="text-orange-500 text-2xl" />
            <FaStar className="text-orange-500 text-2xl" />
            <FaStar className="text-orange-500 text-2xl" />
            <FaStar className="text-orange-500 text-2xl" />
            <FaStar className="text-orange-500 text-2xl" />
          </div>
          <p className="text-gray-600 text-lg py-4">
                    The women's Air Jordans 4 “Sail” is a highly desirable collaboration between Virgil Abloh's fashion
                    label22 and Jordans Brand on Michael Jordans's fourth signature shoe.The signature “quotations”
                    aesthetic of Abloh's Jordans Brand collaborations underpins this Sail colored shoe, including “Air”
                    branding printed on the midsole and “shoelace” detailing in black lettering on the laces.
                    Translucent detailing, including the heel cup, Wings clips on the collar, and netting on the midsole
                    and throat are all firsts for the Jordans 4. The visible Air window in the heel is surrounded by a
                    white midsole.
          </p>
          <div className="price text-3xl font-semibold mb-2">
            $110 <span className="text-orange-500 text-lg line-through">$115</span>
          </div>
          <a href="#" className="btn bg-blue-500 text-white py-2 px-4 rounded inline-block">
            add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default Featured;
