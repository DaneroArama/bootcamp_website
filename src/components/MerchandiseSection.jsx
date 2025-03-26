import { motion } from "framer-motion";
import { useState } from "react";
import Totebag from "../img/Product/tote bag.png";
import Model1 from "../img/Product/Model2.png";
import Model2 from "../img/Product/Model1.png";

const MerchandiseSection = () => {
    const [activeImage, setActiveImage] = useState(0);
    const [quantity, setQuantity] = useState(1);

    // Product data for tote bag
    const toteProduct = {
        id: 1,
        name: "Think, Sprint, Design Tote Bag",
        description: "Exclusive limited edition tote bag featuring custom artwork from our design bootcamp. Made with premium materials for durability and style.",
        price: 55000,
        images: [
            { src: Totebag, alt: "Tote bag product image" },
            { src: Model1, alt: "Model with tote bag - For illustration purposes only" },
            { src: Model2, alt: "Model with tote bag - For illustration purposes only" }
        ],
        features: [
            "Premium canvas material",
            "Reinforced handles",
            "Interior pocket",
            "Limited edition design"
        ]
    };

    const incrementQuantity = () => {
        setQuantity(prev => Math.min(prev + 1, 10));
    };

    const decrementQuantity = () => {
        setQuantity(prev => Math.max(prev - 1, 1));
    };

    return (
        <section className="py-24 bg-transparent relative overflow-hidden" id="merchandise">
            {/* Background elements */}
            <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-purple-500 opacity-10 blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-yellow-300 opacity-10 blur-3xl"></div>
            
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block px-6 py-2 bg-gradient-to-r from-purple-500 to-purple-700 rounded-full text-white font-medium mb-4"
                    >
                        EXCLUSIVE MERCHANDISE
                    </motion.div>
                    
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-bold mb-6 font-malinton text-white"
                    >
                        Limited Edition <span className="text-[#EBFF00]">Tote Bag</span>
                    </motion.h2>
                    
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-white text-lg opacity-80"
                    >
                        Carry your design passion with our exclusive Think, Sprint, Design tote bag.
                        Each bag is a statement piece that celebrates creativity and innovation.
                    </motion.p>
                </div>

                {/* Product Display */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
                    {/* Product Image Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-7 relative"
                    >
                            <div className="relative w-[500px] h-[500px] mx-auto rounded-xl overflow-hidden border-2 border-white">
                                <img 
                                    src={toteProduct.images[activeImage].src} 
                                    alt={toteProduct.images[activeImage].alt}
                                    className="w-full h-full object-cover bg-black"
                                />
                                
                                {/* Watermark for model photos */}
                                {activeImage > 0 && (
                                    <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 px-3 py-1 rounded-lg text-white text-xs">
                                        For illustration purposes only
                                    </div>
                                )}
                            </div>
                        
                        {/* Thumbnail navigation */}
                        <div className="flex gap-3 mt-4 justify-center">
                            {toteProduct.images.map((image, idx) => (
                                <button 
                                    key={idx} 
                                    onClick={() => setActiveImage(idx)}
                                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                        activeImage === idx 
                                            ? 'border-[#EBFF00] scale-110' 
                                            : 'border-transparent opacity-70 hover:opacity-100'
                                    }`}
                                >
                                    <img 
                                        src={image.src} 
                                        alt={`Thumbnail ${idx + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                        
                        {/* Decorative elements */}
                        <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-[#EBFF00] rounded-full opacity-30 blur-md"></div>
                        <div className="absolute -top-8 -right-8 w-32 h-32 bg-purple-500 rounded-full opacity-30 blur-md"></div>
                    </motion.div>

                    {/* Product Details Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="lg:col-span-5 flex flex-col justify-center"
                    >
                        <div className="bg-black bg-opacity-40 backdrop-blur-sm p-8 rounded-2xl border border-gray-800">
                            <h3 className="text-3xl font-bold mb-4 font-malinton text-white">
                                {toteProduct.name}
                            </h3>
                            
                            <p className="mb-6 text-white opacity-80">
                                {toteProduct.description}
                            </p>
                            
                            <div className="flex items-center mb-8">
                                <span className="text-3xl font-bold mr-4 text-[#EBFF00]">
                                    KS {toteProduct.price.toLocaleString()}
                                </span>
                                <span className="bg-gradient-to-r from-green-500 to-green-600 text-white px-3 py-1 rounded-full text-sm">
                                    Pre-order Available
                                </span>
                            </div>
                            
                            {/* Features List */}
                            <div className="mb-8">
                                <h4 className="text-sm font-medium text-white mb-3 uppercase tracking-wider">Features</h4>
                                <ul className="grid grid-cols-1 gap-3">
                                    {toteProduct.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-white">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-[#EBFF00] flex items-center justify-center mr-3">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-black" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                </svg>
                                            </span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            {/* Pre-order Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="w-full bg-gradient-to-r from-[#EBFF00] to-yellow-400 text-black py-4 px-8 rounded-lg font-bold flex items-center justify-center gap-2 mb-6 shadow-lg shadow-yellow-500/20"
                            >
                                <span>Pre-order Now</span>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                                </svg>
                            </motion.button>
                            
                            {/* Pre-order Info */}
                            <div className="p-4 border border-yellow-500/30 rounded-lg bg-black bg-opacity-30">
                                <p className="text-white text-sm">
                                    <span className="text-[#EBFF00] font-bold">Note:</span> Pre-orders close on March 25th. 
                                    Tote bags will be available for pickup at the event registration desk. 
                                    Limited quantity available!
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default MerchandiseSection;