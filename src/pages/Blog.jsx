import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  ArrowRight, 
  Search, 
  Filter, 
  TrendingUp, 
  DollarSign, 
  Shield,
  Eye,
  Heart,
  Share,
  BookOpen,
  Zap,
  Star,
  Tag
} from 'lucide-react';
import styles from '../style';
import { Navbar, Footer, AnimatedBackground, EnhancedTypography } from '../components';

gsap.registerPlugin(ScrollTrigger);

const Blog = () => {
  const containerRef = useRef();
  const cardsRef = useRef([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance animation
      gsap.fromTo('.blog-hero-elements', {
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

      // Cards stagger animation with 3D effect
      cardsRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(card, {
            opacity: 0,
            y: 100,
            rotationX: -45,
            scale: 0.8
          }, {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            delay: index * 0.15,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              end: 'bottom 15%',
              toggleActions: 'play none none reverse'
            }
          });

          // Floating animation
          gsap.to(card, {
            y: -5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: index * 0.2
          });
        }
      });

      // Text reveal animations
      gsap.fromTo('.reveal-up', {
        y: 60,
        opacity: 0
      }, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reveal-section',
          start: 'top 80%'
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const featuredPost = {
    title: "The Future of Digital Banking: AI Revolution in Finance 2024",
    excerpt: "Discover how artificial intelligence and quantum computing are reshaping the financial industry, creating unprecedented opportunities for secure, instant, and intelligent banking solutions.",
    author: "Dr. Sarah Johnson",
    authorTitle: "Chief AI Officer",
    date: "December 15, 2023",
    readTime: "12 min read",
    category: "Technology",
    tags: ["AI", "Quantum", "Future Tech"],
    views: "15.2K",
    likes: "1.2K",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
  };

  const blogPosts = [
    {
      title: "Advanced Security Protocols: Zero-Trust Banking Architecture",
      excerpt: "Learn how zero-trust security models are revolutionizing financial data protection and customer privacy in the digital age.",
      author: "Michael Chen",
      authorTitle: "Security Expert",
      date: "December 12, 2023",
      readTime: "8 min read",
      category: "Security",
      tags: ["Security", "Zero-Trust", "Privacy"],
      views: "12.8K",
      likes: "956",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Cryptocurrency Integration: The Next Financial Evolution",
      excerpt: "How traditional banks are embracing cryptocurrency and DeFi protocols to create hybrid financial ecosystems.",
      author: "Emma Rodriguez",
      authorTitle: "Blockchain Specialist",
      date: "December 10, 2023",
      readTime: "10 min read",
      category: "Crypto",
      tags: ["Crypto", "DeFi", "Blockchain"],
      views: "18.5K",
      likes: "1.4K",
      icon: <DollarSign className="w-6 h-6" />
    },
    {
      title: "Mobile-First Banking: UX Trends Shaping 2024",
      excerpt: "Explore cutting-edge mobile banking interfaces and user experience innovations that are setting new industry standards.",
      author: "David Kim",
      authorTitle: "UX Director",
      date: "December 8, 2023",
      readTime: "7 min read",
      category: "Mobile",
      tags: ["Mobile", "UX", "Design"],
      views: "9.7K",
      likes: "723",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Fintech Partnerships: Building the Financial Ecosystem",
      excerpt: "Strategic alliances between traditional banks and fintech startups are creating unprecedented innovation opportunities.",
      author: "Lisa Wang",
      authorTitle: "Strategy Lead",
      date: "December 5, 2023",
      readTime: "6 min read",
      category: "Partnerships",
      tags: ["Partnerships", "Strategy", "Innovation"],
      views: "11.2K",
      likes: "834",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Biometric Authentication: The Password-Free Future",
      excerpt: "Revolutionary biometric technologies are making passwords obsolete while enhancing security and user experience.",
      author: "Alex Thompson",
      authorTitle: "Biometrics Engineer",
      date: "December 3, 2023",
      readTime: "9 min read",
      category: "Security",
      tags: ["Biometrics", "Authentication", "Future"],
      views: "14.6K",
      likes: "1.1K",
      icon: <Shield className="w-6 h-6" />
    },
    {
      title: "Quantum Computing in Finance: Unprecedented Speed",
      excerpt: "How quantum computing is revolutionizing transaction processing, risk analysis, and financial modeling.",
      author: "Maria Garcia",
      authorTitle: "Quantum Researcher",
      date: "December 1, 2023",
      readTime: "11 min read",
      category: "Technology",
      tags: ["Quantum", "Computing", "Innovation"],
      views: "16.3K",
      likes: "1.3K",
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const categories = ["All", "Technology", "Security", "Crypto", "Mobile", "Partnerships"];

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-primary w-full overflow-hidden relative" ref={containerRef}>
      <AnimatedBackground variant="purple" />
      
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Enhanced Hero Section */}
      <section className={`${styles.flexCenter} ${styles.paddingY} bg-transparent min-h-[80vh] relative z-10`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <div className="text-center relative">
            {/* Floating decorative elements */}
            <motion.div
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                scale: { duration: 5, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-16 -left-16 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
            />
            <motion.div
              animate={{ 
                rotate: [360, 0],
                y: [-10, 10, -10]
              }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" },
                y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-xl"
            />

            <div className="blog-hero-elements">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 mb-8"
              >
                <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
                <span className="text-purple-200 font-medium">Knowledge Hub</span>
              </motion.div>

              <EnhancedTypography variant="h1" className="mb-8">
                HooBank Insights
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
                  Stay ahead of the curve with our 
                  <span className="text-purple-400 font-semibold"> expert analysis</span>, 
                  <span className="text-blue-400 font-semibold"> industry insights</span>, and 
                  <span className="text-pink-400 font-semibold"> innovative perspectives</span> 
                  on the future of digital finance.
                </EnhancedTypography>
              </motion.div>
              
              {/* Enhanced Search Bar */}
              <motion.div 
                className="max-w-2xl mx-auto relative mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl blur-xl group-focus-within:blur-2xl transition-all duration-300"></div>
                  <div className="relative flex items-center">
                    <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-dimWhite w-6 h-6 z-10" />
                    <input
                      type="text"
                      placeholder="Search for insights, trends, and expert analysis..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-black-gradient-2 border border-[#3F3E45] rounded-2xl py-5 pl-16 pr-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-all duration-300 text-lg backdrop-blur-sm"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-3 bg-gradient-to-r from-secondary to-blue-400 rounded-xl text-primary font-semibold"
                    >
                      Search
                    </motion.button>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <motion.div 
                className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-12"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1 }}
              >
                {[
                  { number: "200+", label: "Expert Articles" },
                  { number: "50K+", label: "Monthly Readers" },
                  { number: "95%", label: "Reader Satisfaction" }
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-1">
                      {stat.number}
                    </div>
                    <div className="text-dimWhite text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Categories Filter */}
      <section className={`${styles.paddingX} mb-16 relative z-10`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 rounded-2xl font-semibold transition-all duration-300 relative overflow-hidden group ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-secondary to-blue-400 text-primary shadow-lg'
                    : 'bg-black-gradient-2 border border-[#3F3E45] text-dimWhite hover:border-secondary hover:text-secondary'
                }`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="absolute inset-0 bg-white/10 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                <span className="relative z-10">{category}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Post */}
      <section className={`${styles.paddingX} mb-20 relative z-10`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <motion.div
            className="relative group"
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            ref={el => cardsRef.current[0] = el}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
            <div className="relative bg-black-gradient-2 rounded-3xl overflow-hidden border border-[#3F3E45] hover:border-secondary transition-all duration-500 backdrop-blur-sm">
              <div className="lg:flex">
                <div className="lg:w-1/2 relative overflow-hidden">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-80 lg:h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-2 bg-gradient-to-r from-secondary to-blue-400 text-primary text-sm font-bold rounded-full">
                      ⭐ Featured
                    </span>
                  </div>
                </div>
                <div className="lg:w-1/2 p-10">
                  <div className="flex items-center mb-6">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm font-medium rounded-full mr-4">
                      {featuredPost.category}
                    </span>
                    <div className="flex gap-2">
                      {featuredPost.tags.map((tag, index) => (
                        <span key={index} className="text-xs text-dimWhite bg-black/30 px-2 py-1 rounded">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <EnhancedTypography 
                    variant="h3" 
                    className="mb-6 group-hover:text-secondary transition-colors duration-300 leading-tight"
                    animated={false}
                  >
                    {featuredPost.title}
                  </EnhancedTypography>
                  
                  <p className="text-dimWhite mb-8 leading-relaxed text-lg">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-secondary to-blue-400 rounded-full flex items-center justify-center text-primary font-bold mr-4">
                        {featuredPost.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-semibold">{featuredPost.author}</div>
                        <div className="text-dimWhite text-sm">{featuredPost.authorTitle}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-dimWhite text-sm space-x-6">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        <span>{featuredPost.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{featuredPost.readTime}</span>
                      </div>
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-2" />
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                    
                    <motion.button
                      whileHover={{ scale: 1.05, x: 5 }}
                      className="flex items-center text-secondary hover:text-white transition-colors font-semibold"
                    >
                      Read More <ArrowRight className="w-5 h-5 ml-2" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Blog Posts Grid */}
      <section className={`${styles.paddingX} ${styles.paddingY} relative z-10 reveal-section`}>
        <div className={`${styles.boxWidth} mx-auto`}>
          <div className="text-center mb-16">
            <EnhancedTypography variant="h2" className="mb-6 reveal-up">
              Latest Expert Analysis
            </EnhancedTypography>
            <EnhancedTypography 
              variant="body" 
              gradient={false} 
              className="text-dimWhite max-w-3xl mx-auto reveal-up"
              animated={false}
            >
              Dive deep into industry trends, emerging technologies, and strategic insights from our team of financial experts.
            </EnhancedTypography>
          </div>

          <AnimatePresence mode="wait">
            <motion.div 
              className="grid lg:grid-cols-3 md:grid-cols-2 gap-8"
              layout
            >
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.title}
                  ref={el => cardsRef.current[index + 1] = el}
                  className="group relative"
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-blue-500/5 to-pink-500/10 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
                  <div className="relative bg-black-gradient-2 rounded-3xl p-8 border border-[#3F3E45] hover:border-secondary transition-all duration-500 cursor-pointer h-full flex flex-col backdrop-blur-sm">
                    {/* Category and Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center">
                        <div className="text-secondary mr-3 p-2 bg-secondary/10 rounded-lg group-hover:bg-secondary/20 transition-colors duration-300">
                          {post.icon}
                        </div>
                        <span className="text-secondary text-sm font-medium">{post.category}</span>
                      </div>
                      <div className="flex gap-2">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <span key={tagIndex} className="text-xs text-dimWhite bg-black/30 px-2 py-1 rounded">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <EnhancedTypography 
                      variant="h4" 
                      className="mb-4 group-hover:text-secondary transition-colors duration-300 flex-grow-0"
                      animated={false}
                    >
                      {post.title}
                    </EnhancedTypography>
                    
                    <p className="text-dimWhite mb-8 leading-relaxed flex-grow">
                      {post.excerpt}
                    </p>
                    
                    {/* Author info */}
                    <div className="flex items-center mb-6">
                      <div className="w-10 h-10 bg-gradient-to-r from-secondary to-blue-400 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                        {post.author.charAt(0)}
                      </div>
                      <div>
                        <div className="text-white font-medium text-sm">{post.author}</div>
                        <div className="text-dimWhite text-xs">{post.authorTitle}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between pt-4 border-t border-[#3F3E45]">
                      <div className="text-dimWhite text-xs space-y-1">
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 mr-2" />
                          <span>{post.date}</span>
                        </div>
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <Clock className="w-3 h-3 mr-1" />
                            <span>{post.readTime}</span>
                          </div>
                          <div className="flex items-center">
                            <Eye className="w-3 h-3 mr-1" />
                            <span>{post.views}</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-3">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-dimWhite hover:text-red-400 transition-colors"
                        >
                          <Heart className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="text-dimWhite hover:text-blue-400 transition-colors"
                        >
                          <Share className="w-4 h-4" />
                        </motion.button>
                        <ArrowRight className="w-5 h-5 text-secondary group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <EnhancedTypography variant="h3" className="mb-4">
                No articles found
              </EnhancedTypography>
              <p className="text-dimWhite">Try adjusting your search or category filter.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Newsletter Signup */}
      <section className={`${styles.paddingX} ${styles.paddingY} bg-black-gradient relative z-10 overflow-hidden`}>
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-64 h-64 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className={`${styles.boxWidth} mx-auto text-center relative`}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="bg-black-gradient-2 rounded-3xl p-16 border border-[#3F3E45] relative overflow-hidden">
              {/* Animated particles */}
              {Array.from({ length: 15 }, (_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-secondary/60 rounded-full"
                  animate={{
                    y: [0, -150, 0],
                    x: [0, Math.random() * 200 - 100, 0],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    delay: i * 0.4,
                    ease: "easeInOut"
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`
                  }}
                />
              ))}

              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30 mb-8"
                >
                  <Star className="w-5 h-5 text-purple-400 mr-2" />
                  <span className="text-purple-200 font-medium">Expert Insights</span>
                </motion.div>

                <EnhancedTypography variant="h2" className="mb-8">
                  Stay Ahead of Financial Innovation
                </EnhancedTypography>
                
                <EnhancedTypography 
                  variant="body" 
                  gradient={false} 
                  className="text-dimWhite mb-12 max-w-3xl mx-auto"
                  animated={false}
                >
                  Join 50,000+ finance professionals who rely on our expert analysis. Get weekly insights on emerging trends, 
                  regulatory changes, and breakthrough technologies delivered directly to your inbox.
                </EnhancedTypography>

                <motion.div 
                  className="max-w-lg mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="relative flex-1">
                      <input
                        type="email"
                        placeholder="Enter your professional email"
                        className="w-full bg-black-gradient border border-[#3F3E45] rounded-2xl py-4 px-6 text-white placeholder-dimWhite focus:border-secondary focus:outline-none transition-colors"
                      />
                    </div>
                    <motion.button
                      whileHover={{ 
                        scale: 1.05,
                        boxShadow: "0 20px 40px rgba(147, 51, 234, 0.4)"
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="px-8 py-4 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl text-white font-bold relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <span className="relative z-10">Subscribe</span>
                    </motion.button>
                  </div>
                  <p className="text-dimWhite text-sm mt-4">
                    Free forever. Unsubscribe anytime. No spam, just valuable insights.
                  </p>
                </motion.div>
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

export default Blog; 