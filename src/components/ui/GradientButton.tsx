import React from 'react';

interface GradientButtonProps {
  children: React.ReactNode;
  gradient: 'ai' | 'creative' | 'branding' | 'influencer' | 'newsletter' | 'outbox' | 'pr' | 'restaurant' | 'youth';
  className?: string;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, gradient, className = '', onClick }) => {
  // CORRECTED gradients using official color trio
  const gradientMap = {
    ai: 'linear-gradient(135deg, #38b6ff 0%, #ff69b4 100%)',
    creative: 'linear-gradient(135deg, #ff69b4 0%, #ebf998 100%)',
    branding: 'linear-gradient(135deg, #38b6ff 0%, #ebf998 50%, #ff69b4 100%)',
    influencer: 'linear-gradient(135deg, #ff69b4 0%, #38b6ff 50%, #ebf998 100%)',
    newsletter: 'linear-gradient(135deg, #ebf998 0%, #ff69b4 100%)',
    outbox: 'linear-gradient(135deg, #FDFDFC 0%, #ebf998 100%)',
    pr: 'linear-gradient(135deg, #222222 0%, #ff69b4 100%)',
    restaurant: 'linear-gradient(135deg, #ebf998 0%, #38b6ff 100%)',
    youth: 'linear-gradient(135deg, #ff69b4 0%, #38b6ff 50%, #ebf998 100%)'
  };

  return (
    <button
      onClick={onClick}
      className={`gradient-button ${className}`}
      style={{
        background: gradientMap[gradient],
        backgroundSize: '200% 200%',
        animation: 'gradient-shift 4s ease infinite',
        padding: '1rem 2rem',
        border: '4px solid black',
        boxShadow: '8px 8px 0px black',
        color: gradient === 'outbox' ? 'black' : 'white',
        fontWeight: 800,
        textTransform: 'uppercase',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '0.875rem',
        letterSpacing: '0.5px'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.02)';
        e.currentTarget.style.boxShadow = '12px 12px 0px black';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0px) scale(1)';
        e.currentTarget.style.boxShadow = '8px 8px 0px black';
      }}
    >
      {children}
    </button>
  );
};

export default GradientButton;