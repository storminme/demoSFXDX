import { PlaceTheOrder } from '../features/PlaceTheOrder.tsx';
import { MyOrders } from '../features/MyOrders.tsx';
import { OrderBook } from '../features/OrderBook.tsx';

const PrimaryMain = () => {
  return (
    <main>
      <div className="flex flex-col tablet:grid tablet:grid-cols-3 tablet:grid-rows-3 gap-3.5 w-[90%] mx-auto my-9">
        <PlaceTheOrder />
        <MyOrders />
        <OrderBook />
      </div>
    </main>
  );
};

export default PrimaryMain;
