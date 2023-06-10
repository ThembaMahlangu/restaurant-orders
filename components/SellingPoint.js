import React from 'react';

const UniqueSellingPoints = () => {
  return (
    <section className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-center">
            <img
              src="https://img.freepik.com/premium-vector/fast-service-logo-template_92086-321.jpg"
              alt="Fast Service"
              className="w-1/2 mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Fast Service</h2>
            <p className="text-gray-700 mb-6">
              At Everything Foodie, we pride ourselves on providing lightning-fast service to our customers. We understand that in today's busy world, time is of the essence. Our efficient ordering and preparation processes ensure that you get your favorite fast food items in no time.
            </p>
            <a
              href="#"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
          <div className="flex items-center">
            <img
              src="https://b2326578.smushcdn.com/2326578/wp-content/uploads/2021/08/kota7-extra-Edit.jpg?lossy=1&strip=1&webp=1"
              alt="Fresh Ingredients"
              className="w-1/2 mx-auto"
            />
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-4">Fresh Ingredients</h2>
            <p className="text-gray-700 mb-6">
              We believe that quality is key when it comes to food. That's why we source only the freshest and finest ingredients for our menu. From locally grown produce to premium meats, every bite is packed with flavor and goodness. Experience the difference of our fresh ingredients at Everything Foodie.
            </p>
            <a
              href="#"
              className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 transition-colors"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UniqueSellingPoints;
