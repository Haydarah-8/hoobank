import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';
import { CreditCard, Shield, Zap, CheckCircle, ArrowRight, Users, Globe, Lock, Sparkles, Trophy, Clock } from 'lucide-react';
import styles from '../style';
import { Navbar, Footer, AnimatedBackground, EnhancedTypography } from '../components';

gsap.registerPlugin(ScrollTrigger);

const HowItWorks = () => {
  const containerRef = useRef();
  const stepsRef = useRef([]);
  const parallaxRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced parallax effects
      parallaxRefs.current.forEach((el, index) => {
        if (el) {
          gsap.fromTo(el, {
            y: 100,
            opacity: 0,
            scale: 0.8
          }, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.5,
            ease: 'power4.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          });
        }
      });

      // Advanced steps animation with 3D transforms
      stepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(step, {
            opacity: 0,
            y: 100,
            rotationY: -45,
            scale: 0.7
          }, {
            opacity: 1,
            y: 0,
            rotationY: 0,
            scale: 1,
            duration: 1.2,
            delay: index * 0.3,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: step,
              start: 'top 80%',
              end: 'bottom 20%',
              toggleActions: 'play none none reverse'
            }
          });

          // Floating animation for the cards
          gsap.to(step, {
            y: -10,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.5
          });
        }
      });

      // Text reveal animations
      gsap.fromTo('.reveal-text', {
        y: 50,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.reveal-section',
          start: 'top 75%'
        }
      });

      // Number counter animations
      gsap.fromTo('.counter', {
        textContent: 0
      }, {
        textContent: (i, target) => target.getAttribute('data-count'),
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-section',
          start: 'top 80%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const steps = [
    {
      number: "01",
      title: "Sign Up & Verify",
      description: "Create your account in under 2 minutes with military-grade security verification and instant approval.",
      icon: <Users className="w-12 h-12" />,
      features: ["Biometric verification", "Instant approval", "Zero paperwork"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      number: "02", 
      title: "Connect Your Bank",
      description: "Securely link unlimited bank accounts using our quantum-encrypted connection system with read-only access.",
      icon: <CreditCard className="w-12 h-12" />,
      features: ["Quantum encryption", "Multi-bank sync", "Real-time updates"],
      color: "from-green-500 to-teal-500",
      bgColor: "bg-green-500/10"
    },
    {
      number: "03",
      title: "Start Transferring",
      description: "Send money instantly worldwide with AI-powered routing and sub-second processing speeds.",
      icon: <Zap className="w-12 h-12" />,
      features: ["AI-powered routing", "Sub-second transfers", "Global coverage"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  const features = [
    {
      icon: <Shield className="w-16 h-16 text-secondary" />,
      title: "Military-Grade Security",
      description: "Your data is protected with the same quantum encryption used by space agencies and central banks worldwide.",
      stats: "99.99% uptime"
    },
    {
      icon: <Globe className="w-16 h-16 text-secondary" />,
      title: "Global Network",
      description: "Send money to 195+ countries with AI-optimized routes and guaranteed best exchange rates.",
      stats: "195+ countries"
    },
    {
      icon: <Lock className="w-16 h-16 text-secondary" />,
      title: "Zero-Knowledge Privacy",
      description: "We use advanced zero-knowledge proofs ensuring complete privacy without storing sensitive data.",
      stats: "100% private"
    }
  ];

  const stats = [
    { number: 5000000, label: "Active Users", suffix: "+" },
    { number: 195, label: "Countries", suffix: "+" },
    { number: 500, label: "Billion Transferred", prefix: "$", suffix: "B+" },
    { number: 99.99, label: "Uptime", suffix: "%" }
  ];

  return (
    <div className="bg-primary w-full overflow-hidden relative" ref={containerRef}>
      <AnimatedBackground variant="blue" />
      
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Hero Section with Enhanced Animation */}
      <section className={`${styles.flexCenter} ${styles.paddingY} bg-transparent min-h-[80vh] relative z-10`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <div className="text-center relative">
            {/* Floating elements */}
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-20 -left-20 w-32 h-32 bg-gradient-to-r from-secondary/20 to-blue-400/20 rounded-full blur-xl"
            />
            <motion.div
              animate={{ 
                rotate: -360,
                y: [-20, 20, -20]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-10 -right-10 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-xl"
            />

            <EnhancedTypography variant="h1" className="mb-8 text-center">
              How HooBank Works
            </EnhancedTypography>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="max-w-4xl mx-auto mb-12"
            >
              <EnhancedTypography 
                variant="subtitle" 
                gradient={false} 
                className="text-dimWhite leading-relaxed"
                animated={false}
              >
                Experience the future of digital payments with our revolutionary platform that combines 
                <span className="text-secondary font-semibold"> quantum security</span>, 
                <span className="text-blue-400 font-semibold"> AI-powered routing</span>, and 
                <span className="text-purple-400 font-semibold"> instant global transfers</span>.
              </EnhancedTypography>
            </motion.div>

            {/* Stats Section */}
            <motion.div 
              className="stats-section grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-secondary to-blue-400 bg-clip-text text-transparent mb-2">
                    {stat.prefix}
                    <span className="counter" data-count={stat.number}>0</span>
                    {stat.suffix}
                  </div>
                  <div className="text-dimWhite text-sm md:text-base">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <motion.div
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(0, 246, 255, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-10 py-5 bg-gradient-to-r from-secondary via-blue-400 to-purple-500 rounded-2xl text-primary font-bold text-lg cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              <Sparkles className="mr-3 w-6 h-6" />
              <span className="relative z-10">Start Your Journey</span>
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Steps Section with 3D Cards */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-transparent relative z-10`} ref={el => parallaxRefs.current[0] = el}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-20 reveal-section">
            <EnhancedTypography variant="h2" className="mb-6 reveal-text">
              Simple Steps to Financial Freedom
            </EnhancedTypography>
            <EnhancedTypography 
              variant="body" 
              gradient={false} 
              className="text-dimWhite max-w-3xl mx-auto reveal-text"
              animated={false}
            >
              Experience seamless onboarding with our revolutionary 3-step process designed for maximum security and minimal friction.
            </EnhancedTypography>
          </div>

          <div className="grid lg:grid-cols-3 gap-12 relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-1/3 w-1/3 h-0.5 bg-gradient-to-r from-secondary to-blue-400 transform -translate-y-1/2"></div>
            <div className="hidden lg:block absolute top-1/2 left-2/3 w-1/3 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform -translate-y-1/2"></div>

            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                ref={el => stepsRef.current[index] = el}
                className="relative group perspective-1000"
                whileHover={{ y: -20 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className={`relative bg-black-gradient-2 rounded-3xl p-8 border border-[#3F3E45] hover:border-secondary transition-all duration-500 transform-gpu group-hover:shadow-2xl ${step.bgColor} backdrop-blur-sm`}>
                  {/* Floating number */}
                  <div className={`absolute -top-6 left-8 w-16 h-16 bg-gradient-to-r ${step.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
                    {step.number}
                  </div>
                  
                  {/* Icon with glow effect */}
                  <div className={`text-secondary mb-8 mt-6 relative`}>
                    <div className="absolute inset-0 bg-secondary/20 rounded-full blur-xl"></div>
                    <div className="relative">
                      {step.icon}
                    </div>
                  </div>
                  
                  <EnhancedTypography 
                    variant="h4" 
                    className="mb-4 group-hover:text-secondary transition-colors duration-300"
                    animated={false}
                  >
                    {step.title}
                  </EnhancedTypography>
                  
                  <p className="text-dimWhite mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  
                  <div className="space-y-3">
                    {step.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-white"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* Animated border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-secondary via-blue-400 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 -z-10 blur-xl"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section with Enhanced Visuals */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient relative z-10 overflow-hidden`} ref={el => parallaxRefs.current[1] = el}>
        {/* Background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-secondary/10 to-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-400/10 to-pink-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`${styles.boxWidth} mx-auto relative`}>
          <div className="text-center mb-20">
            <EnhancedTypography variant="h2" className="mb-6">
              Why Industry Leaders Choose HooBank
            </EnhancedTypography>
            <EnhancedTypography 
              variant="body" 
              gradient={false} 
              className="text-dimWhite max-w-3xl mx-auto"
              animated={false}
            >
              Trusted by Fortune 500 companies and used by millions worldwide for mission-critical financial operations.
            </EnhancedTypography>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="bg-black-gradient-2 rounded-3xl p-8 border border-[#3F3E45] hover:border-secondary transition-all duration-500 relative overflow-hidden h-full">
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-blue-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="mb-8 relative">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative">{feature.icon}</div>
                    </div>
                    
                    <EnhancedTypography variant="h4" className="mb-6" animated={false}>
                      {feature.title}
                    </EnhancedTypography>
                    
                    <p className="text-dimWhite mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="flex items-center">
                      <Trophy className="w-5 h-5 text-secondary mr-2" />
                      <span className="text-secondary font-semibold">{feature.stats}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-transparent relative z-10`} ref={el => parallaxRefs.current[2] = el}>
        <div className={`${styles.boxWidth} mx-auto text-center`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black-gradient-2 rounded-3xl p-16 border border-[#3F3E45] relative overflow-hidden">
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 via-blue-400/10 to-purple-400/10 opacity-50"></div>
              
              {/* Floating particles */}
              {Array.from({ length: 10 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-secondary/50 rounded-full"
                  animate={{
                    y: [0, -100, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    opacity: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.5,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}

              <div className="relative z-10">
                <EnhancedTypography variant="h2" className="mb-8">
                  Ready to Transform Your Financial Future?
                </EnhancedTypography>
                
                <EnhancedTypography 
                  variant="body" 
                  gradient={false} 
                  className="text-dimWhite mb-12 max-w-3xl mx-auto"
                  animated={false}
                >
                  Join over 5 million users who trust HooBank for their digital payment needs. 
                  Experience the future of finance with quantum security, AI-powered routing, and instant global transfers.
                </EnhancedTypography>

                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <motion.button
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 25px 50px rgba(0, 246, 255, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 bg-gradient-to-r from-secondary via-blue-400 to-purple-500 rounded-2xl text-primary font-bold text-lg inline-flex items-center relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Clock className="mr-3 w-6 h-6" />
                    <span className="relative z-10">Start Free Trial</span>
                    <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-10 py-5 border-2 border-secondary rounded-2xl text-secondary font-semibold text-lg hover:bg-secondary hover:text-primary transition-all duration-300"
                  >
                    Watch Demo
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default HowItWorks; 