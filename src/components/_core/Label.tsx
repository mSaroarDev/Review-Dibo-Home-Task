interface LabelProps {
  htmlFor: string;
  className?: string;
  children?: React.ReactNode;
  notRequired?: boolean;
}

const Label = ({ 
  htmlFor = "", 
  children, 
  className = "", 
  notRequired = false 
}: LabelProps) => {
  return (
    <>
      <label
        htmlFor={htmlFor}
        className={`block text-sm font-medium text-gray-700 mt-2 ${className}`}
      >
        {children} {!notRequired && <span className="text-red-500">*</span>}
      </label>
    </>
  );
};

export default Label;