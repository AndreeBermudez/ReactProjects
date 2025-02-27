interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    labelClassName?: string;
    className?: string;
  }
  
  export const Input = ({ label,className,labelClassName, ...props }: InputProps) => {
    return (
      <div className='space-y-2'>
        {label && <label className={`text-sm text-gray-700 ${labelClassName}`}>{label}</label>}
        <input
          className={`w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400 ${className}`}
          {...props}
        />
      </div>
    )
  }