import { motion } from "framer-motion";

const CondolenceSection = () => {
  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-gray-800 opacity-10 blur-3xl"></div>
      
      <div className="max-w-4xl mx-auto pt-10 px-4 relative z-10">
        <div className="border-l-4 border-gray-500 pl-6 mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-6 font-malinton text-white"
          >
            Our Heartfelt <span className="text-gray-400">Condolences</span>
          </motion.h2>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-800 mb-10"
        >
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            We extend our deepest condolences to everyone affected by the recent earthquake in Myanmar. Our hearts go out to those who have lost loved ones, homes, and livelihoods in this devastating tragedy.
          </p>
          
          <p className="text-gray-300 text-lg mb-6 leading-relaxed">
            In light of these difficult circumstances, we have made the decision to postpone our think, sprint, design bootcamp until the situation stabilizes and our community has had time to heal and rebuild.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            During this challenging time, we believe our focus should be on supporting recovery efforts and standing in solidarity with those who are suffering. We will announce new dates for our bootcamp when it is appropriate to do so.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#support"
            className="bg-gray-800 hover:bg-gray-700 text-white py-4 px-8 rounded-lg font-medium flex items-center justify-center gap-2 border border-gray-700 transition-colors"
          >
            <span>Ways to Help</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </motion.a>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            href="#updates"
            className="bg-transparent text-white py-4 px-8 rounded-lg font-medium flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 transition-colors"
          >
            <span>Stay Updated</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </motion.a>
        </div>
      </div>
      
      {/* Optional: Candle or memorial visual element */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black to-transparent"></div>
    </section>
  );
};

export default CondolenceSection;