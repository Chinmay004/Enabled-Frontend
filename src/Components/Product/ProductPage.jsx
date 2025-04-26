

import { useEffect, useState } from "react";
import { auth } from "../../lib/firebase";
import AddToCartButton from "../../AddToCartButton";
import ProductCard from "../Product/ProductCard";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import { getProducts } from "../../api"; // example

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const user = auth.currentUser;
    if (user) {
      setUserId(user.uid);
      console.log("User ID (UID):", user.uid);
    } else {
      console.log("No user is logged in.");
    }
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        setError("Failed to load products",err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [refresh]);

  if (loading) return <div className="text-center mt-10">Loading...</div>;
  if (error) return <div className="text-center mt-10 text-red-500">{error}</div>;

  return (
    <div>
      <Navbar />
      <div className="grid  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 m-20">
        {products.map((product) => (
          <div key={product._id} className="flex-col  flex gap-3">
            <ProductCard {...product} />
            <div className="">
            <AddToCartButton
              userId={userId}
              productId={product._id}
              triggerReload={() => setRefresh((prev) => !prev)}
              showGoToCart={false}
              showCounter={false}
              widthClass="w-full"
            />
             </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default ProductsPage;