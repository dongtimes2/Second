import Image from 'next/image';

const Header = () => {
  return (
    <header className="w-full h-14 bg-black p-3 drop-shadow-md">
      <Image
        src="/small-logo.svg"
        alt="small logo"
        width={94}
        height={32}
        priority
      />
    </header>
  );
};

export default Header;
