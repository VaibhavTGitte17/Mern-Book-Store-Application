import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer'
function Contactus() {
  return (
    <>
      <Navbar />
      <div className="pt-24 md:pt-32 max-w-screen-2xl container mx-auto md:px-20 px-4 flex justify-center">
        <div className="w-full md:w-1/2 mt-12 md:mt-16 px-4">

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-white">Username</span>
            <input
              type="text"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:text-white dark:border-gray-700"
              placeholder="Username"
            />
          </label>
         
          <label className="block mb-4">
            <span className="text-gray-700 dark:text-white">Email</span>
            <input
              type="email"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:text-white dark:border-gray-700"
              placeholder="Email"
            />
          </label>

          <label className="block mb-4">
            <span className="text-gray-700 dark:text-white">Phone Number</span>
            <input
              type="tel"
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:text-white dark:border-gray-700"
              placeholder="Phone Number"
            />
          </label>

          <label className="block mb-6">
            <span className="text-gray-700 dark:text-white">Message</span>
            <textarea
              className="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-slate-800 dark:text-white dark:border-gray-700"
              rows="4"
              placeholder="Write your message here..."
            ></textarea>
          </label>
          
          <button className="btn btn-secondary mt-4 w-full py-2 px-4 rounded-md text-white bg-pink-600 hover:bg-pink-800 dark:bg-pink-700 dark:hover:bg-pink-900 mb-12">
            Submit
          </button>
          
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contactus;
