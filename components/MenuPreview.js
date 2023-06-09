import React from 'react';
import { menuData } from './Data';
import Link from 'next/link';

const MenuPreview = () => {
  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center mb-8">
        <u>Menu Preview</u>
      </h1>
      {menuData.map((category) => (
        <div key={category.category} className="my-8">
          <h2 className="text-2xl font-semibold text-center mb-4">
            <u>{category.category}</u>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
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
                <Link href={'menu'}>
                  <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-2 rounded mt-4">
                    Order Now
                  </button>
                </Link>
              </div>
            ))}
          </div>
          {menuData.indexOf(category) !== menuData.length - 1 && (
            <hr className="my-8 border-t-2 border-gray-300" />
          )}
        </div>
      ))}
    </div>
  );
};

export default MenuPreview;
