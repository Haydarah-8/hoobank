import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const EnhancedTypography = ({ 
  children, 
  variant = 'h1', 
  gradient = true, 
  animated = true,
  className = '',
  delay = 0
}) => {
  const textRef = useRef();

  useEffect(() => {
    if (animated && textRef.current) {
      const text = textRef.current;
      const chars = text.textContent.split('');
      text.innerHTML = '';
      
      chars.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char === ' ' ? '\u00A0' : char;
        span.style.display = 'inline-block';
        text.appendChild(span);
      });

      gsap.fromTo(text.children, {
        y: 100,
        opacity: 0,
        rotationX: -90
      }, {
        y: 0,
        opacity: 1,
        rotationX: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'back.out(1.7)',
        delay: delay
      });
    }
  }, [animated, delay]);

  const getVariantClasses = () => {
    switch (variant) {
      case 'h1':
        return 'text-5xl md:text-6xl lg:text-7xl font-bold leading-tight';
      case 'h2':
        return 'text-4xl md:text-5xl lg:text-6xl font-bold leading-tight';
      case 'h3':
        return 'text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight';
      case 'h4':
        return 'text-2xl md:text-3xl lg:text-4xl font-semibold leading-tight';
      case 'subtitle':
        return 'text-xl md:text-2xl font-medium leading-relaxed';
      case 'body':
        return 'text-lg md:text-xl leading-relaxed';
      default:
        return 'text-2xl font-medium';
    }
  };

  const gradientClasses = gradient 
    ? 'bg-gradient-to-r from-white via-secondary to-blue-400 bg-clip-text text-transparent'
    : 'text-white';

  if (animated) {
    return (
      <motion.div
        ref={textRef}
        className={`${getVariantClasses()} ${gradientClasses} ${className} font-poppins`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay }}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <div className={`${getVariantClasses()} ${gradientClasses} ${className} font-poppins`}>
      {children}
    </div>
  );
};

export default EnhancedTypography; 