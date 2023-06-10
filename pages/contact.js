import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Head from 'next/head';

const ContactPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <Head>
        <title>Contact | Everything Foodie</title>
        {/* Add your meta tags, favicon, and other head content here */}
      </Head>
      <Navbar/>

      <div className="bg-gray-100 pt-20">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">Contact Everything Foodie</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="https://www.mashed.com/img/gallery/fast-food-orders-that-are-surprisingly-good-for-you/l-intro-1642708415.jpg" alt="Everything Foodie Contact" className="rounded-lg" />
            </div>

            <div>
              <p className="text-lg text-gray-700">
                Thank you for your interest in Everything Foodie! We value your feedback, questions, and inquiries. Please
                feel free to get in touch with us using the contact information below or by filling out the contact form.
              </p>

              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Information</h2>
                <p className="text-lg text-gray-700">
                  Address: 123 Main Street, Johannesburg, South Africa<br />
                  Phone: +27 123 456 789<br />
                  Email: info@everythingfoodie.co.za
                </p>
              </div>

              <div className="mt-4">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">Contact Form</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-lg text-gray-700 mb-1">Name</label>
                    <input required={true} type="text" id="name" name="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-lg text-gray-700 mb-1">Email</label>
                    <input required={true} type="email" id="email" name="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-lg text-gray-700 mb-1">Message</label>
                    <textarea required={true} id="message" name="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:outline-none focus:ring focus:ring-blue-200"></textarea>
                  </div>

                  <button type="submit" className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 transition-colors">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ContactPage;
