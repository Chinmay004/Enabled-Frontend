import { Link } from "react-router-dom";

const ProductCard = ({ _id, image, name, price }) => {

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // you can change this to 2 if needed
  }).format(price);

  return (
    <Link to={`/productDetails/${_id}`} className="flex flex-col items-center gap-2  font-inter   ">
      <div className=" h-68 flex  justify-start sm:justify-center items-center w-full sm:w-full bg-[#f5f5f5] rounded-lg "><img src={image} alt={name} className=" h-48  object-contain  w-full  " /></div>
      <div className="flex w-full justify-between ">
      <h2 className="font-semibold text-sm md:text-md lg:text-lg ">{name}</h2>
      <p className="text-gray-600 ">{formattedPrice}</p>
      </div>
     
    </Link>
  );
};

  
  export default ProductCard;



//   import { Link } from "react-router-dom";
// import { auth } from "../../lib/firebase";
// import AddToCartButton from "../../AddToCartButton";

// const ProductCard = ({ _id, image, name, price,userId }) => {

//   const formattedPrice = new Intl.NumberFormat("id-ID", {
//     style: "currency",
//     currency: "IDR",
//     minimumFractionDigits: 0, // you can change this to 2 if needed
//   }).format(price);

//   return (
//     <Link to={`/productDetails/${_id}`} className="flex sm:flex-col items-start sm:items-center  gap-2  font-inter border   ">
//       <div className=" h-68 flex  justify-start sm:justify-center items-center w-2/5 sm:w-full bg-  [#f5f5f5] rounded-lg ">
//         <img src={image} alt={name} className=" h-48  object-contain  w-full  " />
//       </div>
//       <div className="flex flex-col sm:flex-row  w-3/5 sm:justify-between justify-around border h-full ">
//           <h2 className="font-semibold text-sm md:text-md lg:text-lg  ">{name}</h2>
//           <p className="text-gray-600 ">{formattedPrice}</p>
//           <div className=" block sm:hidden">
//                 <AddToCartButton
//                   userId={userId}
//                   productId={_id}
//                   triggerReload={() => setRefresh((prev) => !prev)}
//                   showGoToCart={false}
//                   showCounter={false}
//                   widthClass="w-full"
//                 />
//           </div>
//       </div>
     
//     </Link>
//   );
// };

  
//   export default ProductCard;