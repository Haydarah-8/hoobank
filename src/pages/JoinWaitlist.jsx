import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, 
  CheckCircle, 
  ArrowRight, 
  Users,
  Sparkles,
  Bell,
  Shield,
  Home,
  Star
} from 'lucide-react';
import styles from '../style';
import { Navbar, Footer } from '../components';

const JoinWaitlist = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [waitlistCount, setWaitlistCount] = useState(12847);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Waitlist signup:', formData);
    setIsSubmitted(true);
    setIsSubmitting(false);
    setWaitlistCount(prev => prev + 1);
  };

  if (isSubmitted) {
    return (
      <div className="bg-primary w-full overflow-hidden relative min-h-screen">
        <div className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>

        <section className={`${styles.flexCenter} min-h-[80vh] relative z-10`}>
          <div className={`${styles.boxWidth} ${styles.paddingX}`}>
            <div className="text-center max-w-3xl mx-auto">
              {/* Success Animation */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, ease: "backOut" }}
                className="relative mb-12"
              >
                <div className="w-32 h-32 bg-gradient-to-br from-secondary via-blue-400 to-purple-500 rounded-full flex items-center justify-center mx-auto relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-secondary via-blue-400 to-purple-500 rounded-full animate-ping opacity-20"></div>
                  <div className="absolute inset-2 bg-primary rounded-full"></div>
                  <CheckCircle className="w-16 h-16 text-secondary relative z-10" />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <h1 className="text-5xl md:text-7xl font-black mb-6 bg-gradient-to-r from-white via-secondary to-blue-400 bg-clip-text text-transparent leading-tight">
                  🎉 You're In!
                </h1>
                
                <p className="text-dimWhite/90 text-2xl mb-8 leading-relaxed font-light max-w-2xl mx-auto">
                  Welcome <span className="text-secondary font-semibold">{formData.firstName}</span>! 
                  You've successfully joined <span className="text-secondary font-semibold">{waitlistCount.toLocaleString()}+</span> visionaries 
                  pioneering the future of finance.
                </p>

                <div className="bg-black-gradient-2 rounded-3xl p-8 border border-[#3F3E45] mb-12 relative overflow-hidden backdrop-blur-xl">
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 via-blue-400/5 to-purple-400/5"></div>
                  <div className="relative z-10">
                    <h3 className="text-white text-2xl font-bold mb-6 flex items-center justify-center">
                      <Sparkles className="w-7 h-7 text-secondary mr-3" />
                      What Happens Next?
                    </h3>
                    
                    <div className="grid md:grid-cols-2 gap-8">
                      <div className="flex items-start text-dimWhite">
                        <div className="w-14 h-14 bg-gradient-to-r from-secondary to-blue-400 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0">
                          <Bell className="w-7 h-7 text-primary" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg mb-2">Weekly Updates</p>
                          <p className="text-dimWhite/80 leading-relaxed">We'll send you exclusive progress updates and behind-the-scenes insights every week.</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start text-dimWhite">
                        <div className="w-14 h-14 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mr-5 flex-shrink-0">
                          <Star className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <p className="font-bold text-white text-lg mb-2">VIP Early Access</p>
                          <p className="text-dimWhite/80 leading-relaxed">Get priority access to HooBank when we launch, plus exclusive features and bonuses.</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 p-6 bg-gradient-to-r from-secondary/10 to-blue-400/10 rounded-2xl border border-secondary/20">
                      <p className="text-white font-semibold text-lg mb-2">🚀 We're launching soon!</p>
                      <p className="text-dimWhite/90">
                        Keep an eye on your inbox at <span className="text-secondary font-medium">{formData.email}</span>. 
                        We'll be back with amazing updates very soon.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 246, 255, 0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => window.location.href = '/'}
                    className="group px-10 py-5 bg-gradient-to-r from-secondary via-blue-400 to-purple-500 rounded-2xl text-primary font-bold text-lg inline-flex items-center relative overflow-hidden shadow-2xl"
                  >
                    <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <Home className="mr-3 w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
                    <span className="relative z-10">Back to Home</span>
                  </motion.button>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({ email: '', firstName: '' });
                    }}
                    className="px-8 py-4 border-2 border-secondary/50 rounded-2xl text-secondary font-semibold text-lg hover:bg-secondary/10 transition-all duration-300 inline-flex items-center"
                  >
                    <ArrowRight className="mr-2 w-5 h-5 rotate-180" />
                    Join Another Person
                  </motion.button>
                </div>

                <div className="mt-8">
                  <p className="text-dimWhite/60 text-sm font-light flex items-center justify-center">
                    <Shield className="w-4 h-4 mr-2" />
                    <span>✨ Your data is secure • No spam ever • Unsubscribe anytime</span>
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter} relative z-10`}>
          <div className={`${styles.boxWidth}`}>
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary w-full overflow-hidden relative min-h-screen">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-primary to-blue-900/20" style={{ zIndex: -1 }}></div>
      
      {/* Modern floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-3 h-3 bg-secondary/20 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute top-40 right-20 w-2 h-2 bg-blue-400/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-4 h-4 bg-purple-400/15 rounded-full blur-sm animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-2 h-2 bg-secondary/25 rounded-full animate-ping"></div>
        <div className="absolute top-60 left-1/2 w-1 h-1 bg-blue-400/40 rounded-full animate-bounce"></div>
      </div>
      
      {/* Navbar */}
      <div className={`${styles.paddingX} ${styles.flexCenter} relative z-10`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>

      {/* Main Content */}
      <section className={`${styles.flexCenter} min-h-[85vh] relative z-10 ${styles.paddingY}`}>
        <div className={`${styles.boxWidth} ${styles.paddingX}`}>
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Hero Content */}
            <div className="mb-20">
              {/* Modern Status Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-secondary/10 via-blue-400/10 to-purple-400/10 rounded-full border border-secondary/20 backdrop-blur-xl mb-12 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-blue-400/5 animate-pulse"></div>
                <Users className="w-5 h-5 text-secondary mr-3 relative z-10" />
                <span className="text-secondary font-semibold tracking-wide relative z-10">EXCLUSIVE EARLY ACCESS</span>
                <div className="ml-3 w-2 h-2 bg-secondary rounded-full animate-pulse relative z-10"></div>
              </motion.div>

              {/* Enhanced Main Heading */}
              <motion.h1 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="text-6xl md:text-8xl font-black mb-8 leading-none"
              >
                <span className="bg-gradient-to-r from-white via-secondary to-blue-400 bg-clip-text text-transparent block mb-2">
                  Join the
                </span>
                <span className="bg-gradient-to-r from-secondary via-blue-400 to-purple-500 bg-clip-text text-transparent block relative">
                  Revolution
                  <div className="absolute -top-4 -right-8 w-8 h-8 bg-gradient-to-r from-secondary to-blue-400 rounded-full opacity-20 animate-ping"></div>
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-dimWhite/90 text-2xl leading-relaxed mb-12 max-w-3xl mx-auto font-light"
              >
                Be among the <span className="text-secondary font-semibold">first 1,000</span> pioneers to experience 
                the next generation of digital banking.
              </motion.p>

              {/* Enhanced Waitlist Counter */}
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                className="bg-black-gradient-2 rounded-3xl p-8 border border-[#3F3E45] backdrop-blur-xl inline-block relative overflow-hidden group max-w-md mx-auto"
                whileHover={{ scale: 1.05, borderColor: "rgba(0, 246, 255, 0.5)" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 via-blue-400/5 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-14 h-14 bg-gradient-to-r from-secondary to-blue-400 rounded-2xl flex items-center justify-center mr-4 relative">
                      <Users className="w-7 h-7 text-primary" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    <span className="text-dimWhite text-lg font-medium">Pioneers Waiting</span>
                  </div>
                  <div className="text-5xl font-black bg-gradient-to-r from-secondary via-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">
                    {waitlistCount.toLocaleString()}+
                  </div>
                  <p className="text-dimWhite/70 text-sm font-light">Limited spots remaining</p>
                </div>
              </motion.div>
            </div>

            {/* Enhanced Form */}
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="relative max-w-2xl mx-auto"
            >
              {/* Form Background Effects */}
              <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-blue-400/20 to-purple-400/20 rounded-3xl blur-3xl opacity-50"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-secondary via-blue-400 to-purple-500 rounded-3xl opacity-20 blur-sm"></div>
              
              <div className="relative bg-black-gradient-2 rounded-3xl p-10 border border-[#3F3E45] backdrop-blur-xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-transparent to-blue-400/5 rounded-3xl"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <h2 className="text-3xl font-black text-white mb-3">
                      <span className="bg-gradient-to-r from-white to-secondary bg-clip-text text-transparent">
                        Secure Your Access
                      </span>
                    </h2>
                    <p className="text-dimWhite/80 text-lg font-light">
                      Join visionaries reshaping the future of finance
                    </p>
                    <div className="w-20 h-1 bg-gradient-to-r from-secondary to-blue-400 rounded-full mx-auto mt-4"></div>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Enhanced First Name Input */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="relative z-10 w-full bg-black/60 border-2 border-[#3F3E45] rounded-2xl py-5 px-6 text-white placeholder-dimWhite/50 focus:border-secondary focus:outline-none transition-all duration-500 text-lg backdrop-blur-sm group-hover:border-secondary/50 group-hover:bg-black/80"
                          placeholder="First name"
                          required
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-secondary/5 to-blue-400/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                      
                      {/* Enhanced Email Input */}
                      <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-secondary/10 to-blue-400/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        <Mail className="absolute left-5 top-1/2 transform -translate-y-1/2 text-dimWhite/50 w-6 h-6 transition-colors duration-300 group-hover:text-secondary z-20" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="relative z-10 w-full bg-black/60 border-2 border-[#3F3E45] rounded-2xl py-5 pl-16 pr-6 text-white placeholder-dimWhite/50 focus:border-secondary focus:outline-none transition-all duration-500 text-lg backdrop-blur-sm group-hover:border-secondary/50 group-hover:bg-black/80"
                          placeholder="Email address"
                          required
                        />
                        <div className="absolute top-0 left-0 w-full h-full rounded-2xl bg-gradient-to-r from-secondary/5 to-blue-400/5 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Enhanced Guarantee Badge */}
                    <div className="bg-gradient-to-r from-secondary/15 via-blue-400/15 to-purple-400/15 border border-secondary/30 rounded-2xl p-6 backdrop-blur-sm relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-secondary/5 to-blue-400/5 animate-pulse opacity-50"></div>
                      <div className="relative z-10 flex items-center justify-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-secondary to-blue-400 rounded-full flex items-center justify-center mr-4">
                          <Sparkles className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-secondary font-bold text-lg block">Lifetime Priority Access</span>
                          <span className="text-dimWhite/70 text-sm">Guaranteed early access to all features</span>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ 
                        scale: isSubmitting ? 1 : 1.02, 
                        boxShadow: "0 25px 50px rgba(0, 246, 255, 0.5)" 
                      }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className="group w-full py-6 bg-gradient-to-r from-secondary via-blue-400 to-purple-500 rounded-2xl text-primary font-black text-xl flex items-center justify-center relative overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed shadow-2xl"
                    >
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                      <AnimatePresence mode="wait">
                        {isSubmitting ? (
                          <motion.div
                            key="loading"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center relative z-10"
                          >
                            <div className="w-6 h-6 border-3 border-primary border-t-transparent rounded-full animate-spin mr-4"></div>
                            <span>Securing Your Spot...</span>
                          </motion.div>
                        ) : (
                          <motion.div
                            key="submit"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            className="flex items-center relative z-10"
                          >
                            <span>Join the Revolution</span>
                            <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </form>

                  <div className="mt-8 text-center">
                    <p className="text-dimWhite/60 text-sm font-light flex items-center justify-center">
                      <Shield className="w-4 h-4 mr-2" />
                      <span>✨ No spam • Unsubscribe anytime • Your data is secure</span>
                    </p>
                  </div>
                </div>
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

export default JoinWaitlist; 