


import  { useState } from 'react';
import { addProduct } from '../../api';

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
      await addProduct(form);
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
    <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-6">Add a New Product</h2>
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Product Name + Stock */}
        <div className="flex gap-4">
          <input
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            value={formData.name}
            required
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          />
          <input
            name="countInStock"
            type="number"
            placeholder="Available Quantity"
            onChange={handleChange}
            value={formData.countInStock}
            className="w-1/2 p-3 border border-gray-300 rounded-md"
          />
        </div>

            <div 
        className=" flex gap-5"
        >
          <input
            name="price"
            type="number"
            placeholder="Price"
            onChange={handleChange}
            value={formData.price}
            className="w-1/3 p-3 border border-gray-300 rounded-md"
          />
          <input
            name="category"
            placeholder="Category"
            onChange={handleChange}
            value={formData.category}
            className="w-1/3 p-3 border border-gray-300 rounded-md"
          />
          <input
            name="yearlyLimitPerUser"
            type="number"
            placeholder="Yearly Limit"
            onChange={handleChange}
            value={formData.yearlyLimitPerUser}
            className="w-1/3 p-3 border border-gray-300 rounded-md"
          />
        </div>

        {/* Description */}
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          value={formData.description}
          className="w-full p-3 border border-gray-300 rounded-md resize-none"
          rows={3}
        />

        {/* File Upload */}
        <label
          htmlFor="file-upload"
          className="block w-full border-2 border-dashed border-gray-300 p-6 rounded-md text-center cursor-pointer"
        >
          <div className="text-gray-600">Upload Images in PNG JPEG</div>
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
            required
          />
        </label>

        {/* Hidden fields still available for backend but not shown visually per Figma */}
    

        <button
          type="submit"
          disabled={uploading}
          className="bg-[#f0312f] hover:bg-[#d72a29] transition text-white py-3 px-6 rounded-md w-full"
        >
          {uploading ? 'Uploading...' : 'Add Product'}
        </button>
      </form>
    </div>
  );
};

export default AddProduct;

