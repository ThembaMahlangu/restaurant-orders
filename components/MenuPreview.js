import { menuData } from './Data'; 
import Category from './Category';

const MenuPreview = () => {
  return (
    <div className="container mx-auto px-4 pt-20">
      <div className='bg-gray-800 bg-opacity-10 rounded-2xl pt-5 pb-1 px-5 justify-center border-spacing-2 -top-6'>
            <h1 className="text-3xl font-bold text-center text-red-500 mb-8">Featured Menu</h1>
      </div>
      {menuData.map((category) => (
        <>
        <Category key={category.id} category={category} menuData={menuData} /> 
        </>
      ))}
    </div>
  );
};

export default MenuPreview;
