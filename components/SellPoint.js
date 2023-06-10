import React from 'react'

function SellPoint({key, point}) {
  return (
    <div key={key} className="grid grid-cols-1 md:grid-cols-2 mb-8 px-4">
          <div className="flex items-center">
          {point.image.map((image) => (
              <img
              src={image.src}
              alt={image.alt}
              className="w-1/2 mx-auto"
            />
            ))}
            
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{point.name}</h2>
            <p className="text-gray-700 mb-6">
                {point.description}                 
            </p>
            <a
              href={point.reference}
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Learn More
            </a>
          </div>
    </div>
  )
}

export default SellPoint