// import React from 'react';
// import { FaStar } from 'react-icons/fa'; 
// import image0 from '../assets/0.jpg'
// import image1 from '../assets/2.jpg'
// import image2 from '../assets/1.jpg'
// import image3 from '../assets/4.jpg'

// const Featured = () => {
//   return (
//    <div className='bg-gray-100'>  
//     <div className="max-w-7xl mx-auto px-4 py-12">
//       <div className=" flex flex-wrap gap-6 border border-solid border-gray-300 rounded bg-white p-8 items-center my-6 shadow-md">
//         <div className="image-container flex flex-1 items-center">
//           <div className="small-image w-1/6">
//             <img src={image0} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
//             <img src={image1} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
//             <img src={image2} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
//             <img src={image3} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
//           </div>
//           <div className="big-image w-3/4 p-4">
//             <img src={image0} alt="" className="big-image-2 w-full transform transition-transform hover:scale-105" />
//           </div>
//         </div>
//         <div className="content flex-1">
//           <h3 className="text-3xl font-semibold mb-2">Air Jordan 4 x Off-White "Sail"</h3>
//           <div className="stars flex items-center space-x-1">
//             <FaStar className="text-orange-500 text-2xl" />
//             <FaStar className="text-orange-500 text-2xl" />
//             <FaStar className="text-orange-500 text-2xl" />
//             <FaStar className="text-orange-500 text-2xl" />
//             <FaStar className="text-orange-500 text-2xl" />
//           </div>
//           <p className="text-gray-600 text-lg py-4">
//                     The Air Jordans 4 x Off-White “Sail” is a highly desirable collaboration between Virgil Abloh's fashion
//                     label22 and Jordans Brand on Michael Jordans's fourth signature shoe.The signature “quotations”
//                     aesthetic of Abloh's Jordans Brand collaborations underpins this Sail colored shoe, including “Air”
//                     branding printed on the midsole and “shoelace” detailing in black lettering on the laces.
//                     Translucent detailing, including the heel cup, Wings clips on the collar, and netting on the midsole
//                     and throat are all firsts for the Jordans 4. The visible Air window in the heel is surrounded by a
//                     white midsole.
//           </p>
//           <div className="price text-3xl font-semibold mb-2">
//             $129 <span className="text-orange-500 text-lg line-through">$132</span>
//           </div>
//           <a href="#" className="btn bg-blue-500 text-white py-2 px-4 rounded inline-block">
//             add to cart
//           </a>
//         </div>
//       </div>
//     </div>
//    </div>  
//   );
// };

// export default Featured;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FaStar } from 'react-icons/fa';

const Featured = () => {
  const [featuredProduct, setFeaturedProduct] = useState(null);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching featured product:', error);
      });
  }, []);

  const renderStars = (rating) => {
    const starCount = 5;
    const fullStarCount = Math.floor(rating);
    const remainingStarCount = starCount - fullStarCount;

    const stars = [];
    for (let i = 0; i < fullStarCount; i++) {
      stars.push(<FaStar key={`full-star-${i}`} className="text-yellow-500 text-2xl" />);
    }
    for (let i = 0; i < remainingStarCount; i++) {
      stars.push(<FaStar key={`empty-star-${i}`} className="text-gray-300 text-2xl" />);
    }

    return stars;
  };

  return (
    <div className='bg-gray-100'> 
    {products.map(product => (
          <div key={product._id} className="p-2"> 
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className=" flex flex-wrap gap-6 border border-solid border-gray-300 rounded bg-white p-8 items-center my-6 shadow-md">
          <div className="image-container flex flex-1 items-center">
            <div className="small-image w-2/6">
            <img src={product.featuredImage1} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            <img src={product.featuredImage2} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            <img src={product.featuredImage3} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            <img src={product.featuredImage4} alt="" className="featured-image-2 w-full border border-solid border-gray-300 cursor-pointer hover:bg-gray-300" />
            </div>
            <div className="big-image w-3/4 p-2">
              <img src={product.featuredImage0} alt="" className="big-image-2 w-full transform transition-transform hover:scale-105" />
            </div>
          </div>
          <div className="content flex-1">
            <h3 className="text-3xl font-semibold mb-2">{product.description}</h3>
            <div className="stars flex items-center space-x-1">
            {renderStars(product.rating)}
            </div>
            <p className="text-gray-600 text-lg py-4">{product.featuredDescription}</p>
            <div className="price text-3xl font-semibold mb-2">
              ${product.price} <span className="text-orange-500 text-lg line-through">${product.featuredPrice}</span>
            </div>
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded inline-block">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      </div>
        ))}
    </div>  
  );
};

export default Featured;
