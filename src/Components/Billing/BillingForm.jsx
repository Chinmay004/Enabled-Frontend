// components/BillingForm.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const BillingForm = ({ userId }) => {

    const navigate = useNavigate();


  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    apartment: "",
    street: "",
    city: "",
    state: "",
    postalCode: "",
    saveInfo: true,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === "checkbox" ? checked : value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const address = {
      fullName: formData.fullName,
      phone: formData.phone,
      street: `${formData.apartment ? formData.apartment + ", " : ""}${formData.street}`,
      city: formData.city,
      state: formData.state,
      postalCode: formData.postalCode,
      country: "Indonesia",
    };

    try {
      const res = await axios.post(`${import.meta.env.VITE_API_URL}/api/orders`, {
        userId,
        address,
      });

      console.log("Order placed:", res.data);
      alert("✅ Order placed successfully!");
      navigate("/orders"); //
    } catch (err) {
      console.error("Error placing order:", err);
    }
  };

  return (


<form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto p-4 bg-white shadow rounded space-y-4"
>
  <h2 className="text-2xl font-semibold tracking-wider">Billing Details</h2>

  <div>
    <label className="text-sm text-[#999099]">
      First Name <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      Phone Number <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      Email Address <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="email"
        value={formData.email}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      Apartment,floor,etc. (optional)
      <input
        name="apartment"
        value={formData.apartment}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      Street Address <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="street"
        value={formData.street}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      Town/City <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="city"
        value={formData.city}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      State <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="state"
        value={formData.state}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <div>
    <label className="text-sm text-[#999099]">
      Postal Code <span className="text-[#f1b4b4] text-md">*</span>
      <input
        name="postalCode"
        value={formData.postalCode}
        onChange={handleChange}
        className="w-full p-3 rounded bg-[#f5f5f5]"
        required
      />
    </label>
  </div>

  <label className="flex items-center text-sm text-[#999099]">
    <input
      type="checkbox"
      name="saveInfo"
      checked={formData.saveInfo}
      onChange={handleChange}
      className="mr-2 accent-red-500"
    />
    Save this information for faster check-out next time
  </label>

  <button
    type="submit"
    className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
  >
    Continue
  </button>
</form>

  );
};

export default BillingForm;

// components/BillingForm.jsx

