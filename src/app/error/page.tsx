'use client';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { PATH } from '@/constants/path';
import { useOrderStore } from '@/store/order';

const Error = () => {
  const reset = useOrderStore((state) => state.reset);

  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      reset();
      router.push(PATH.ORDER);
    }, 3000);
  }, [router, reset]);

  return (
    <main className="flex flex-col justify-center items-center h-full">
      <p>주문에 실패하였습니다.</p>
      <p>다시 시도해주세요.</p>
    </main>
  );
};

export default Error;
