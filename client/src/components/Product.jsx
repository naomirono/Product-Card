import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaEye, FaHeart } from 'react-icons/fa';

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

  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h2 className="text-4xl font-bold text-center mb-6 py-5">Latest <span className="text-orange-500"> Products</span></h2>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <div key={product._id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4 flex flex-col ">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-40 object-cover mb-2"
                style={{ transform: "rotate(-30deg)", height: "100%" }}
              />
              <h3 className="text-gray-800 font-semibold mb-2">{product.description}</h3>
              
              <p className="text-gray-600 font-semibold">${product.price}</p>
              <div className="flex mt-2 space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                  Add to Cart
                </button>
                <button className="text-gray-500 hover:text-orange-500 ">
                  <FaHeart />
                </button>
                <button className="text-gray-500 hover:text-orange-500 ">
                  <FaEye />
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
