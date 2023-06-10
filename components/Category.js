import React from 'react'
import Link from 'next/link';

function Category({category, menuData, key}) {
  return (
    <div key={key} className="my-8">
          <h2 className="text-2xl font-semibold text-center mb-4 tracking-widest ">
            {category.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
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
  )
}

export default Category