import { useState } from "react";
import axios from "axios";

const DeleteOrderButton = ({ orderId, onDelete }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (loading) return; // Prevent multiple clicks

    setLoading(true);
    setError(null);

    try {
      // Make the API call to delete the order
      await axios.delete(`${import.meta.env.VITE_API_URL}/api/orders/${orderId}`);
      // Notify parent component to refresh the orders list
      onDelete(orderId);
    } catch (err) {
      setError("Failed to delete the order.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleDelete}
      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
      disabled={loading}
    >
      {loading ? "Deleting..." : "Delete Order"}
    </button>
  );
};

export default DeleteOrderButton;
