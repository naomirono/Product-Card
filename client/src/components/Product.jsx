import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
      <h2 className="text-3xl font-semibold text-center mb-6">Product Slider</h2>
      <Slider {...sliderSettings}>
        {products.map(product => (
          <div key={product._id} className="p-2">
            <div className="bg-white rounded-lg shadow-md p-4">
              <img src={product.image} alt={product.title} className="w-full h-40 object-cover mb-2" />
              <h3 className="text-gray-800 font-semibold">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
              <div className="mt-4">
                <span className="text-green-500 font-semibold">${product.price}</span>
                <button className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-2 py-1 rounded">
                  Add to Cart
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
