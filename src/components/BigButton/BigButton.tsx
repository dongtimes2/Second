interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const BigButton = ({ children, onClick }: Props) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className="bg-white text-black text-xl rounded-2xl px-2.5 py-5"
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default BigButton;
