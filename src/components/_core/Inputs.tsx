interface InputProps {
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const Input = ({
  type = "text",
  placeholder = "Enter text",
  className = "",
  ...props
}: InputProps) => {
    return (
        <>
          <input 
            type={type}
            placeholder={placeholder}
            className={`border p-2 rounded ${className}`}
            {...props}
          />
        </>
    );
};

export default Input;