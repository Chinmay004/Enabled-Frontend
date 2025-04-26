import React from 'react'

const Footer = () => {
  return (
<footer className="bg-[#F0312F] text-white py-10 px-5 md:px-20 font-inter -mb-10">
  <div className="flex flex-col md:flex-row justify-between gap-10">

    {/* Left Section */}
    <div>
      <h1 className="text-3xl font-bold mb-5">Enabled.</h1>
     
      <p className="mt-4 text-sm">+7 (411) 390-51-11</p>
      <p className="text-sm">info@novation-med.ru</p>
    </div>

    {/* Middle Section */}
    <div>
      <h2 className="font-semibold mb-5">Impact Outcomes</h2>
      <div className="grid grid-cols-2 gap-4 text-sm">
        <ul className="space-y-2">
          <li><a href="#" className="underline">Donation Distribution</a></li>
          <li><a href="#" className="underline">Online Supoort Group</a></li>
          <li><a href="#" className="underline">Online Webinar Sessions</a></li>
          <li><a href="#" className="underline">Patient Consultation Support</a></li>
          <li><a href="#" className="underline">Patient Journey Documentary</a></li>
        </ul>
        <ul className="space-y-2">
          <li><a href="#" className="underline">Pediatric Tracheostomy Care Booklet</a></li>
          <li><a href="#" className="underline">Private Consultation Booking Services</a></li>
          <li><a href="#" className="underline">Pro Bono Consulting Project</a></li>
          <li><a href="#" className="underline">Research</a></li>
        </ul>
      </div>
    </div>

    {/* Right Section */}
    <div className="flex items-center justify-center">
      <button className="bg-white text-red-600 px-5 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition">
        Get In Touch
      </button>
    </div>

  </div>

  {/* Bottom */}
  <div className="mt-10 text-center text-sm opacity-75">
    © 2021 — Novation Med All Rights Reserved
  </div>
</footer>

  )
}

export default Footer;