import { sellPoint } from './Data'; 
import SellPoint from './SellPoint';

const UniqueSellingPoints = () => {
  return (
    <section className="bg-gray-200 py-10">
      <div className="container mx-auto pt-8 ">
        
      {sellPoint.map((point) => ( 
        <SellPoint key={point.id} point={point} />  
      ))}
        
      </div>
    </section>
  );
};

export default UniqueSellingPoints;
