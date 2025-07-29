import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, 
  Users, 
  TrendingUp, 
  Globe, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Handshake,
  Target,
  Zap,
  Award,
  Briefcase,
  Rocket,
  DollarSign,
  Heart,
  Shield,
  Sparkles
} from 'lucide-react';
import styles from '../style';
import { Navbar, Footer, AnimatedBackground, EnhancedTypography } from '../components';

gsap.registerPlugin(ScrollTrigger);

const BecomePartner = () => {
  const containerRef = useRef();
  const formRef = useRef();
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    website: '',
    contactName: '',
    email: '',
    phone: '',
    employees: '',
    revenue: '',
    partnershipType: '',
    description: ''
  });
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Enhanced hero animation with stagger
      gsap.fromTo('.partner-hero-elements', {
        opacity: 0,
        y: 100,
        scale: 0.8
      }, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.5,
        stagger: 0.2,
        ease: 'power4.out'
      });

      // 3D card animations with depth
      gsap.fromTo('.benefit-card', {
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
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.benefits-section',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Floating animation for cards
      gsap.to('.benefit-card', {
        y: -8,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        stagger: 0.5
      });

      // Enhanced form animation
      gsap.fromTo(formRef.current, {
        opacity: 0,
        x: 100,
        rotationY: 20
      }, {
        opacity: 1,
        x: 0,
        rotationY: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: formRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse'
        }
      });

      // Stats counter animation
      gsap.fromTo('.counter-number', {
        textContent: 0
      }, {
        textContent: (i, target) => target.getAttribute('data-count'),
        duration: 2.5,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.stats-container',
          start: 'top 80%'
        }
      });

      // Text reveal animations
      gsap.fromTo('.reveal-text', {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reveal-section',
          start: 'top 75%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Partnership application:', formData);
    setIsSubmitting(false);
    // Show success message or redirect
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-16 h-16 text-secondary" />,
      title: "Exponential Revenue Growth",
      description: "Unlock multiple revenue streams with our comprehensive partner ecosystem. Average partners see 300% revenue increase in the first year.",
      features: ["Performance-based commissions", "Quarterly bonuses", "Exclusive territory rights"],
      stats: "300% average growth",
      gradient: "from-green-500 to-emerald-500",
      bgGradient: "from-green-500/10 to-emerald-500/5"
    },
    {
      icon: <Users className="w-16 h-16 text-secondary" />,
      title: "Global Customer Network",
      description: "Access our network of 5M+ active users across 195 countries. Leverage our customer insights and marketing intelligence.",
      features: ["5M+ active users", "Advanced analytics", "Personalized campaigns"],
      stats: "5M+ customers",
      gradient: "from-blue-500 to-cyan-500", 
      bgGradient: "from-blue-500/10 to-cyan-500/5"
    },
    {
      icon: <Zap className="w-16 h-16 text-secondary" />,
      title: "Cutting-Edge Technology",
      description: "Leverage our quantum-powered infrastructure, AI-driven insights, and white-label solutions to accelerate your growth.",
      features: ["Quantum infrastructure", "AI-powered insights", "White-label solutions"],
      stats: "99.99% uptime",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-500/10 to-pink-500/5"
    },
    {
      icon: <Globe className="w-16 h-16 text-secondary" />,
      title: "International Expansion",
      description: "Expand to 195+ countries with our global compliance framework, local partnerships, and multi-currency support.",
      features: ["195+ countries", "Local compliance", "Multi-currency support"],
      stats: "195+ countries",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-500/10 to-red-500/5"
    }
  ];

  const partnershipTypes = [
    {
      type: "Technology Partner",
      description: "Integrate with our APIs and build innovative financial solutions that reshape the industry",
      icon: <Building2 className="w-10 h-10" />,
      features: ["API access", "Technical support", "Co-development"],
      commission: "15-25%",
      color: "from-blue-500 to-cyan-500"
    },
    {
      type: "Channel Partner",
      description: "Resell our services to your customer base and earn competitive commissions with full support",
      icon: <Handshake className="w-10 h-10" />,
      features: ["Sales training", "Marketing support", "Lead generation"],
      commission: "20-35%",
      color: "from-green-500 to-emerald-500"
    },
    {
      type: "Strategic Partner",
      description: "Collaborate on joint ventures and co-branded solutions that drive mutual growth",
      icon: <Target className="w-10 h-10" />,
      features: ["Joint ventures", "Co-branding", "Strategic planning"],
      commission: "25-40%",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: 500, label: "Active Partners", prefix: "", suffix: "+" },
    { number: 195, label: "Countries", prefix: "", suffix: "+" },
    { number: 50, label: "Partner Revenue", prefix: "$", suffix: "M+" },
    { number: 99.99, label: "Platform Uptime", prefix: "", suffix: "%" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      quote: "Partnering with HooBank transformed our business. We've seen 400% growth in just 8 months.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Marcus Rodriguez",
      company: "Global Finance Corp",
      quote: "The technology and support are exceptional. Best partnership decision we've made.",
      rating: 5,
      avatar: "MR"
    }
  ];

  const formSteps = [
    { title: "Company Info", description: "Basic company details" },
    { title: "Partnership Type", description: "Choose your path" },
    { title: "Goals & Vision", description: "Tell us your story" }
  ];

  return (
    <div className="bg-primary w-full overflow-hidden relative" ref={containerRef}>
      <AnimatedBackground variant="green" />
      
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className={`${styles.flexCenter} ${styles.paddingY} bg-transparent min-h-[90vh] relative z-10`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <div className="text-center relative">
            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-20 -left-20 w-40 h-40 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                y: [-15, 15, -15]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-10 -right-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
            />

            <div className="partner-hero-elements">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full border border-green-500/30 mb-8"
              >
                <Briefcase className="w-6 h-6 text-green-400 mr-3" />
                <span className="text-green-200 font-semibold">Partner Program</span>
              </motion.div>

              <EnhancedTypography variant="h1" className="mb-8">
                Become a HooBank Partner
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
                  Join our elite network of 
                  <span className="text-green-400 font-semibold"> industry leaders</span> and 
                  <span className="text-blue-400 font-semibold"> innovative companies</span> 
                  shaping the future of digital finance. Together, we're building tomorrow's financial ecosystem.
                </EnhancedTypography>
              </motion.div>

              {/* Enhanced Stats */}
              <motion.div 
                className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {stats.map((stat, index) => (
                  <motion.div 
                    key={index} 
                    className="text-center group"
                    whileHover={{ scale: 1.05, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                      <div className="relative bg-black-gradient-2 border border-[#3F3E45] rounded-2xl p-6 group-hover:border-secondary transition-all duration-300">
                        <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent mb-2">
                          {stat.prefix}
                          <span className="counter-number" data-count={stat.number}>0</span>
                          {stat.suffix}
                        </div>
                        <div className="text-dimWhite text-sm md:text-base font-medium">{stat.label}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <motion.button
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 25px 50px rgba(34, 197, 94, 0.4)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl text-white font-bold text-lg inline-flex items-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                  <Rocket className="mr-3 w-6 h-6" />
                  <span className="relative z-10">Start Partnership</span>
                  <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 border-2 border-green-400 rounded-2xl text-green-400 font-semibold text-lg hover:bg-green-400 hover:text-primary transition-all duration-300 inline-flex items-center"
                >
                  <Award className="mr-3 w-5 h-5" />
                  Partner Benefits
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Partnership Types */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient relative z-10 overflow-hidden reveal-section`}>
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`${styles.boxWidth} mx-auto relative`}>
          <div className="text-center mb-20">
            <EnhancedTypography variant="h2" className="mb-6 reveal-text">
              Choose Your Partnership Path
            </EnhancedTypography>
            <EnhancedTypography 
              variant="body" 
              gradient={false} 
              className="text-dimWhite max-w-3xl mx-auto reveal-text"
              animated={false}
            >
              Select the partnership model that aligns with your business goals and capabilities. 
              Each path offers unique advantages and growth opportunities.
            </EnhancedTypography>
          </div>

          <div className="grid lg:grid-cols-3 gap-10">
            {partnershipTypes.map((partnership, index) => (
              <motion.div
                key={index}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -15 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-blue-500/5 to-purple-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                <div className="relative bg-black-gradient-2 rounded-3xl p-10 border border-[#3F3E45] hover:border-secondary transition-all duration-500 text-center h-full flex flex-col backdrop-blur-sm">
                  {/* Icon with gradient background */}
                  <div className={`w-20 h-20 bg-gradient-to-r ${partnership.color} rounded-2xl flex items-center justify-center text-white mb-8 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                    {partnership.icon}
                  </div>
                  
                  <EnhancedTypography variant="h4" className="mb-4" animated={false}>
                    {partnership.type}
                  </EnhancedTypography>
                  
                  <p className="text-dimWhite mb-8 leading-relaxed flex-grow">
                    {partnership.description}
                  </p>

                  {/* Commission badge */}
                  <div className="mb-6">
                    <span className={`px-4 py-2 bg-gradient-to-r ${partnership.color} text-white rounded-full text-sm font-bold`}>
                      {partnership.commission} Commission
                    </span>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {partnership.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-white justify-center">
                        <CheckCircle className="w-5 h-5 text-secondary mr-3 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full py-4 bg-gradient-to-r ${partnership.color} rounded-2xl text-white font-semibold mt-auto`}
                  >
                    Learn More
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className={`benefits-section ${styles.paddingX} ${styles.paddingY} bg-transparent relative z-10`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-20">
            <EnhancedTypography variant="h2" className="mb-6">
              Exclusive Partner Benefits
            </EnhancedTypography>
            <EnhancedTypography 
              variant="body" 
              gradient={false} 
              className="text-dimWhite max-w-3xl mx-auto"
              animated={false}
            >
              Our partners enjoy industry-leading benefits, cutting-edge technology access, and unparalleled support 
              that drives measurable business growth.
            </EnhancedTypography>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="benefit-card group relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.bgGradient} rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500`}></div>
                <div className="relative bg-black-gradient-2 rounded-3xl p-10 border border-[#3F3E45] hover:border-secondary transition-all duration-500 h-full backdrop-blur-sm">
                  <div className="flex items-start mb-8">
                    <div className="relative mr-6">
                      <div className="absolute inset-0 bg-secondary/20 rounded-full blur-2xl transform group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="relative">{benefit.icon}</div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-4">
                        <EnhancedTypography variant="h4" className="group-hover:text-secondary transition-colors duration-300" animated={false}>
                          {benefit.title}
                        </EnhancedTypography>
                        <span className={`px-3 py-1 bg-gradient-to-r ${benefit.gradient} text-white rounded-full text-sm font-bold`}>
                          {benefit.stats}
                        </span>
                      </div>
                      
                      <p className="text-dimWhite mb-8 leading-relaxed text-lg">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 gap-4">
                    {benefit.features.map((feature, idx) => (
                      <motion.div
                        key={idx}
                        className="flex items-center text-white bg-black/20 rounded-xl p-4"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-secondary mr-4 flex-shrink-0" />
                        <span className="font-medium">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Testimonials */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient relative z-10`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <EnhancedTypography variant="h2" className="mb-6">
              What Our Partners Say
            </EnhancedTypography>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-black-gradient-2 rounded-3xl p-8 border border-[#3F3E45] relative"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-white text-lg mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-secondary to-blue-400 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{testimonial.name}</div>
                    <div className="text-dimWhite text-sm">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Application Form */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-transparent relative z-10`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="grid xl:grid-cols-2 gap-16 items-start">
            {/* Form Info */}
            <div>
              <EnhancedTypography variant="h2" className="mb-8">
                Ready to Transform Your Business?
              </EnhancedTypography>
              
              <EnhancedTypography 
                variant="body" 
                gradient={false} 
                className="text-dimWhite mb-10 leading-relaxed"
                animated={false}
              >
                Join the ranks of successful partners who have transformed their businesses with HooBank. 
                Our dedicated partnership team will guide you through every step of the journey.
              </EnhancedTypography>
              
              <div className="space-y-8">
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Lightning Fast Approval</h4>
                    <p className="text-dimWhite">Get approved within 24 hours and start earning immediately.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Dedicated Support</h4>
                    <p className="text-dimWhite">24/7 access to our expert partnership success managers.</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start group"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-2">Guaranteed Success</h4>
                    <p className="text-dimWhite">Industry-leading resources and training for guaranteed growth.</p>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Multi-Step Form */}
            <motion.div
              ref={formRef}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10 rounded-3xl blur-xl"></div>
              <div className="relative bg-black-gradient-2 rounded-3xl p-10 border border-[#3F3E45] backdrop-blur-sm">
                {/* Step indicator */}
                <div className="flex items-center justify-between mb-10">
                  {formSteps.map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                        index + 1 <= currentStep 
                          ? 'bg-gradient-to-r from-secondary to-blue-400 text-primary' 
                          : 'bg-[#3F3E45] text-dimWhite'
                      }`}>
                        {index + 1}
                      </div>
                      {index < formSteps.length - 1 && (
                        <div className={`w-16 h-1 mx-4 transition-all duration-300 ${
                          index + 1 < currentStep ? 'bg-secondary' : 'bg-[#3F3E45]'
                        }`}></div>
                      )}
                    </div>
                  ))}
                </div>

                <EnhancedTypography variant="h3" className="mb-2" animated={false}>
                  Partnership Application
                </EnhancedTypography>
                <p className="text-dimWhite mb-8">
                  {formSteps[currentStep - 1].description}
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <AnimatePresence mode="wait">
                    {currentStep === 1 && (
                      <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-semibold mb-3">Company Name *</label>
                            <input
                              type="text"
                              name="companyName"
                              value={formData.companyName}
                              onChange={handleInputChange}
                              className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300"
                              placeholder="Enter your company name"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-semibold mb-3">Industry *</label>
                            <select
                              name="industry"
                              value={formData.industry}
                              onChange={handleInputChange}
                              className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white focus:border-secondary focus:outline-none transition-all duration-300"
                              required
                            >
                              <option value="">Select Industry</option>
                              <option value="fintech">Fintech</option>
                              <option value="banking">Banking</option>
                              <option value="ecommerce">E-commerce</option>
                              <option value="technology">Technology</option>
                              <option value="consulting">Consulting</option>
                              <option value="other">Other</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-white font-semibold mb-3">Website *</label>
                          <input
                            type="url"
                            name="website"
                            value={formData.website}
                            onChange={handleInputChange}
                            className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300"
                            placeholder="https://yourcompany.com"
                            required
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-semibold mb-3">Contact Name *</label>
                            <input
                              type="text"
                              name="contactName"
                              value={formData.contactName}
                              onChange={handleInputChange}
                              className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300"
                              placeholder="Your full name"
                              required
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-semibold mb-3">Email *</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300"
                              placeholder="your@email.com"
                              required
                            />
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 2 && (
                      <motion.div
                        key="step2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-white font-semibold mb-3">Partnership Type *</label>
                          <div className="space-y-4">
                            {partnershipTypes.map((type, index) => (
                              <label key={index} className="flex items-center p-4 bg-black/20 rounded-2xl border border-[#3F3E45] hover:border-secondary transition-all duration-300 cursor-pointer">
                                <input
                                  type="radio"
                                  name="partnershipType"
                                  value={type.type.toLowerCase().replace(' ', '')}
                                  onChange={handleInputChange}
                                  className="mr-4 text-secondary"
                                />
                                <div className="flex items-center">
                                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-xl flex items-center justify-center text-white mr-4`}>
                                    {type.icon}
                                  </div>
                                  <div>
                                    <div className="text-white font-semibold">{type.type}</div>
                                    <div className="text-dimWhite text-sm">{type.description}</div>
                                  </div>
                                </div>
                              </label>
                            ))}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <label className="block text-white font-semibold mb-3">Phone</label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300"
                              placeholder="+1 (555) 123-4567"
                            />
                          </div>
                          
                          <div>
                            <label className="block text-white font-semibold mb-3">Company Size</label>
                            <select
                              name="employees"
                              value={formData.employees}
                              onChange={handleInputChange}
                              className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white focus:border-secondary focus:outline-none transition-all duration-300"
                            >
                              <option value="">Select Size</option>
                              <option value="1-10">1-10 employees</option>
                              <option value="11-50">11-50 employees</option>
                              <option value="51-200">51-200 employees</option>
                              <option value="201-500">201-500 employees</option>
                              <option value="500+">500+ employees</option>
                            </select>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {currentStep === 3 && (
                      <motion.div
                        key="step3"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-6"
                      >
                        <div>
                          <label className="block text-white font-semibold mb-3">Partnership Goals & Vision</label>
                          <textarea
                            name="description"
                            value={formData.description}
                            onChange={handleInputChange}
                            rows="6"
                            className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300 resize-none"
                            placeholder="Tell us about your partnership goals, target market, and how you envision working with HooBank..."
                          />
                        </div>

                        <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6">
                          <h4 className="text-green-400 font-semibold mb-3 flex items-center">
                            <Sparkles className="w-5 h-5 mr-2" />
                            What happens next?
                          </h4>
                          <ul className="text-dimWhite space-y-2 text-sm">
                            <li>• Partnership team review within 24 hours</li>
                            <li>• Personalized strategy call with our experts</li>
                            <li>• Custom partnership agreement proposal</li>
                            <li>• Fast-track onboarding and activation</li>
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="flex justify-between pt-8">
                    {currentStep > 1 && (
                      <motion.button
                        type="button"
                        onClick={() => setCurrentStep(currentStep - 1)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 border-2 border-[#3F3E45] rounded-2xl text-dimWhite font-semibold hover:border-secondary transition-all duration-300"
                      >
                        Previous
                      </motion.button>
                    )}

                    {currentStep < 3 ? (
                      <motion.button
                        type="button"
                        onClick={() => setCurrentStep(currentStep + 1)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-secondary to-blue-400 rounded-2xl text-primary font-bold ml-auto flex items-center"
                      >
                        Next Step <ArrowRight className="ml-2 w-5 h-5" />
                      </motion.button>
                    ) : (
                      <motion.button
                        type="submit"
                        disabled={isSubmitting}
                        whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                        whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                        className="px-8 py-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 rounded-2xl text-white font-bold ml-auto flex items-center disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application <ArrowRight className="ml-2 w-5 h-5" />
                          </>
                        )}
                      </motion.button>
                    )}
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
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

export default BecomePartner; 