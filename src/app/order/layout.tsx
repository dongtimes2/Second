import { Suspense } from 'react';

import BottomSheet from '@/app/order/components/BottomSheet/BottomSheet';
import Header from '@/app/order/components/Header/Header';

import Loading from './loading';

interface Props {
  children: React.ReactNode;
}
const OrderLayout = ({ children }: Props) => {
  return (
    <div className="h-full">
      <Header />
      <Suspense fallback={<Loading />}>{children}</Suspense>
      <BottomSheet />
    </div>
  );
};

export default OrderLayout;
