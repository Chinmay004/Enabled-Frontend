

// import { useEffect, useState } from "react";
// import { auth } from "../../lib/firebase";
// import AddToCartButton from "../AddToCartButton";
// import ProductCard from "../Product/ProductCard";
// import Navbar from "../Layout/Navbar";
// import Footer from "../Layout/Footer";
// import { getProducts } from "../../api"; // example

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [refresh, setRefresh] = useState(false);
//   const [userId, setUserId] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const data = await getProducts();
//         setProducts(data);
//       } catch (err) {
//         setError("Failed to load products",err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, [refresh]);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div>
//       <Navbar />
//       <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-20">
//         {products.map((product) => (
//           <div key={product._id} className="flex-col  flex gap-3">
//             <ProductCard {...product} />
//             <div className="">
//             <AddToCartButton
//               userId={userId}
//               productId={product._id}
//               triggerReload={() => setRefresh((prev) => !prev)}
//               showGoToCart={false}
//               showCounter={false}
//               widthClass="w-full"
//             />
//              </div>
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default ProductsPage;


//version 2 works greate dropping for skeletons in version 3
// import React, { lazy, Suspense, useEffect, useState, useCallback } from "react";
// import { auth } from "../../lib/firebase";
// import { getProducts } from "../../api";

// // Lazy loaded components
// const Navbar = lazy(() => import("../Layout/Navbar"));
// const Footer = lazy(() => import("../Layout/Footer"));
// const ProductCard = lazy(() => import("../Product/ProductCard"));
// const AddToCartButton = lazy(() => import("../AddToCartButton"));

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [refresh, setRefresh] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [isHydrated, setIsHydrated] = useState(false);

//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (err) {
//       setError("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setIsHydrated(true);
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUserId(user?.uid || null);
//     });
//     fetchProducts();
//     return () => unsubscribe();
//   }, [refresh]);

//   const triggerReload = useCallback(() => setRefresh((prev) => !prev), []);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <Suspense fallback={<div className="text-center mt-10">Loading components...</div>}>
//       <Navbar />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-20">
//         {products.map((product) => (
//           <div key={product._id} className="flex-col flex gap-3">
//             <ProductCard {...product} />
//             {isHydrated && (
//               <AddToCartButton
//                 userId={userId}
//                 productId={product._id}
//                 triggerReload={triggerReload}
//                 showGoToCart={false}
//                 showCounter={false}
//                 widthClass="w-full"
//               />
//             )}
//           </div>
//         ))}
//       </div>
//       <Footer />
//     </Suspense>
//   );
// };

// export default ProductsPage;

//version 2 ends

//version 3  works great skeleton also works, ending it cause of no reloading feature in version 4

// import React, { lazy, Suspense, useEffect, useState, useCallback } from "react";
// import { auth } from "../../lib/firebase";
// import { getProducts } from "../../api";

// // Lazy-loaded components
// const Navbar = lazy(() => import("../Layout/Navbar"));
// const Footer = lazy(() => import("../Layout/Footer"));
// const ProductCard = lazy(() => import("../Product/ProductCard"));
// const AddToCartButton = lazy(() => import("../AddToCartButton"));

// const SkeletonCard = () => (
//   <div className="animate-pulse flex flex-col gap-3 p-4  rounded-xl shadow-sm">
//     <div className="bg-gray-300 h-40 w-full rounded-md" />
//     <div className="bg-gray-300 h-4 w-3/4 rounded" />
//     <div className="bg-gray-300 h-4 w-1/2 rounded" />
//     <div className="bg-gray-300 h-10 w-full rounded-md mt-2" />
//   </div>
// );

// const ProductsPage = () => {
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [refresh, setRefresh] = useState(false);
//   const [userId, setUserId] = useState(null);
//   const [isHydrated, setIsHydrated] = useState(false);

//   const fetchProducts = async () => {
//     try {
//       const data = await getProducts();
//       setProducts(data);
//     } catch (err) {
//       setError("Failed to load products");
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     setIsHydrated(true);
//     const unsubscribe = auth.onAuthStateChanged((user) => {
//       setUserId(user?.uid || null);
//     });
//     fetchProducts();
//     return () => unsubscribe();
//   }, [refresh]);

//   const triggerReload = useCallback(() => setRefresh((prev) => !prev), []);

//   return (
//     <Suspense fallback={<div className="text-center mt-10">Loading components...</div>}>
//       <Navbar />
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-20">
//         {loading
//           ? Array.from({ length: 8 }).map((_, index) => (
//               <SkeletonCard key={index} />
//             ))
//           : error
//           ? <div className="text-red-500">{error}</div>
//           : products.map((product) => (
//               <div key={product._id} className="flex-col flex gap-3">
//                 <ProductCard {...product} />
//                 {isHydrated && (
//                   <AddToCartButton
//                     userId={userId}
//                     productId={product._id}
//                     triggerReload={triggerReload}
//                     showGoToCart={false}
//                     showCounter={false}
//                     widthClass="w-full"
//                   />
//                 )}
//               </div>
//             ))}
//       </div>
//       <Footer />
//     </Suspense>
//   );
// };

// export default ProductsPage;

//version 3 ends and version 4 starts

import React, { lazy, Suspense, useEffect, useState } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { auth } from "../../lib/firebase";
import { getProducts } from "../../api";

// Lazy-loaded components
const Navbar = lazy(() => import("../Layout/Navbar"));
const Footer = lazy(() => import("../Layout/Footer"));
const ProductCard = lazy(() => import("../Product/ProductCard"));
const AddToCartButton = lazy(() => import("../AddToCartButton"));

// Skeleton Card Component
const SkeletonCard = () => (
  <div className="animate-pulse flex flex-col gap-3 p-4 rounded-xl shadow-sm">
    <div className="bg-gray-300 h-40 w-full rounded-md" />
    <div className="bg-gray-300 h-4 w-3/4 rounded" />
    <div className="bg-gray-300 h-4 w-1/2 rounded" />
    <div className="bg-gray-300 h-10 w-full rounded-md mt-2" />
  </div>
);

const ProductsPage = () => {
  const [userId, setUserId] = useState(null);
  const [isHydrated, setIsHydrated] = useState(false);
  const queryClient = useQueryClient();

  // Fetch products with caching
  const {
    data: products = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  // Get user from Firebase
  useEffect(() => {
    setIsHydrated(true);
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUserId(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  const triggerReload = () => {
    queryClient.invalidateQueries(["products"]);
  };

  return (
    <Suspense fallback={<div className="text-center mt-10">Loading components...</div>}>
      <Navbar />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-20">
        {isLoading
          ? Array.from({ length: 8 }).map((_, index) => <SkeletonCard key={index} />)
          : isError
            ? <div className="text-red-500 text-center mt-10">{error?.message || "Failed to load products"}</div>
            : products.map((product) => (
              <div key={product._id} className="flex-col flex gap-3">
                <ProductCard {...product} countInStock={product.countInStock} />
                {isHydrated && (
                  <AddToCartButton
                    userId={userId}
                    productId={product._id}
                    triggerReload={triggerReload}
                    showGoToCart={false}
                    showCounter={false}
                    widthClass="w-full"
                    countInStock={product.countInStock}
                  />
                )}
              </div>
            ))}
      </div>
      <Footer />
    </Suspense>
  );
};

export default ProductsPage;
