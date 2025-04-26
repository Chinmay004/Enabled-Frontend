//version 1 works great , evrything works

// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { getAuth } from "firebase/auth";
// import { addToCart, checkProductInCart, removeFromCart } from "./api";

// const AddToCartButton = ({ productId, triggerReload, showGoToCart = true  ,showCounter=true ,widthClass = "w-full" }) => {
//   const [quantity, setQuantity] = useState(1);
//   const [added, setAdded] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const checkCartStatus = async () => {
//       const user = getAuth().currentUser;
//       if (!user) return;

//       try {
//         const idToken = await user.getIdToken();
//         const exists = await checkProductInCart(idToken, productId);
//         setAdded(exists);
//       } catch (err) {
//         console.error("Error checking product in cart:", err);
//       }
//     };

//     checkCartStatus();
//   }, [productId]);

//   const handleAddToCart = async () => {
//     try {
//       const user = getAuth().currentUser;
//       if (!user) return alert("Please login first");

//       const idToken = await user.getIdToken();
//       await addToCart(idToken, productId, quantity);
//       setAdded(true);
//     } catch (err) {
//       console.error("Error adding to cart:", err);
//     }
//   };

//   const handleRemove = async (productId) => {
//     try {
//       const user = getAuth().currentUser;
//       if (!user) return alert("Please login first");

//       const idToken = await user.getIdToken();
//       await removeFromCart(idToken, productId);

//       if (triggerReload) triggerReload();
//       setAdded(false);
//     } catch (err) {
//       console.error("Failed to remove item:", err);
//     }
//   };

//   const increment = () => setQuantity((prev) => prev + 1);
//   const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

//   const handleGoToCart = () => navigate("/cart");

//   return (
//     <div className="flex gap-10 w-full font-inter">
//       {!added ? (
//         <>
//           <button
//             onClick={handleAddToCart}
//             className="border border-[#db4444] text-[#db4444] py-1 px-3 rounded hover:bg-[#db4444] hover:text-white transition w-full"
//           >
//             Add to Cart
//           </button>

//           {showCounter && (
//           <div className="flex items-center gap-2 justify-center border rounded border-[#e5e7eb]">
//             <button onClick={decrement} className="px-2 py-1 bg-gray-200 text-lg">-</button>
//             <span className="font-semibold">{quantity}</span>
//             <button onClick={increment} className="px-2 py-1 bg-gray-200 text-lg">+</button>
//           </div>
//            )}
//         </>
//       ) : (
//         <div className="flex flex-col w-full gap-7">
//           {showGoToCart && (
//             <button
//               onClick={handleGoToCart}
//               className="bg-green-600 border border-green-600 hover:bg-green-700 text-white py-1 px-3 rounded transition w-1/2"
//             >
//               Go to Cart
//             </button>
//           )}
//           <button
//             onClick={() => handleRemove(productId)}
//             className={`px-2 py-1   ${widthClass} border border-[#f0312f] hover:bg-[#F0312f] hover:text-white text-[#f0312f] rounded`}
//           >
//             Remove from Cart
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default AddToCartButton;
//version 1 ends

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { addToCart, checkProductInCart, removeFromCart, getUserProductPurchaseCount } from "./api";

const AddToCartButton = ({ productId, triggerReload, showGoToCart = true, showCounter = true, widthClass = "w-full" }) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [limitExceeded, setLimitExceeded] = useState(false);
  const [limit, setLimit] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkCartStatus = async () => {
      const user = getAuth().currentUser;
      if (!user) return;

      try {
        const idToken = await user.getIdToken();
        const exists = await checkProductInCart(idToken, productId);
        setAdded(exists);

        const result = await getUserProductPurchaseCount(idToken, productId);
        setLimit(result?.limit);

        const totalPurchased = result?.totalPurchased || 0;
        setLimitExceeded(totalPurchased >= result?.limit);

      } catch (err) {
        console.error("Error checking product in cart or limit:", err);
      }
    };

    checkCartStatus();
  }, [productId]);

  const handleAddToCart = async () => {
    try {
      const user = getAuth().currentUser;
      if (!user) return alert("Please login first");

      const idToken = await user.getIdToken();
      const userId = user.uid;
      const result = await getUserProductPurchaseCount(idToken, productId,userId);

      const totalPurchased = result?.totalPurchased || 0;
      const maxLimit = result?.limit;

      if (totalPurchased + quantity > maxLimit) {
        alert(`You can only purchase ${maxLimit} units of this product in a year. You've already bought ${totalPurchased}.`);
        return;
      }

      await addToCart(idToken, productId, quantity);
      setAdded(true);
    } catch (err) {
      console.error("Error adding to cart:", err);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const user = getAuth().currentUser;
      if (!user) return alert("Please login first");

      const idToken = await user.getIdToken();
      await removeFromCart(idToken, productId);

      if (triggerReload) triggerReload();
      setAdded(false);
    } catch (err) {
      console.error("Failed to remove item:", err);
    }
  };

  const increment = () => setQuantity((prev) => prev + 1);
  const decrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const handleGoToCart = () => navigate("/cart");

  return (
    <div className="flex gap-10 w-full font-inter">
      {!added ? (
        <>
          <button
            onClick={handleAddToCart}
            className={`border ${limitExceeded ? 'border-gray-400 text-gray-400 cursor-not-allowed' : 'border-[#db4444] text-[#db4444] hover:bg-[#db4444] hover:text-white'} py-1 px-3 rounded transition w-full`}
            disabled={limitExceeded}
          >
            {limitExceeded ? `Limit Reached (${limit})` : "Add to Cart"}
          </button>

          {showCounter && (
            <div className="flex items-center gap-2 justify-center border rounded border-[#e5e7eb]">
              <button onClick={decrement} className="px-2 py-1 bg-gray-200 text-lg">-</button>
              <span className="font-semibold">{quantity}</span>
              <button onClick={increment} className="px-2 py-1 bg-gray-200 text-lg">+</button>
            </div>
          )}
        </>
      ) : (
        <div className="flex flex-col w-full gap-7 ">
          {showGoToCart && (
            <button
              onClick={handleGoToCart}
              className="bg-green-600 border border-green-600 hover:bg-green-700 text-white py-1 px-3 rounded transitions sm:w-1/2 w-full "
            >
              Go to Cart
            </button>
          )}
          <button
            onClick={() => handleRemove(productId)}
            className={`px-2 py-1 ${widthClass} border border-[#f0312f] hover:bg-[#F0312f] hover:text-white text-[#f0312f] rounded text-sm sm:w-2/3 md:w-full sm:h-9 md:text-md`}
          >
            Remove from Cart
          </button>
        </div>
      )}
    </div>
  );
};

export default AddToCartButton;
