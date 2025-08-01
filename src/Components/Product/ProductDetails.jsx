// import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Navbar from "../Layout/Navbar";
// import Footer from "../Layout/Footer";
// import { getProductById, getRelatedProducts } from "../../api";
// import { Link } from "react-router-dom";
// import AddToCartButton from "../AddToCartButton";
// import { getAuth, onAuthStateChanged } from "firebase/auth";

// const ProductDetails = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [relatedItems, setRelatedItems] = useState([]);
//   const [userId, setUserId] = useState(null);
//   const [refresh, setRefresh] = useState(false);

//   useEffect(() => {
//     const auth = getAuth();
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       if (user) {
//         setUserId(user.uid);
//       } else {
//         console.error("User not logged in");
//       }
//     });

//     return () => unsubscribe(); // clean up listener on unmount
//   }, []);

//   const fetchProduct = async () => {
//     try {
//       const data = await getProductById(id);
//       setProduct(data);
//       const related = await getRelatedProducts(data.category, data._id);
//       setRelatedItems(related);
//     } catch (err) {
//       setError("Could not fetch product details.",err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProduct();
//   }, [id, refresh]);

//   const formatRupiah = (value) =>
//     new Intl.NumberFormat("id-ID", {
//       style: "currency",
//       currency: "IDR",
//       minimumFractionDigits: 0,
//     }).format(value);

//   if (loading) return <div className="text-center mt-10">Loading...</div>;
//   if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

//   return (
//     <div className="min-h-screen flex flex-col ">
//       <Navbar />
//       <div className="flex flex-1 items-center justify-center py-8 px-4 sm:px-8 lg:px-16">
//         <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center gap-10 sm:gap-16 p-8 bg-white rounded-lg ">
//           {/* Product Image */}
//           <div className="flex justify-center items-center sm:w-1/2 w-full bg-[#f5f5f5] rounded-lg">
//             <img src={product.image} alt={product.name} className="h-80 sm:h-auto object-contain p-4 rounded-lg" />
//           </div>

//           {/* Product Information */}
//           <div className="flex flex-col sm:w-1/2 gap-4 sm:text-left text-center">
//             <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
//             <p className="text-gray-700">{product.description || "No description provided."}</p>
//             <p className="text-xl text-green-600 font-semibold">{formatRupiah(product.price)}</p>
//             <hr className="mt-5 text-[#7f7f7f]" />
//             <div className="w-full mt-4">
//               {userId && (
//                 <AddToCartButton
//                   userId={userId}
//                   productId={product._id}
//                   triggerReload={() => setRefresh((prev) => !prev)}
//                   widthClass="w-full sm:w-1/2"
//                 />
//               )}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Items */}
//       <div className="mx-4 sm:mx-10 flex gap-3 px-6">
//         <div className="w-[30px] h-10 rounded-sm bg-[#db4444] place-self-center flex"></div>
//         <div className="font-bold font-inter text-[#db4444] justify-center items-center flex">Related Items</div>
//       </div>

//       {relatedItems.length === 0 ? (
//         <p className="text-center text-gray-500">No related items found.</p>
//       ) : (
//         <div className="p-6 max-w-8xl mt-10 mb-30 font-inter ">
//           <div className="overflow-x-auto   mx-auto">
//             <div className="flex gap-6 sm:gap-10 pb-4 overflow-x-auto scrollbar-hidden">
//               {relatedItems.map((item) => (
//                 <Link
//                   key={item._id}
//                   to={`/productDetails/${item._id}`}
//                   className="min-w-[260px] sm:min-w-[300px] flex-shrink-0 flex flex-col items-center gap-2 font-inter rounded bg-white "
//                 >
//                   <div className="h-48 sm:h-64 flex justify-center items-center w-full bg-[#f5f5f5] rounded-lg">
//                     <img
//                       src={item.image}
//                       alt={item.name}
//                       className="object-contain w-full h-full p-4 rounded-lg"
//                     />
//                   </div>
//                   <div className="flex w-full justify-between mt-2 px-2 sm:px-4">
//                     <h2 className="font-semibold text-sm sm:text-base truncate">{item.name}</h2>
//                     <p className="text-gray-600 text-sm sm:text-base">{formatRupiah(item.price)}</p>
//                   </div>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>
//       )}

//       <Footer />
//     </div>
//   );
// };

// export default ProductDetails;

import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getProductById, getRelatedProducts } from "../../api";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import AddToCartButton from "../AddToCartButton";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// Reusable skeleton block
const Skeleton = ({ className }) => (
  <div className={`bg-gray-200 animate-pulse rounded ${className}`}></div>
);

const ProductDetails = () => {
  const { id } = useParams();
  const [userId, setUserId] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const queryClient = useQueryClient();

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUserId(user?.uid || null);
    });
    return () => unsubscribe();
  }, []);

  const {
    data: product,
    isLoading: productLoading,
    isError: productError,
    error: productErrMsg,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
    refetchOnWindowFocus: false,
  });

  const {
    data: relatedItems = [],
    isLoading: relatedLoading,
  } = useQuery({
    queryKey: ["related", product?.category, id],
    queryFn: () => getRelatedProducts(product.category, product._id),
    enabled: !!product,
    staleTime: 1000 * 60 * 5,
  });

  const formatRupiah = (value) =>
    new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(value);

  const triggerReload = () => {
    queryClient.invalidateQueries({ queryKey: ["product", id] });
    queryClient.invalidateQueries({ queryKey: ["related", product?.category, id] });
    setRefresh((prev) => !prev);
  };

  if (productLoading) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex flex-1 items-center justify-center py-8 px-4 sm:px-8 lg:px-16">
          <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center gap-10 sm:gap-16 p-8 bg-white rounded-lg">
            <Skeleton className="sm:w-1/2 w-full h-80" />
            <div className="flex flex-col sm:w-1/2 w-full gap-4">
              <Skeleton className="h-8 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-6 w-1/3 mt-4" />
              <Skeleton className="h-10 w-full sm:w-1/2 mt-6" />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (productError)
    return (
      <div className="text-center mt-10 text-red-500">
        {productErrMsg?.message || "Failed to load product"}
      </div>
    );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-1 items-center justify-center py-8 px-4 sm:px-8 lg:px-16">
        <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center gap-10 sm:gap-16 p-8 bg-white rounded-lg">
          <div className="flex justify-center items-center sm:w-1/2 w-full bg-[#f5f5f5] rounded-lg">
            <img src={product.image} alt={product.name} className="h-80 sm:h-auto object-contain p-4 rounded-lg" />
          </div>

          <div className="flex flex-col sm:w-1/2 gap-4 sm:text-left text-center">
            <h1 className="text-2xl sm:text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-700">{product.description || "No description provided."}</p>
            <p className="text-xl text-green-600 font-semibold">{formatRupiah(product.price)}</p>
            {product.countInStock === 0 && (
              <div className="text-red-600 font-bold mt-2">Out of Stock</div>
            )}
            <hr className="mt-5 text-[#7f7f7f]" />
            <div className="w-full mt-4">
              {userId && product.countInStock !== 0 && (
                <AddToCartButton
                  userId={userId}
                  productId={product._id}
                  triggerReload={triggerReload}
                  widthClass="w-full sm:w-1/2"
                />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-4 sm:mx-10 flex gap-3 px-6">
        <div className="w-[30px] h-10 rounded-sm bg-[#db4444] place-self-center flex"></div>
        <div className="font-bold font-inter text-[#db4444] justify-center items-center flex">Related Items</div>
      </div>

      {relatedLoading ? (
        <div className="p-6 max-w-8xl mt-10 mb-30 font-inter">
          <div className="overflow-x-auto mx-auto">
            <div className="flex gap-6 sm:gap-10 pb-4 overflow-x-auto scrollbar-hidden">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="min-w-[260px] sm:min-w-[300px] flex-shrink-0 flex flex-col items-center gap-2 font-inter rounded bg-white p-4">
                  <Skeleton className="w-full h-48 sm:h-64" />
                  <Skeleton className="w-3/4 h-4 mt-2" />
                  <Skeleton className="w-1/2 h-4" />
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : relatedItems.length === 0 ? (
        <p className="text-center text-gray-500">No related items found.</p>
      ) : (
        <div className="p-6 max-w-8xl mt-10 mb-30 font-inter">
          <div className="overflow-x-auto mx-auto">
            <div className="flex gap-6 sm:gap-10 pb-4 overflow-x-auto scrollbar-hidden">
              {relatedItems.map((item) => (
                <Link
                  key={item._id}
                  to={`/productDetails/${item._id}`}
                  className="min-w-[260px] sm:min-w-[300px] flex-shrink-0 flex flex-col items-center gap-2 font-inter rounded bg-white"
                >
                  <div className="h-48 sm:h-64 flex justify-center items-center w-full bg-[#f5f5f5] rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="object-contain w-full h-full p-4 rounded-lg"
                    />
                  </div>
                  <div className="flex w-full justify-between mt-2 px-2 sm:px-4">
                    <h2 className="font-semibold text-sm sm:text-base truncate">{item.name}</h2>
                    <p className="text-gray-600 text-sm sm:text-base">{formatRupiah(item.price)}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default ProductDetails;
