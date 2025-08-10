interface ButtonProps {
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const PrimaryButton = ({
  onClick,
  className = "",
  children,
  ...props
}: ButtonProps) => {
    return (
        <>
          <button
            onClick={onClick}
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition cursor-pointer ${className}`}
            {...props}
          >
            {children}
          </button>
        </>
    );
};

export default PrimaryButton;