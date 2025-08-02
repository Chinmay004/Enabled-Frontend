import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const ProductCard = ({ _id, image, name, price, countInStock }) => {

  const formattedPrice = new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0, // you can change this to 2 if needed
  }).format(price);

  const isOutOfStock = countInStock === 0;

  return (
    <motion.div
      className="relative w-full"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2, ease: "easeOut" }
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {isOutOfStock && (
        <span className="absolute top-2 left-2 bg-red-600 text-white text-xs px-2 py-1 rounded z-10">Out of Stock</span>
      )}
      <Link to={`/productDetails/${_id}`} className="flex flex-col items-center gap-2 font-inter">
        <motion.div
          className="h-68 flex justify-start sm:justify-center items-center w-full bg-[#f5f5f5] rounded-lg overflow-hidden"
          whileHover={{
            boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
            transition: { duration: 0.2 }
          }}
        >
          <motion.img
            src={image}
            loading="lazy"
            alt={name}
            className="h-48 object-contain w-full"
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.3 }
            }}
          />
        </motion.div>
        <div className="flex w-full justify-between items-center">
          <h2 className="font-semibold text-sm md:text-md lg:text-lg truncate w-[80%]" title={name}
          >{name}</h2>
          <p className="text-gray-600 text-sm">{formattedPrice}</p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
