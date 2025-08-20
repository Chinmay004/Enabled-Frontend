

import React, { useEffect, useState } from 'react';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import ProductCard from '../Product/ProductCard';
import { getProducts } from '../../api';
import AddToCartButton from '../AddToCartButton';
import { auth } from '../../lib/firebase';
import { Link } from 'react-router-dom';
import SplashScreen from '../SplashScreen';
import { motion } from 'framer-motion';

const Hero = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [showSplash, setShowSplash] = useState(true); // add this


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

  if (showSplash) {
    return <SplashScreen onComplete={() => setShowSplash(false)} />;
  }

  return (
    <div className="flex flex-col min-h-screen font-inter">
      <Navbar />
      {/* <button
        onClick={async () => {
          if (auth.currentUser) {
            const token = await auth.currentUser.getIdToken();
            console.log("Firebase ID Token:", token);
            alert("Token logged to console");
          } else {
            alert("No user is currently signed in.");
          }
        }}
        className="w-full bg-gray-600 text-white p-2 rounded hover:bg-gray-800 mt-4"
      >
        🔐 Log ID Token (for Postman)
      </button> */}


      {/* Hero Section */}
      <motion.div
        className="flex flex-col-reverse lg:flex-row items-center justify-between bg-white px-4 sm:px-6 md:px-10 lg:px-20 lg:min-h-[calc(100vh-235px)] pt-10"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: 'spring', stiffness: 70, damping: 16 }}
      >
        {/* Left Side - Cartoon Child Illustration */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center lg:justify-start mb-8 lg:mb-0"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="w-full sm:w-[300px] md:w-[360px] lg:w-[600px] pb-10 lg:pb-0 xl:-mb-4">
            <img src="/Girly.png" alt="" className="w-full h-auto max-h-[300px] lg:max-h-[800px] object-contain" />
          </div>
        </motion.div>

        {/* Right Side - Enabled. Branding and Description */}
        <motion.div
          className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Small Red Square with "Enabled."
          <div className="flex justify-center lg:justify-end mb-6">
            <div className="bg-red-600 text-white px-3 py-1 rounded text-sm font-semibold">
              Enabled.
            </div>
          </div> */}

          {/* Main Brand Name */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-red-600">
            Enabled.
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl text-gray-800 mb-4 leading-relaxed font-bold">
            Indonesia-based community support platform for special needs children's parents and bereaved parents
          </p>

          {/* Since Date */}
          <p className="text-base text-gray-600">
            Since November 2021
          </p>
        </motion.div>
      </motion.div>



      {/* Featured Products */}
      <motion.section
        className="py-8 px-4 sm:px-6 md:px-10 lg:px-20"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xl sm:text-2xl font-bold">Available Products</h2>
          <Link
            to="/products"
            className="bg-[#f0312f] text-white px-6 py-2 rounded hover:bg-red-700 text-center w-fit"
          >
            View All
          </Link>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product._id}
              className="flex flex-col gap-3"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              viewport={{ once: true }}
            >
              <ProductCard {...product} />
              <AddToCartButton
                userId={userId}
                productId={product._id}
                triggerReload={() => setRefresh((prev) => !prev)}
                showGoToCart={false}
                showCounter={false}
                widthClass="w-full"
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* About Us */}
      <motion.section
        className='bg-[#fafafa]'
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.h2
          className="text-xl sm:text-2xl font-bold mx-20 mt-15 w-fit sm:place-self-center md:place-self-start"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          About Us
        </motion.h2>
        <motion.div
          className="flex flex-col-reverse md:flex-row items-center gap-6 lg:gap-10 px-4 sm:px-6 md:px-10 lg:px-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="md:w-1/2 text-justify"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm sm:text-base mb-10">
              Enabled. was founded in November 2021, four months after our angel, Amadea Jasmine Soetama, moved to a better place. Since then, Enabled. has worked with people across disciplines—from doctors to border professionals—to ensure Indonesian pediatric tracheostomy patients receive the care they deserve. Thus, we named our foundation Yayasan Kuat Bersama Enabled.—KUAT as both a symbol of the strength of Indonesian pediatric tracheostomy children and an abbreviation of Kolaborasi Untuk Anak Trakeostomi. Through heartfelt collaboration, we help these children live life to the fullest. We focus donations on purchasing tracheostomy tubes and redistributing surplus medical supplies from families in privileged settings or those grieving a loss. Beyond this, we run various initiatives to support Indonesia's broader special needs community. We believe these children fight with all they have to survive—now it's our turn to give our all to help them thrive.
            </p>
          </motion.div>
          <motion.div
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <img src="/RealGirl.jpg" alt="About Us" className="w-full max-w-[350px] rounded shadow  mb-15" />
          </motion.div>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default Hero;
