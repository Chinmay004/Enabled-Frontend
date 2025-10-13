import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  const impactOutcomes = [
    { name: "Donation Distribution", path: "/donation-distribution" },
    { name: "Online Support Group", path: "/online-support-group" },
    { name: "Online Webinar Sessions", path: "/online-webinar-sessions" },
    { name: "Patient Consultation Support", path: "/patient-consultation-support" },
    { name: "Patient Journey Documentary", path: "/patient-journey-documentary" },
    { name: "Pediatric Tracheostomy Care Booklet", path: "/pediatric-tracheostomy-care-booklet" },
    { name: "Private Consultation Booking Services", path: "/private-consultation-booking-services" },
    { name: "Pro Bono Consulting Project", path: "/pro-bono-consulting-project" },
    { name: "Research", path: "/research" }
  ];

  return (
    <footer className="bg-[#F0312F] text-white py-10 px-5 md:px-20 font-inter -mb-10">
      <div className="flex flex-col md:flex-row justify-between gap-10">

        {/* Left Section */}
        <div>
          <h1 className="text-3xl font-bold mb-5">Enabled.</h1>
          <p className="text-sm">+6285778737390 <span>(Founder - Tia)</span></p>
          <p className="mt-4 text-sm">+62877-8462-9666 <span>(Co-Founder - Via)</span></p>
        </div>

        {/* Middle Section */}
        <div>
          <h2 className="font-semibold mb-5">Impact Outcomes</h2>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <ul className="space-y-2">
              {impactOutcomes.slice(0, 5).map((outcome, index) => (
                <li key={index}>
                  <NavLink
                    to={outcome.path}
                    className="underline hover:text-gray-200 transition-colors"
                  >
                    {outcome.name}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="space-y-2">
              {impactOutcomes.slice(5).map((outcome, index) => (
                <li key={index + 5}>
                  <NavLink
                    to={outcome.path}
                    className="underline hover:text-gray-200 transition-colors"
                  >
                    {outcome.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center">
          <a
            href="https://wa.me/6287784629666"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-red-600 px-5 py-2 rounded-full font-medium hover:bg-red-500 hover:text-white transition inline-block"
          >
            Get In Touch
          </a>
        </div>

      </div>

      {/* Bottom */}
      {/* <div className="mt-10 text-center text-sm opacity-75">
        © 2021 — Novation Med All Rights Reserved
      </div> */}
    </footer>

  )
}

export default Footer;