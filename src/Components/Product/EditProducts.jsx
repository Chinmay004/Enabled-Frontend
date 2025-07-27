import React, { useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { getProducts, updateProduct } from '../../api';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';

const EditProducts = () => {
    const { data: products = [], isLoading, isError, refetch } = useQuery({
        queryKey: ['products'],
        queryFn: getProducts,
        staleTime: 1000 * 60 * 5,
        cacheTime: 1000 * 60 * 10,
    });
    const [editingProduct, setEditingProduct] = useState(null);
    const [formData, setFormData] = useState({});
    const [imageFile, setImageFile] = useState(null);
    const [uploading, setUploading] = useState(false);
    const queryClient = useQueryClient();

    const handleEditClick = (product) => {
        setEditingProduct(product._id);
        setFormData({
            name: product.name || '',
            price: product.price || '',
            description: product.description || '',
            category: product.category || '',
            countInStock: product.countInStock || '',
            yearlyLimitPerUser: product.yearlyLimitPerUser || '',
        });
        setImageFile(null);
    };

    const handleChange = (e) => {
        setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleImageChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleCancel = () => {
        setEditingProduct(null);
        setFormData({});
        setImageFile(null);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!editingProduct) return;
        const form = new FormData();
        Object.entries(formData).forEach(([key, val]) => {
            form.append(key, val);
        });
        if (imageFile) form.append('image', imageFile);
        try {
            setUploading(true);
            await updateProduct(editingProduct, form);
            setEditingProduct(null);
            setFormData({});
            setImageFile(null);
            await refetch();
            queryClient.invalidateQueries(['products']);
            alert('Product updated!');
        } catch (err) {
            alert('Failed to update product');
        }
        setUploading(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <div className="max-w-5xl mx-auto p-6 w-full">
                <h2 className="text-3xl font-bold mb-8">Edit Products</h2>
                {isLoading ? (
                    <div>Loading products...</div>
                ) : isError ? (
                    <div className="text-red-500">Failed to load products.</div>
                ) : (
                    <div className="space-y-6">
                        {products.map((product) => (
                            <div key={product._id} className="border rounded-lg p-4 bg-white shadow-sm flex flex-col md:flex-row md:items-center gap-4">
                                <img src={product.image} alt={product.name} className="w-24 h-24 object-cover rounded" />
                                <div className="flex-1">
                                    <div className="font-semibold text-lg">{product.name}</div>
                                    <div className="text-gray-600">Price: {product.price}</div>
                                    <div className="text-gray-600">Stock: {product.countInStock}</div>
                                    <div className="text-gray-600">Yearly Limit: {product.yearlyLimitPerUser}</div>
                                    <div className="text-gray-600">Category: {product.category}</div>
                                    <div className="text-gray-600">Description: {product.description}</div>
                                </div>
                                <div>
                                    <button
                                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                                        onClick={() => handleEditClick(product)}
                                    >
                                        Edit
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            {/* Edit Modal */}
            {editingProduct && (
                <div className="fixed inset-0 bg-[#000000c6] bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg w-full max-w-2xl relative">
                        <button
                            onClick={handleCancel}
                            className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                        >
                            &times;
                        </button>
                        <h3 className="text-xl font-semibold mb-4">Edit Product</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
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
                            <div className="flex gap-5">
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
                            <textarea
                                name="description"
                                placeholder="Description"
                                onChange={handleChange}
                                value={formData.description}
                                className="w-full p-3 border border-gray-300 rounded-md resize-none"
                                rows={3}
                            />
                            <label
                                htmlFor="file-upload"
                                className="block w-full border-2 border-dashed border-gray-300 p-6 rounded-md text-center cursor-pointer"
                            >
                                <div className="text-gray-600">Upload New Image (optional)</div>
                                <input
                                    id="file-upload"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                    className="hidden"
                                />
                            </label>
                            <button
                                type="submit"
                                disabled={uploading}
                                className="bg-[#f0312f] hover:bg-[#d72a29] transition text-white py-3 px-6 rounded-md w-full"
                            >
                                {uploading ? 'Updating...' : 'Update Product'}
                            </button>
                        </form>
                    </div>
                </div>
            )}
            <Footer />
        </div>
    );
};

export default EditProducts; 