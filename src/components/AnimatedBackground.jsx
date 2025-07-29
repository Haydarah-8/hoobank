import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const AnimatedBackground = ({ variant = 'default' }) => {
  const containerRef = useRef();
  const particlesRef = useRef([]);

  useEffect(() => {
    const particles = particlesRef.current;
    
    // Create floating animation for particles
    particles.forEach((particle, index) => {
      if (particle) {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.3,
          opacity: Math.random() * 0.6 + 0.2
        });

        gsap.to(particle, {
          y: '-=100',
          x: `+=${Math.random() * 200 - 100}`,
          duration: Math.random() * 10 + 15,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: Math.random() * 5
        });

        gsap.to(particle, {
          rotation: 360,
          duration: Math.random() * 20 + 10,
          repeat: -1,
          ease: 'none'
        });
      }
    });

    return () => {
      particles.forEach(particle => {
        if (particle) {
          gsap.killTweensOf(particle);
        }
      });
    };
  }, []);

  const getVariantClasses = () => {
    switch (variant) {
      case 'blue':
        return 'bg-gradient-to-br from-blue-900/20 via-primary to-purple-900/20';
      case 'green':
        return 'bg-gradient-to-br from-green-900/20 via-primary to-teal-900/20';
      case 'purple':
        return 'bg-gradient-to-br from-purple-900/20 via-primary to-pink-900/20';
      default:
        return 'bg-gradient-to-br from-gray-900/20 via-primary to-blue-900/20';
    }
  };

  return (
    <div 
      ref={containerRef}
      className={`fixed inset-0 pointer-events-none overflow-hidden ${getVariantClasses()}`}
      style={{ zIndex: -1 }}
    >
      {/* Animated mesh gradient overlay */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-72 h-72 bg-secondary/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-0 right-0 w-72 h-72 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-400/20 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating particles */}
      {Array.from({ length: 30 }, (_, i) => (
        <div
          key={i}
          ref={el => particlesRef.current[i] = el}
          className="absolute w-2 h-2 bg-secondary/30 rounded-full"
          style={{
            boxShadow: '0 0 10px rgba(0, 246, 255, 0.3)'
          }}
        />
      ))}

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0, 246, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 246, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Radial gradient overlays */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-secondary/10 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-blue-400/10 to-transparent rounded-full blur-3xl"></div>
    </div>
  );
};

export default AnimatedBackground; 