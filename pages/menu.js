import { useState } from 'react';
import { menuData } from '../components/Data';
import Head from 'next/head';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import { FiArrowLeft, FiCheck } from 'react-icons/fi';

const Menu = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeFromCart = (itemId) => {
    setCartItems(cartItems.filter((item) => item.id !== itemId));
  };

  const renderCartItem = (item) => (
    <div key={item.id} className="flex items-center justify-between mb-2">
      <div className="flex items-center">
        <img
          src={item.image}
          alt={item.title}
          className="w-8 h-8 object-cover rounded-full"
        />
        <span className="ml-2">{item.title}</span>
      </div>
      <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  );

  const calculateSubtotal = () => {
    return cartItems.reduce((total, item) => total + item.price, 0);
  };

  const calculateTotal = () => {
    const subtotal = calculateSubtotal();
    const serviceFee = 2.5; // Assuming a fixed service fee of R2.50
    return subtotal + serviceFee;
  };

  const handleCheckout = () => {
    setShowCheckout(true);
  };

  const handleSubmitOrder = () => {
    const referenceCode = generateReferenceCode();
    setCartItems([]);
    setShowCheckout(false);
    setShowConfirmation(true);
    copyReferenceCode(referenceCode);
  };

  const generateReferenceCode = () => {
    // For demonstration purposes, returning a random number as the reference code
    return Math.floor(Math.random() * 1000000);
  };

  const copyReferenceCode = (referenceCode) => {
    navigator.clipboard.writeText(referenceCode);
  };

  const handleBackToCart = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <Head>
        <title>Menu | Everything Foodie</title>
        {/* Add your meta tags, favicon, and other head content here */}
      </Head>
      <Navbar />
      <div className="container mx-auto px-4 pt-20 relative">
        <div className="bg-gray-800 bg-opacity-10 rounded-2xl pt-5 pb-1 px-5 justify-center border-spacing-2 -top-6">
          <h1 className="text-3xl font-bold text-center text-red-500 mb-8">Full Menu</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {menuData.map((category) => (
            <div key={category.category} className="my-8">
              <h2 className="text-2xl font-semibold text-center mb-4">
                {category.category}
              </h2>
              {category.items.map((item) => (
                <div
                  key={item.id}
                  className="bg-white shadow rounded p-4 hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded cursor-pointer"
                  />
                  <h3 className="text-xl font-semibold mt-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                  <p className="text-lg font-bold mt-2">R{item.price.toFixed(2)}</p>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded mt-4"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="fixed bottom-4 left-4 bg-white p-4 shadow-lg rounded-lg">
            <h2 className="text-lg font-semibold mb-2">Cart</h2>
            {cartItems.map(renderCartItem)}
            <div className="flex justify-between items-center mt-4">
              <p className="text-lg font-semibold">Subtotal:</p>
              <p className="text-lg font-semibold">R{calculateSubtotal().toFixed(2)}</p>
            </div>
            <div className="flex justify-between items-center mt-2">
              <p className="text-lg font-semibold">Service Fee:</p>
              <p className="text-lg font-semibold">R2.50</p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-xl font-semibold">Total:</p>
              <p className="text-xl font-semibold">R{calculateTotal().toFixed(2)}</p>
            </div>
            {!showCheckout ? (
              <button
                onClick={handleCheckout}
                className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded mt-4"
              >
                Checkout
              </button>
            ) : (
              <div className="flex flex-col items-center mt-4">
                <p className="text-lg font-semibold">Complete your order:</p>
                <p className="text-sm text-gray-600 mt-2">
                  Please present the unique reference code at the store to collect your order.
                </p>
                <button
                  onClick={handleSubmitOrder}
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded mt-4"
                >
                  Submit Order
                </button>
              </div>
            )}
          </div>
        )}
        {showConfirmation && (
          <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-auto bg-white p-4 shadow-lg rounded-lg">
            <div className="flex items-center justify-between mb-4">
              <button onClick={handleBackToCart}>
                <FiArrowLeft className="h-6 w-6 text-gray-600" />
              </button>
              <h2 className="text-lg font-semibold">Order Submitted</h2>
              <div></div>
            </div>
            <div className="flex items-center justify-center mb-6">
              <FiCheck className="h-16 w-16 text-green-500" />
            </div>
            <p className="text-lg font-semibold mb-2">Your order has been submitted.</p>
            <p className="text-sm text-gray-600 mb-4">
              Please present the unique reference code at the store to collect your order.
            </p>
            <div className="flex items-center justify-between">
              <p className="text-lg font-semibold">Reference Code:</p>
              <div className="flex items-center">
                <input
                    type="text"
                    value={generateReferenceCode()}
                    className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg mr-2 w-full sm:w-auto"
                    readOnly
                />
                <button
                    onClick={() => copyReferenceCode(generateReferenceCode())}
                    className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full sm:w-auto"
                >
                    Copy
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};

export default Menu;
