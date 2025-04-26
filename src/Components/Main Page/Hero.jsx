

import React, { useEffect, useState } from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import ProductCard from '../Product/ProductCard';
import { getProducts } from '../../api';
import AddToCartButton from '../../AddToCartButton';
import { auth } from '../../lib/firebase';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);

  const targetIds = [
    '67fec61e36645cdcd33114bd',
    '67fec61e36645cdcd33114bf',
    '67fec61e36645cdcd33114be',
    '67fec61e36645cdcd33114c1',
  ];

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
    }
  }, []);
const fetchAndFilterProducts = async () => {
      try {
        const allProducts = await getProducts();
        const filtered = allProducts.filter((p) => targetIds.includes(p._id));
        setFeaturedProducts(filtered);
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };
    
  useEffect(() => {
    

    fetchAndFilterProducts();
  }, [refresh]);

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar />

      {/* Hero Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between bg-[#fafafa] px-4 sm:px-6 md:px-10 lg:px-20 lg:min-h-[calc(100vh-235px)] pt-10 ">
        <div className="max-w-xl  text-center lg:text-left mb-8 lg:mb-0  ">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            KUAT BERSAMA ENABLED.
          </h1>
          <p className="text-gray-700 text-sm sm:text-base text-justify p-4 ">
            Enabled. was established in November 2021, just four months after the passing of Amadea, known as "The Tracheostomy Princess," as a tribute to her legacy. The organization serves as a platform to support bereaved parents and families of children with special needs.
          </p>
        </div>
        <div className="w-full sm:w-[300px] md:w-[360px] lg:w-[600px]  pb-10 lg:pb-0 xl:-mb-4 ">
          <img src="/Girly.png" alt="" className="w-full h-auto max-h-[300px] lg:max-h-[800px] object-contain" />
        </div>
      </div>
     

      {/* Featured Products */}
      <section className="py-8 px-4 sm:px-6 md:px-10 lg:px-20">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
          <h2 className="text-xl sm:text-2xl font-bold">Available Products</h2>
          <Link
            to="/products"
            className="bg-[#f0312f] text-white px-6 py-2 rounded hover:bg-red-700 text-center w-fit"
          >
            View All
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div key={product._id} className="flex flex-col gap-3">
              <ProductCard {...product} />
              <AddToCartButton
                userId={userId}
                productId={product._id}
                triggerReload={() => setRefresh((prev) => !prev)}
                showGoToCart={false}
                showCounter={false}
                widthClass="w-full"
              />
            </div>
          ))}
        </div>
      </section>

      {/* About Us */}
          <section className='bg-[#fafafa]'>
            <h2 className="text-xl sm:text-2xl font-bold mx-15 mt-15 w-fit  sm:place-self-center md:place-self-start">About Us</h2>
      <div className="flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-20 py-10 ">
      

        <div className="md:w-1/2 text-justify">
         
          <p className="text-gray-700 text-sm sm:text-base">
            Enabled. was established in November 2021, just four months after the passing of Amadea, known as "The Tracheostomy Princess," as a tribute to her legacy. The organization serves as a platform to support bereaved parents and families of children with special needs. Its full name, Yayasan Kuat Bersama Enabled., carries a profound significance. "KUAT" is an acronym for Kolaborasi Untuk Anak Trakeostomi, which translates to "Collaboration for Tracheostomy Children" in Indonesian. This name encapsulates Enabled.'s mission: fostering teamwork among individuals from diverse backgrounds and disciplines who are dedicated to improving the lives of special needs children, particularly pediatric tracheostomy patients.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <img src="/smilingboy.jpg" alt="About Us" className="w-full max-w-[350px] rounded shadow" />
        </div>
      </div>
      </section>

      <Footer />
    </div>
  );
};

export default Hero;
