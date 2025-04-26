

import React, { useState } from 'react';
import { addProduct } from '../../api'; // ✅ Make sure this function handles the axios POST

const AddProduct = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    description: '',
    category: '',
    countInStock: '',
    yearlyLimitPerUser: '',
  });

  const [imageFile, setImageFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleImageChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!imageFile) return alert('Please upload an image');

    const form = new FormData();
    Object.entries(formData).forEach(([key, val]) => {
      form.append(key, val);
    });
    form.append('image', imageFile);

    try {
      setUploading(true);
      console.log("Submitting product:", form);

      await addProduct(form); // ✅ Use API wrapper
      alert('Product added!');
      setFormData({
        name: '',
        price: '',
        description: '',
        category: '',
        countInStock: '',
        yearlyLimitPerUser: '',
      });
      setImageFile(null);
    } catch (err) {
      console.error(err);
      alert('Failed to add product');
    }
    setUploading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-2xl font-bold mb-4">Add New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          name="name"
          placeholder="Name"
          onChange={handleChange}
          value={formData.name}
          required
          className="w-full p-2 border rounded"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          value={formData.price}
          required
          className="w-full p-2 border rounded"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          className="w-full p-2 border rounded"
        />
        <input
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={formData.category}
          className="w-full p-2 border rounded"
        />
        <input
          name="countInStock"
          type="number"
          placeholder="Stock"
          onChange={handleChange}
          value={formData.countInStock}
          className="w-full p-2 border rounded"
        />
        <input
          name="yearlyLimitPerUser"
          type="number"
          placeholder="Yearly Limit"
          onChange={handleChange}
          value={formData.yearlyLimitPerUser}
          className="w-full p-2 border rounded"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          disabled={uploading}
          className="bg-blue-600 text-white py-2 px-4 rounded w-full"
        >
          {uploading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
