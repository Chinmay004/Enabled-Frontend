import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { auth } from '../../lib/firebase';
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";

const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${className}`} />
);

const fetchOrders = async () => {
  const user = auth.currentUser;
  if (!user) throw new Error("User not logged in");

  const uid = user.uid;
  const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders/${uid}`);
  return res.data;
};

const OrderPage = () => {
  const {
    data: orders = [],
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ['orders'],
    queryFn: fetchOrders,
    staleTime: 1000 * 60 * 5, // 5 minutes
    cacheTime: 1000 * 60 * 10, // 10 minutes
  });

  const renderSkeletons = () => (
    <div className="space-y-6">
      {[...Array(2)].map((_, i) => (
        <div key={i} className="rounded-lg p-4 shadow-sm bg-white space-y-4">
          <SkeletonBox className="h-4 w-2/3" />
          <SkeletonBox className="h-4 w-1/2" />
          <SkeletonBox className="h-4 w-1/3" />
          {[...Array(2)].map((_, j) => (
            <div key={j} className="flex items-center space-x-4">
              <SkeletonBox className="w-16 h-16" />
              <div className="space-y-1 w-full">
                <SkeletonBox className="h-4 w-1/2" />
                <SkeletonBox className="h-4 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-4 min-h-[calc(100vh-300px)]">
        <h2 className="text-3xl font-bold mb-6">Your Orders</h2>

        {isLoading ? (
          renderSkeletons()
        ) : isError ? (
          <p>Failed to load orders. Please try again.</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              className="border rounded-lg p-4 mb-6 shadow-sm bg-white"
            >
              <div className="mb-4">
                <p><strong>Order ID:</strong> {order._id}</p>
                <p><strong>Placed on:</strong> {new Date(order.orderDate).toLocaleDateString()}</p>
                <p><strong>Total:</strong> Rp {order.totalPrice.toLocaleString()}</p>
              </div>

              <div className="mb-4">
                <h4 className="font-semibold">Shipping Address</h4>
                <p>{order.address.fullName}</p>
                <p>{order.address.street}, {order.address.city}</p>
                <p>{order.address.state}, {order.address.postalCode}</p>
                <p>{order.address.country}</p>
                <p>{order.address.phone}</p>
              </div>

              <div>
                <h4 className="font-semibold">Products</h4>
                <ul className="divide-y divide-gray-200">
                  {order.products.map((product, index) => (
                    <li key={index} className="py-2 flex items-center space-x-4">
                      <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
                      <div>
                        <p className="font-medium">{product.name}</p>
                        <p>Rp {product.priceAtPurchase.toLocaleString()} × {product.quantity}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default OrderPage;
