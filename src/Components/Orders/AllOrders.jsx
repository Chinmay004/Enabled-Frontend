


import { useQuery } from '@tanstack/react-query';
import  { useState } from 'react';
import axios from 'axios';
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
import AddProduct from "../Product/AddProduct";
import DeleteOrderButton from './DeleteOrderButton';


const SkeletonBox = ({ className }) => (
  <div className={`bg-gray-200 rounded animate-pulse ${className}`} />
);


// Fetch all orders
const fetchAllOrders = async () => {
  try {
    const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/orders/all`);
    return res.data.orders;
  } catch (err) {
    console.error("Error fetching all orders:", err);
    return [];
  }
};

const AllOrders = () => {
  const [selectedOrder, setSelectedOrder] = useState(null);

  const {
    data: orders = [],
    isLoading,
    isError,
  } = useQuery({
    queryKey: ['allOrders'],
    queryFn: fetchAllOrders,
    staleTime: 1000 * 60 * 5,
    cacheTime: 1000 * 60 * 10,
  });

  const renderSkeletons = () => (
    <div className="space-y-6">
      {[...Array(3)].map((_, i) => (
        <div key={i} className="rounded-lg p-4 shadow-sm bg-white space-y-4">
          <SkeletonBox className="h-4 w-2/3" />
          <SkeletonBox className="h-4 w-1/2" />
          <SkeletonBox className="h-4 w-1/3" />
          <SkeletonBox className="h-16 w-full" />
        </div>
      ))}
    </div>
  );

  const [showAddProductModal, setShowAddProductModal] = useState(false);


  return (
    
    <>
      <Navbar />

      <div className="max-w-5xl mx-auto p-6">
      {/* <div className='flex justify-between mb-10'> */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-10">
        <h2 className="text-3xl font-bold mb-6">Your Orders</h2>
        <button
          onClick={() => setShowAddProductModal(true)}
          className='bg-[#f0312f] px-8 border rounded-md text-white flex justify-center items-center h-12'
        >
          Add Product
        </button>
      </div>
        {isLoading ? (
          renderSkeletons()
        ) : isError ? (
          <p className="text-red-500">Failed to load orders. Please try again.</p>
        ) : orders.length === 0 ? (
          <p>No orders found.</p>
        ) : (
          <div className="space-y-6">
  {orders.map((order) => (
    <div
      key={order._id}
      className="flex flex-col md:flex-row justify-between gap-4 items-start md:items-center border rounded-lg p-4 bg-white shadow-sm"
    >
      {/* Order Image + Info */}
      <div className="flex items-start gap-4">
        <img
          src={order.products[0]?.image || '/placeholder.jpg'}
          alt={order.products[0]?.name}
          className="w-24 h-24 object-cover rounded"
        />
        <div>
          <h3 className="text-lg font-semibold mb-1">
            {order.address?.fullName || "Customer"}
          </h3>
          <p className="text-gray-600 max-w-lg">
            {order.products.map(p => p.name).join(', ')}
          </p>
          <p className="text-gray-600 mt-1">
            Qty: {order.products.reduce((sum, p) => sum + p.quantity, 0)}
          </p>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex lg:flex-col  gap-2 md:items-end w-full md:w-auto justify-center items-center ">
        <button
          onClick={() => setSelectedOrder(order)}
          className="text-blue-600 font-medium hover:underline  "
        >
          View Details
        </button>
        <DeleteOrderButton
          orderId={order._id}
          onDelete={() => window.location.reload()} // You can also use React Query's `refetch` if needed
        />
      </div>
    </div>
  ))}
</div>

        )}
      </div>

      {/* Modal */}


      {selectedOrder && (
  <div className="fixed inset-0 bg-[#000000d0] bg-opacity-50 flex items-center justify-center z-50 p-4 sm:p-6">
    <div className="bg-white rounded-lg w-full max-w-2xl p-4 sm:p-6 relative max-h-[90vh] overflow-y-auto">
      {/* Close button */}
      <button
        onClick={() => setSelectedOrder(null)}
        className="absolute top-4 right-4 text-gray-500 hover:text-black text-xl"
      >
        &times;
      </button>

      {/* Header */}
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">Order Details</h3>

      {/* Products */}
      <div className="space-y-4">
        {selectedOrder.products.map((product, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row sm:items-center gap-4 border rounded p-3 shadow-sm"
          >
            <img
              src={product.image || '/placeholder.jpg'}
              alt={product.name}
              className="w-full sm:w-20 h-20 object-cover rounded hidden sm:block"
            />
            <div className="flex-1">
              <p className="font-medium text-gray-800">
                {product.quantity} x {product.name}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Total Price */}
      <div className="mt-4 text-right text-lg font-semibold">
        Total Price: Rp {selectedOrder.totalPrice?.toFixed(2) || "N/A"}
      </div>

      {/* Customer Details */}
      <div className="mt-6 border-t pt-4">
        <h4 className="text-lg mb-4">Customer Details</h4>

        {/* Row: Full Name, Email, Phone */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500 font-medium">Full Name</p>
            <p className="text-base font-semibold">
              {selectedOrder.address?.fullName || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Email</p>
            <p className="text-base font-semibold">
              {selectedOrder.address?.email || "N/A"}
            </p>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-medium">Phone</p>
            <p className="text-base font-semibold">
              {selectedOrder.address?.phone || "N/A"}
            </p>
          </div>
        </div>

        {/* Address Block */}
        <div>
          <p className="text-sm text-gray-500 font-medium mb-1">Address</p>
          <p className="text-base text-gray-800 leading-relaxed">
            {selectedOrder.address?.street}, {selectedOrder.address?.city},{' '}
            {selectedOrder.address?.state}, {selectedOrder.address?.postalCode},{' '}
            {selectedOrder.address?.country}
          </p>
        </div>
      </div>
    </div>
  </div>
)}

      
      {showAddProductModal && (
        <div className="fixed inset-0 bg-[#000000c6] bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
            <button
              onClick={() => setShowAddProductModal(false)}
              className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
            >
              &times;
            </button>
            <AddProduct />
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export default AllOrders;
