import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative bg-cover bg-center bg-no-repeat bg-hero-image h-screen">
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-white font-bold tracking-tight leading-tight mb-6 text-center">
          Welcome to Everything Foodie
        </h1>
        <p className="text-lg md:text-2xl lg:text-3xl text-white mb-8 text-center">
          Discover a world of delicious fast food
        </p>
        <Link href={"menu"}>
          <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-6 rounded-full shadow-lg">
            Order Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
