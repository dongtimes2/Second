'use client';
import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { PATH } from '@/constants/path';
import { useOrderStore } from '@/store/order';

import Button from '../Button/Button';

const BottomSheet = () => {
  const totalAmount = useOrderStore((state) => state.totalAmount);
  const totalPrice = useOrderStore((state) => state.totalPrice);

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleButtonClick = () => {
    setIsLoading(true);
    router.push(PATH.COMPLETE);
  };

  return (
    <div className="flex flex-col gap-5 bg-white h-[170px] px-5 pt-5 pb-7 rounded-t-[20px] drop-shadow-[0_-4px_10px_rgba(0,0,0,0.25)]">
      <div className="text-lg text-right">
        <p>총 수량 : {totalAmount}개</p>
        <p>총 가격 : {totalPrice.toLocaleString('ko-KR')}원</p>
      </div>
      <Button onClick={handleButtonClick} disabled={!totalAmount || isLoading}>
        {isLoading ? '로딩중...' : '주문하기'}
      </Button>
    </div>
  );
};

export default BottomSheet;
