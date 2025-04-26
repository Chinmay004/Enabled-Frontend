import { useEffect, useState } from "react";
import axios from "axios";
import { auth } from '../../lib/firebase';
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
// import DeleteOrderButton from "./DeleteOrderButton";

const OrderPage = () => {


 
    
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  
  // const handleDelete = (orderId) => {
  //   // Remove the deleted order from the orders array
  //   setOrders((prevOrders) => prevOrders.filter((order) => order._id !== orderId));
  // };


useEffect(() => {
    const fetchOrders = async () => {
      const user = auth.currentUser;
      if (user) {
        const uid = user.uid;
        console.log("User ID (UID):", uid);
  
        try {
          const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders/${uid}`);
          console.log("API Response:", res.data); // Log the response data to check
  
          setOrders(res.data || []);  // Set the entire array, no need to access 'orders'
        } catch (err) {
          console.error("Error fetching orders:", err);
          setOrders([]);
        } finally {
          setLoading(false);
        }
      } else {
        console.log("No user is logged in.");
        setLoading(false);
      }
    };
  
    fetchOrders();
  }, []);
  

  if (loading) return <div className="text-center">Loading orders...</div>;

  return (
    <>
    <Navbar/>
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-3xl font-bold mb-6">Your Orders</h2>

      {orders.length === 0 ? (
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
            {/* <DeleteOrderButton orderId={order._id} onDelete={handleDelete} /> Add delete button */}

          </div>
        ))
      )}
    </div>
    <Footer/>
    </>
  );
};

export default OrderPage;
