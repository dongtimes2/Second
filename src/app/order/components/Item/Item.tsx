'use client';
import { useState } from 'react';

import { useOrderStore } from '@/store/order';

import { IItem } from '../../types/item';
import EventMark from '../EventMark/EventMark';

const bgColors = {
  white: 'bg-white',
  apricot: 'bg-[rgba(247,90,47,0.1)]',
};

const Item = ({ event, name, price }: IItem) => {
  const setTotalPrice = useOrderStore((state) => state.setTotalPrice);
  const setTotalAmount = useOrderStore((state) => state.setTotalAmount);

  const [count, setCount] = useState(0);

  const bgColor = count ? bgColors.apricot : bgColors.white;

  const handleButtonClick = (type: 'plus' | 'minus') => {
    if (type === 'plus') {
      if (count < 999) {
        setCount(count + 1);
        setTotalPrice((prevPrice) => prevPrice + price);
        setTotalAmount((prevAmount) => prevAmount + 1);
      }
    } else if (type === 'minus') {
      if (count > 0) {
        setCount(count - 1);
        setTotalPrice((prevPrice) => prevPrice - price);
        setTotalAmount((prevAmount) => prevAmount - 1);
      }
    }
  };

  return (
    <li
      className={`flex gap-5 h-20 border-[1px] border-[rgba(0,0,0,0.3)] rounded-2xl p-2 ${bgColor}`}
    >
      <div>
        <div className="w-16 h-16 bg-[#d9d9d9]" />
      </div>
      <div className="flex flex-col justify-between w-full">
        <div className="flex gap-3">
          <p>{name}</p>
          {event && <EventMark />}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <button onClick={() => handleButtonClick('minus')}>-</button>
            <p>{count}</p>
            <button onClick={() => handleButtonClick('plus')}>+</button>
          </div>
          <div>
            <p>{price.toLocaleString('ko-KR')}원</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Item;
