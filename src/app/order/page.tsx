import Item from './components/Item/Item';
import { IItem } from './types/item';

const getData = async () => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC__SERVER_URL}/items`, {
        cache: 'no-cache',
      }
    );
    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      throw new Error(error.message);
    }
  }
};

const Order = async () => {
  const data = await getData();

  return (
    <main className="h-[calc(100%-226px)]">
      <ul className="h-full flex flex-col gap-4 overflow-y-auto px-6 py-5">
        {data?.map((item: IItem) => (
          <Item
            key={item.id}
            name={item.name}
            price={item.price}
            event={item.event}
            materialType={item.materialType}
          />
        ))}
      </ul>
    </main>
  );
};

export default Order;
