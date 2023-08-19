import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaEye, FaHeart, FaStar } from 'react-icons/fa';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const renderStars = (rating) => {
    const starCount = 5;
    const fullStarCount = Math.floor(rating);
    const remainingStarCount = starCount - fullStarCount;

    const stars = [];
    for (let i = 0; i < fullStarCount; i++) {
      stars.push(<FaStar key={`full-star-${i}`} className="text-yellow-500" />);
    }
    for (let i = 0; i < remainingStarCount; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300" />);
    }

    return stars;
  };

  return (
  <div className='bg-gray-100'>
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-5xl font-semibold text-center mb-14">Featured <span className="text-orange-400">Products</span></h2>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <div key={product._id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col relative">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-50 rounded object-cover mb-2"
              />

              <button className="bg-gray-200 py-1 px-3 rounded-lg text-sm w-1/3 hover:bg-orange-400 ">
                Official Store
              </button>

              <h3 className="text-gray-800 font-semibold mt-2 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-2">{product.description}</p>
              <p className="text-gray-600 font-semibold">${product.price}</p>
              <div className="flex items-center space-x-1 mt-2 mb-2">
                {renderStars(product.rating)} 
                <span className="text-gray-600 pl-2">{product.reviews} reviews</span>
              </div>

              <div className="flex mt-2 space-x-4">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded mr-10">
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-orange-400 ml-4">
                  <FaHeart />
                </button>
                <button className="text-gray-500 hover:text-orange-400">
                  <FaEye />
                </button>
              </div>

            </div>
          </div>
        ))}
      </Slider>
    </div>
  </div>   
  );
};

export default Product;
