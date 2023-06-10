import React from 'react';

const EverythingFoodieMap = () => {
  return (
    <div className="bg-white p-6">
      <h1 className="text-4xl font-bold mb-4 text-center h-15 text-gray-800">Where To Find Us!</h1>
      <div className="relative w-full h-0" style={{ paddingBottom: '56.25%' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.705748279484!2d28.03993927464326!3d-26.206248664055938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e950e989e9928bb%3A0x4ffd4e58415a258f!2sNando&#39;s%20Ghandi%20Square!5e0!3m2!1sen!2sza!4v1686367897650!5m2!1sen!2sza"
          title="Google Map"
          className="absolute top-0 left-0 w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default EverythingFoodieMap;
