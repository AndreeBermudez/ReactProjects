interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'success' | 'secondary';
    className?: string;
    children: React.ReactNode;
  }
  
  export const Button = ({ variant = 'primary',className, children, ...props }: ButtonProps) => {
    const variants = {
      primary: 'bg-blue-500 hover:bg-blue-600',
      success: 'bg-green-500 hover:bg-green-600',
      secondary: 'bg-gray-500 hover:bg-gray-600'
    }
  
    return (
      <button 
        className={`${variants[variant]} text-white px-4 py-2 rounded-lg ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }