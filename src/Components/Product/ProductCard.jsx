import { Link } from "react-router-dom";

const ProductCard = ({ _id, image, name, price }) => {

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // you can change this to 2 if needed
  }).format(price);

  return (
   <Link to={`/productDetails/${_id}`} className="flex flex-col items-center gap-2 font-inter">
  <div className="h-68 flex justify-start sm:justify-center items-center w-full bg-[#f5f5f5] rounded-lg">
    <img src={image} loading="lazy"  alt={name} className="h-48 object-contain w-full" />
  </div>
  <div className="flex w-full justify-between items-center">
    <h2 className="font-semibold text-sm md:text-md lg:text-lg truncate w-[80%]" title={name}
>{name}</h2>
    <p className="text-gray-600 text-sm">{formattedPrice}</p>
  </div>
</Link>
  );
};

  
  export default ProductCard;
