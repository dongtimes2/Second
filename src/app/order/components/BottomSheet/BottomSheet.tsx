'use client';
import Button from '../Button/Button';

const BottomSheet = () => {
  const handleButtonClick = () => {
    //
  };

  return (
    <div className="flex flex-col gap-5 bg-white h-[170px] px-5 pt-5 pb-7 rounded-t-[20px] drop-shadow-[0_-4px_10px_rgba(0,0,0,0.25)]">
      <div className="text-lg">
        <p>총 수량 : </p>
        <p>총 가격 : </p>
      </div>
      <Button onClick={handleButtonClick}>주문하기</Button>
    </div>
  );
};

export default BottomSheet;
