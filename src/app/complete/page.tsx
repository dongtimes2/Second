'use client';
import { useEffect } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { PATH } from '@/constants/path';
import { useOrderStore } from '@/store/order';

const Order = () => {
  const reset = useOrderStore((state) => state.reset);

  const router = useRouter();

  useEffect(() => {
    reset();
    setTimeout(() => {
      router.push(PATH.ORDER);
    }, 3000);
  }, [router, reset]);

  return (
    <main className="flex flex-col justify-center items-center gap-3 h-full">
      <Image
        src="/check.svg"
        alt="check symbol"
        width={48}
        height={48}
        priority
      />
      <p>주문이 완료되었습니다.</p>
    </main>
  );
};

export default Order;
