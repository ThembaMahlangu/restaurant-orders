import { IoIosArrowUp } from 'react-icons/io';
import { animateScroll as scroll } from 'react-scroll';

const ScrollToTopButton = () => {
  const handleScrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <button
      className="fixed bottom-4 right-4 bg-gray-800 text-white p-2 rounded-full shadow-lg"
      onClick={handleScrollToTop}
    >
      <IoIosArrowUp size={24} />
    </button>
  );
};

export default ScrollToTopButton;
