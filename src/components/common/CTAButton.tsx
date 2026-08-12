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
  const baseStyles = "inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full transition-all duration-300 transform font-montserrat font-semibold text-lg";
  
  const variants = {
    primary: "bg-[#B58A4A] text-[#FFFFFF] shadow-lg hover:bg-[#9b7335] hover:-translate-y-0.5",
    secondary: "border-2 border-[#B58A4A] bg-white text-[#B58A4A] hover:bg-[#B58A4A] hover:text-[#FFFFFF] hover:-translate-y-0.5"
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