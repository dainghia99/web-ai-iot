interface ContainerProps {
  children: React.ReactNode;
}

const Container = ({ children }: ContainerProps) => {
  return <div className="px-10 my-4">{children}</div>;
};

export default Container;
