interface ButtonWordsProps {
    words: string | string[];
    onClick?: () => void;
    children?: React.ReactNode;
    className?: string;
}

export const ButtonWords = ({ words, onClick, children, className = "" }: ButtonWordsProps) => {
    const wordArray = Array.isArray(words) ? words : words ? words.split(',') : [];
    
    return (
        <button 
            className={`p-8 w-full h-[180px] rounded-2xl border-2 text-white border-white bg-[#24202E] flex flex-wrap justify-center hover:bg-[#3f3951] items-center gap-2 transition-colors ${className}`}
            onClick={onClick}
        >
            {children || wordArray.map((word, index) => (
                <span key={index} className="whitespace-nowrap text-3xl font-normal uppercase">
                    {word.trim()}
                </span>
            ))}
        </button>
    );
}