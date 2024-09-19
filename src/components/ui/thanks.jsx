import React from 'react'
import { motion } from 'framer-motion'

function Thanks() {
  return (
    <div className="bg-gradient-to-r from-gray-900 to-black min-h-screen flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
          className="mb-8"
        >
          <svg className="w-24 h-24 mx-auto text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        </motion.div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-futura_bold text-blue-300 mb-6">Thank you!</h1>
        <h2 className="text-xl sm:text-2xl md:text-3xl font-futura_demi text-gray-300 mb-4">Your form was submitted successfully.</h2>
        <p className="text-lg sm:text-xl font-futura_light text-gray-400 mb-8">You will be contacted in 1-2 days</p>
        <motion.a
          href="/"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-blue-600 text-white font-futura_demi py-3 px-8 rounded-full transition duration-300 ease-in-out hover:bg-blue-700"
        >
          Back to Home
        </motion.a>
      </motion.div>
    </div>
  )
}

export default Thanks