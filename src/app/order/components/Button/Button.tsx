interface Props {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
}

const bgColors = {
  disabled: 'bg-[#c1c1c1]',
  default: 'bg-black',
};

const Button = ({ children, onClick, disabled }: Props) => {
  const bgColor = disabled ? bgColors.disabled : bgColors.default;

  const handleClick = () => {
    onClick();
  };

  return (
    <button
      className={`w-full h-12 text-lg text-white ${bgColor}`}
      onClick={handleClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
