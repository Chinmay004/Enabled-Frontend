import axios from 'axios';


// Function to add a new product
export const addProduct = async (formData) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/products`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (err) {
    throw new Error('Failed to add product', err);
  }
};

// Function to get all products
export const getProducts = async () => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products`);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch products', err);
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/${id}`);
    return response.data;
  } catch (err) {
    throw new Error('Failed to fetch product details', err);
  }
};

export const getRelatedProducts = async (category, excludeId) => {
  try {
    const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/products/related/items`, {
      params: { category, excludeId },
    });
    return response.data;
  } catch (err) {
    throw new Error("Failed to fetch related products", err);
  }
};



export const addToCart = async (idToken, productId, quantity) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cart/`, // ✅ Correct endpoint
      { items: [{ productId, quantity }], },
      { headers: { Authorization: `Bearer ${idToken}`, }, }
    );
    return response.data;
  } catch (error) {
    console.error("Error adding to cart: ", error.response?.data || error.message);
    throw error;
  }
};

// export const fetchCartItems = async (idToken, userId) => {
//   try {
//     const response = await axios.get(`${API_URL}/cart/${userId}`, {
//       headers: { Authorization: `Bearer ${idToken}` },
//     });
//     return response.data;
//   } catch (err) {
//     throw new Error('Failed to fetch cart items');
//   }
// };

export const fetchCartItems = async (token) => {
  const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/cart/`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data.items || []; // assuming your backend returns { items: [...] }
};


// Update quantity of a product in cart
export const updateCartQuantity = async (idToken, productId, quantity) => {
  try {
    const response = await axios.post(`${import.meta.env.VITE_API_URL}/api/cart/`, {
      items: [{ productId, quantity }],
    }, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });
    return response.data;
  } catch (err) {
    console.error("Error updating cart quantity:", err.response?.data || err.message);
    throw new Error('Failed to update cart quantity');
  }
};

// Remove a product from cart by setting quantity to 0
export const removeFromCart = async (idToken, productId) => {
  return updateCartQuantity(idToken, productId, 0); // Reuse same function
};

export const checkProductInCart = async (idToken, productId) => {
  const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/cart/check`,
    { productId },
    {
      // const res = await fetch(`/api/cart/check?productId=${productId}`, {
      headers: {
        Authorization: `Bearer ${idToken}`,
      },
    });

  // const data = await res.json();
  return res.data.exists;
};

export const checkYearlyLimit = async (idToken, productId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/check-yearly-limit`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${idToken}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId })
  });

  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.message || 'Failed to check yearly limit');
  }

  return res.json(); // { allowed: true }
};

export const getUserProductPurchaseCount = async (idToken, productId, userId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/api/cart/purchase-count`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${idToken}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ productId, userId })
  });

  if (!res.ok) {
    const data = await res.json();
    throw new Error(data.message || "Failed to get purchase count");
  }

  const data = await res.json(); // { totalQty: number }
  return data;
};

// Update a product
export const updateProduct = async (id, formData) => {
  try {
    const response = await axios.put(`${import.meta.env.VITE_API_URL}/api/products/${id}`, formData, {
      headers: { 'Content-Type': 'multipart/form-data' },
    });
    return response.data;
  } catch (err) {
    throw new Error('Failed to update product', err);
  }
};


// Add other API functions like deleteProduct, updateProduct, etc. as needed
