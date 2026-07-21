import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface CTAButtonProps {
  text: string;
  link?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  className?: string;
}

const CTAButton = ({ text, link, onClick, variant = 'primary', className = '' }: CTAButtonProps) => {
  const baseStyles = "inline-flex items-center space-x-2 px-8 py-4 font-cormorant text-lg rounded-full transition-all duration-300 transform hover:scale-105";
  
  const variants = {
    primary: "bg-[#CFB53B] text-[#FFFFF0] hover:bg-[#CFB53B]/90 shadow-lg hover:shadow-xl",
    secondary: "border-2 border-[#CFB53B] text-[#CFB53B] hover:bg-[#CFB53B] hover:text-[#FFFFF0]"
  };

  const content = (
    <>
      <span>{text}</span>
      <ArrowRight size={20} />
    </>
  );

  if (link) {
    return (
      <Link to={link} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};

export default CTAButton;