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
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-semibold text-center mb-6">Product Slider</h2>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <div key={product._id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-40 object-cover mb-2"
                style={{ transform: "rotate(-30deg)", height: "100%" }}
              />
              <h3 className="text-gray-800 font-semibold mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <p className="text-gray-600 font-semibold">${product.price}</p>
              <div className="flex items-center space-x-1 mt-2">
                {renderStars(product.rating)} {/* Display stars */}
                <span className="text-gray-600">({product.reviews} reviews)</span>
              </div>
              <div className="flex mt-2 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-gray-700">
                  <FaEye />
                </button>
                <button className="text-gray-500 hover:text-red-700">
                  <FaHeart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Product;
