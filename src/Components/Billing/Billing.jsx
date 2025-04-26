// import React from 'react'
// import BillingForm from './BillingForm'
// import Navbar from '../Layout/Navbar';
// import Footer from '../Layout/Footer';
// import { auth } from '../../lib/firebase';
// import { useState } from 'react';

// const Billing = () => {
  
//   const [userId, setUserId] = useState(null);

//   const user = auth.currentUser;
//   if (user) {
//      setUserId(user.uid)

//     console.log("User ID (UID):", uid);
//   } else {
//     console.log("No user is logged in.");
//   }

//   return (
//     <>
//     <Navbar/>
//     <div className="min-h-screen bg-gray-50 py-10">
     
//       <BillingForm userId={userId} />
//     </div>      
//     <Footer/>
//     </>
//   )
// }

// export default Billing

import React, { useEffect, useState } from 'react';
import BillingForm from './BillingForm';
import Navbar from '../Layout/Navbar';
import Footer from '../Layout/Footer';
import { auth } from '../../lib/firebase';

const Billing = () => {
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
  

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50 py-10">
        <BillingForm userId={userId} />
      </div>
      <Footer />
    </>
  );
};

export default Billing;
