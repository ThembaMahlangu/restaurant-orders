import Head from 'next/head';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AboutPage = () => {
  return (
    <>
      <Head>
        <title>About | Everything Foodie</title>
        {/* Add your meta tags, favicon, and other head content here */}
      </Head>
      <Navbar/>

      <div className="bg-gray-100 pt-20">
        <div className="container mx-auto py-10 px-4">
          <h1 className="text-3xl font-semibold text-gray-800 mb-4">About Everything Foodie</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img src="https://www.mashed.com/img/gallery/fast-food-orders-that-are-surprisingly-good-for-you/l-intro-1642708415.jpg" alt="Everything Foodie Restaurant" className="rounded-lg" />
            </div>

            <div>
              <p className="text-lg text-gray-700">
                Everything Foodie is a fast food restaurant located in the heart of Johannesburg, South Africa. We are
                dedicated to providing our customers with the best fast food experience by offering a wide range of
                delicious and freshly prepared meals.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                Our menu features a variety of options to satisfy all taste buds. From juicy burgers and crispy fries to
                mouthwatering sandwiches and refreshing beverages, we have something for everyone. We use only the
                finest ingredients sourced from local suppliers to ensure the highest quality and freshness in every
                bite.
              </p>

              <p className="text-lg text-gray-700 mt-4">
                At Everything Foodie, we value customer satisfaction above all else. Our friendly and attentive staff are
                always ready to assist you and make your dining experience memorable. Whether you're dining in or
                grabbing a quick bite on the go, we strive to provide exceptional service and delicious food every time.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default AboutPage;
