'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import BigButton from '@/components/BigButton/BigButton';
import { PATH } from '@/constants/path';

const Home = () => {
  const router = useRouter();

  const handleButtonClick = () => {
    router.push(PATH.ORDER);
  };

  return (
    <main className="flex flex-col justify-center items-center gap-10 h-screen bg-black">
      <Image
        src="/big-logo.svg"
        alt="big logo"
        width={150}
        height={50}
        priority
      />
      <BigButton onClick={handleButtonClick}>주문하러 가기</BigButton>
    </main>
  );
};

export default Home;
