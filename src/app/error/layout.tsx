interface Props {
  children: React.ReactNode;
}

const ErrorLayout = ({ children }: Props) => {
  return <div className="h-full text-lg">{children}</div>;
};

export default ErrorLayout;
