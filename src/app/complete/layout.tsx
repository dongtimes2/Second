interface Props {
  children: React.ReactNode;
}

const CompleteLayout = ({ children }: Props) => {
  return <div className="h-full text-lg">{children}</div>;
};

export default CompleteLayout;
