// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { auth } from '../lib/firebase';
// import { updateCartQuantity, removeFromCart } from '../api';
// import Navbar from './Layout/Navbar';
// import Footer from './Layout/Footer';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const CartPage = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const navigate = useNavigate();

//   const getFirebaseIdToken = async () => {
//     const user = auth.currentUser;
//     if (user) return await user.getIdToken();
//     else throw new Error("User not authenticated");
//   };

//   const fetchCart = async () => {
//     try {
//       const token = await getFirebaseIdToken();
//       const res = await axios.get('http://localhost:5000/api/cart', {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });
//       setCartItems(res.data.items || []);
//     } catch (err) {
//       console.error("Failed to fetch cart:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleQuantityChange = async (productId, quantity) => {
//     try {
//       const token = await getFirebaseIdToken();
//       await updateCartQuantity(token, productId, quantity);
//       fetchCart();
//     } catch (err) {
//       console.error("Failed to update quantity:", err);
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const token = await getFirebaseIdToken();
//       await removeFromCart(token, productId);
//       fetchCart();
//     } catch (err) {
//       console.error("Failed to remove item:", err);
//     }
//   };

//   useEffect(() => {
//     fetchCart();
//   }, []);

//   const formatCurrency = (value) =>
//     new Intl.NumberFormat('id-ID', {
//       style: 'currency',
//       currency: 'IDR',
//       minimumFractionDigits: 0,
//     }).format(value);

//   const subtotal = cartItems.reduce(
//     (acc, { productId, quantity }) => acc + productId.price * quantity,
//     0
//   );

//   if (loading) return <p className="p-6">Loading your cart...</p>;

//   return (
//     <div>
//       <Navbar />

//       <div className="max-w-7xl mx-auto p-8">
//         <div className="mb-4 text-gray-500 text-sm">
//           <span className="text-gray-400">Home</span> / <span>Cart</span>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//           {/* Table Section */}
//           <div className="lg:col-span-2 overflow-x-auto">

//             <table className="min-w-full border-separate border-spacing-y-7">
//               <thead className="bg-[#f4f4f4] text-left">
//                 <tr className="font-inter">
//                   <th className="p-4 font-medium">Product</th>
//                   <th className="p-4 font-medium">Price</th>
//                   <th className="p-4 font-medium">Quantity</th>
//                   <th className="p-4 font-medium">Subtotal</th>
//                   <th className="p-4 font-medium"></th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {cartItems.map(({ productId, quantity }) => (

//                   <tr
//                     key={productId._id}
//                     className="bg-white shadow rounded-md"
//                     // onClick={() => navigate(`/productDetails/${productId._id}`)}
//                   >         

//                     <td className="p-4 flex   w-full items-center gap-3">  
//                       <Link to ={`/productDetails/${productId._id}`}>
//                       <img
//                         src={productId.image}
//                         alt={productId.name}
//                         className="w-12 h-12 object-cover rounded"
//                       />
//                       <span>{productId.name}</span>
//                       </Link>
//                     </td>
//                     <td className="p-4">{formatCurrency(productId.price)}</td>
//                     <td className="p-4">
//                       <div className="flex items-center gap-2">
//                         {/* <button
//                           onClick={() => handleQuantityChange(productId._id, quantity - 1)}
//                           disabled={quantity <= 1}
//                           className="bg-gray-200 px-2 rounded disabled:opacity-50"
//                         >
//                           -
//                         </button> */}
//                         <span>{quantity}</span>
//                         {/* <button
//                           onClick={() => handleQuantityChange(productId._id, quantity + 1)}
//                           className="bg-gray-200 px-2 rounded"
//                         >
//                           +
//                         </button>*/}
//                       </div> 
//                     </td> 
//                     <td className="p-4">
//                       {formatCurrency(productId.price * quantity)}
//                     </td>
                  
//                     <td className="p-4  ">
//                       <button
//                         onClick={() => handleRemove(productId._id)}
//                         className="text-red-600 text-lg"
//                         title="Remove"
//                       >
//                         ❌Remove
//                       </button>
//                       {/* <button
//                         onClick={() => navigate(`/productDetails/${productId._id}`)}
//                         className="text-blue-600 text-lg "
//                         title="Remove"
//                       >
//                         👁View
//                       </button> */}
                      
//                     </td>
                    
//                   </tr>
                  
//                 ))}
//               </tbody>
//             </table>
//             <button
//               onClick={() => navigate('/shop')}
//               className="mt-6 border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
//             >
//               Return To Shop
//             </button>
//           </div>

//           {/* Cart Summary */}
//           <div className=" rounded-md   flex flex-col   justify-center  ">
//             <div className='border border-gray-400 rounded-md p-10 w-full'>
//             <div className=''>
//               <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
//               <div className="flex justify-between mb-2">
//                 <span>Subtotal:</span>
//                 <span>{formatCurrency(subtotal)}</span>
//               </div>
            
//               <div className="flex justify-between mb-2">
//                 <span>Shipping:</span>
//                 <span className="text-green-500 font-medium">Free</span>
//               </div>
//             </div>
//             <div className='flex flex-col'>
//               <div className="flex justify-between font-bold border-t pt-2">
//                 <span>Total:</span>
//                 <span>{formatCurrency(subtotal)}</span>
//               </div>

//               <Link to="/billing"
//                 className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded text-center"
//                 // onClick={() => alert('Melanjutkan ke checkout...')}
//               >
//                 Proceed to checkout
//               </Link>
//               </div>
//               </div>
            
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default CartPage;

//version 2 works great, B reason is to remove scroll
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { auth } from '../lib/firebase';
import { updateCartQuantity, removeFromCart } from '../api';
import Navbar from './Layout/Navbar';
import Footer from './Layout/Footer';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const getFirebaseIdToken = async () => {
    const user = auth.currentUser;
    if (user) return await user.getIdToken();
    else throw new Error("User not authenticated");
  };

  const fetchCart = async () => {
    try {
      const token = await getFirebaseIdToken();
      const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setCartItems(res.data.items || []);
    } catch (err) {
      console.error("Failed to fetch cart:", err);
    } finally {
      setLoading(false);
    }
  };

  // const handleQuantityChange = async (productId, quantity) => {
  //   try {
  //     const token = await getFirebaseIdToken();
  //     await updateCartQuantity(token, productId, quantity);
  //     fetchCart();
  //   } catch (err) {
  //     console.error("Failed to update quantity:", err);
  //   }
  // };

  const handleRemove = async (productId) => {
    try {
      const token = await getFirebaseIdToken();
      await removeFromCart(token, productId);
      fetchCart();
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  useEffect(() => {
    fetchCart();
  }, []);

  const formatCurrency = (value) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(value);

  const subtotal = cartItems.reduce(
    (acc, { productId, quantity }) => acc + productId.price * quantity,
    0
  );

  if (loading) return <p className="p-6">Loading your cart...</p>;

  return (
    <div>
      <Navbar />

      <div className="max-w-7xl mx-auto p-6 sm:p-8 min-h-[calc(100vh-390px)] ">
        <div className="mb-4 text-gray-500 text-sm">
          <span className="text-gray-400">Home</span> / <span>Cart</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {/* Table Section */}
          <div className="lg:col-span-2 overflow-x-auto  ">
            <table className="min-w-full border-separate border-spacing-y-7  ">
              <thead className="bg-[#f4f4f4] text-left">
                <tr className="font-inter">
                  <th className="p-4 font-medium">Product</th>
                  <th className="p-4 font-medium">Price</th>
                  <th className="p-4 font-medium">Quantity</th>
                  <th className="p-4 font-medium">Subtotal</th>
                  <th className="p-4 font-medium"></th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map(({ productId, quantity }) => (
                  <tr
                    key={productId._id}
                    className="bg-white shadow rounded-md"
                  >
                    <td className="p-4 flex w-full items-center gap-3">
                      <Link to={`/productDetails/${productId._id}`}>
                        <img
                          src={productId.image}
                          alt={productId.name}
                          className="w-12 h-12 object-cover rounded"
                        />
                        <span className="text-sm sm:text-base">{productId.name}</span>
                      </Link>
                    </td>
                    <td className="p-4">{formatCurrency(productId.price)}</td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span>{quantity}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      {formatCurrency(productId.price * quantity)}
                    </td>

                    <td className="p-4">
                      <button
                        onClick={() => handleRemove(productId._id)}
                        className="text-red-600 text-lg"
                        title="Remove"
                      >
                        ❌Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              onClick={() => navigate('/shop')}
              className="mt-6 border border-gray-400 px-6 py-2 rounded hover:bg-gray-100"
            >
              Return To Shop
            </button>
          </div>

          {/* Cart Summary */}
          <div className="rounded-md flex flex-col justify-center">
            <div className="border border-gray-400 rounded-md p-6 sm:p-10 w-full">
              <h3 className="text-lg font-semibold mb-4">Cart Total</h3>
              <div className="flex justify-between mb-2">
                <span>Subtotal:</span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              <div className="flex justify-between mb-2">
                <span>Shipping:</span>
                <span className="text-green-500 font-medium">Free</span>
              </div>

              <div className="flex flex-col">
                <div className="flex justify-between font-bold border-t pt-2">
                  <span>Total:</span>
                  <span>{formatCurrency(subtotal)}</span>
                </div>

                <button
                  onClick={() => {
                    if (cartItems.length === 0) {
                      alert('Your cart is empty. Please add items before proceeding to checkout.');
                    } else {
                      navigate('/billing');
                    }
                  }}
                  className="mt-6 w-full bg-[#db4444] hover:bg-red-600 text-white font-semibold py-2 rounded text-center"
                >
                  Proceed to checkout
                </button>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
