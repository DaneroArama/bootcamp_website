import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const CondolenceSection = () => {
  const [activeTab, setActiveTab] = useState("message"); // "message", "donate", "updates"
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Function to fetch donations from Google Sheets
  const fetchDonations = async (forceRefresh = false) => {
    if ((activeTab === "donate" && donations.length === 0) || forceRefresh) {
      setIsLoading(true);
      try {
        // Your Google Sheet ID
        const sheetId = "19BagGy-fxXm6oiUKqjObgQgTvhWB7agb5oJamMJp6Vc";
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv`;
        
        const response = await fetch(url);
        const text = await response.text();
        
        // Parse CSV data
        const rows = text.split('\n').map(row => row.split(','));
        const headers = rows[0];
        
        // Convert to array of objects (skip header row)
        const donationData = rows.slice(1).map(row => {
          const donation = {};
          headers.forEach((header, index) => {
            let value = row[index]?.replace(/"/g, '') || '';
            donation[header.replace(/"/g, '')] = value;
          });
          return donation;
        }).filter(donation => donation.Date && donation.Name); // Filter out empty rows
        
        setDonations(donationData);
      } catch (error) {
        console.error("Error fetching donations:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  // Fetch donations when tab changes to donate
  useEffect(() => {
    fetchDonations();
  }, [activeTab]);

  return (
    <section className="py-16 md:py-24 bg-black relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-gray-900 to-black opacity-80"></div>
      <div className="absolute top-40 left-10 w-64 h-64 rounded-full bg-gray-800 opacity-10 blur-3xl"></div>
      <div className="absolute bottom-40 right-10 w-80 h-80 rounded-full bg-gray-800 opacity-10 blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto pt-10 px-4 relative z-10">
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
        
        {/* Navigation Tabs */}
        <div className="flex border-b border-gray-700 mb-8">
          <button 
            onClick={() => setActiveTab("message")}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === "message" 
                ? "text-white border-b-2 border-yellow-500" 
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Message
          </button>
          <button 
            onClick={() => {
              setActiveTab("donate");
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`px-6 py-3 font-medium text-sm transition-colors ${
              activeTab === "donate" 
                ? "text-white border-b-2 border-yellow-500" 
                : "text-gray-400 hover:text-gray-300"
            }`}
          >
            Ways to Help
          </button>
        </div>
        
        {/* Message Tab Content */}
        {activeTab === "message" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-800 mb-10"
          >
            <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
              We extend our deepest condolences to everyone affected by the recent earthquake in Myanmar. Our hearts go out to those who have lost loved ones, homes, and livelihoods in this devastating tragedy.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl mb-6 leading-relaxed">
              In light of these difficult circumstances, we have made the decision to postpone our THINK, SPRINT, DESIGN bootcamp until the situation stabilizes and our community has had time to heal and rebuild.
            </p>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              During this challenging time, we believe our focus should be on supporting recovery efforts and standing in solidarity with those who are suffering. We will announce new dates for our bootcamp when it is appropriate to do so.
            </p>

            {/* Ways to Help Button */}
            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setActiveTab("donate");
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="px-6 py-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg transition-colors inline-flex items-center gap-2 text-sm font-medium"
              >
                Ways to Help
              </button>
            </div>
          </motion.div>
        )}
        
        {/* Donation Tab Content */}
        {activeTab === "donate" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-yellow-500 pl-4">Support Relief Efforts</h3>
              
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Your support can make a significant difference in helping those affected by the earthquake. All donations will be used directly for emergency relief operations, including providing
                temporary shelter, food, clean water, and medical assistance to affected communities.
              </p>

              {/* Note */}
              <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-700/50 my-6">
                <h4 className="text-yellow-400 font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Important Note
                </h4>
                <p className="text-sm text-gray-300">
                  Please include 'EQ - (Your Name)' in your transfer note to help us track donations. If you prefer not to include your name, kindly inform us in advance.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Myanmar Payment Methods */}
                <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-yellow-600/50 transition-colors">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                      <span className="text-yellow-400">🇲🇲</span>
                    </span>
                    Myanmar Accounts
                  </h4>
                  <div className="space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                      <h5 className="font-medium text-white mb-2">Ma Wai Yi Mon Soe</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">KBZ Pay:</span>
                          <span className="text-yellow-400 break-all">09260567664</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">Wave Pay:</span>
                          <span className="text-yellow-400 break-all">09260567664</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">AYA Pay:</span>
                          <span className="text-yellow-400 break-all">09260567664</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">CB Pay:</span>
                          <span className="text-yellow-400 break-all">09260567664</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-white mb-2">Ko Htet Aung Shine</h5>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">KBZ Bank:</span>
                          <span className="text-yellow-400 break-all">12751112701565501</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">AYA Bank:</span>
                          <span className="text-yellow-400 break-all">40033130921</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-medium text-white mb-2">Ma Nwe Oo Lwin</h5>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[70px]">KBZ Pay:</span>
                          <span className="text-yellow-400 break-all">09254997284 </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Thailand Payment Methods */}
                <div className="bg-gray-800/80 p-6 rounded-lg border border-gray-700 hover:border-yellow-600/50 transition-colors">
                  <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-yellow-500/20 flex items-center justify-center mr-3">
                      <span className="text-yellow-400">🇹🇭</span>
                    </span>
                    Thailand Accounts
                  </h4>
                  <div className="space-y-4">
                    <div className="border-b border-gray-700 pb-4">
                      <h5 className="font-medium text-white mb-2">Ko La Min Thaw</h5>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-1 min-w-[90px]">Bangkok Bank:</span>
                          <span className="text-yellow-400 break-all">1494167180</span>
                        </div>
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[90px]">PromptPay:</span>
                          <span className="text-yellow-400 break-all">0964528735</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="font-medium text-white mb-2">Ma Thet Htar Swe</h5>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div className="flex items-center">
                          <span className="text-gray-400 mr-2 min-w-[90px]">TTB Bank:</span>
                          <span className="text-yellow-400 break-all">8072095378</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-700/50 mt-6">
                <h4 className="text-yellow-400 font-medium mb-2 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  Important Note
                </h4>
                <p className="text-sm text-gray-300">
                  Please include 'EQ - (Your Name)' in your transfer note to help us track donations. If you prefer not to include your name, kindly inform us in advance.
                </p>
              </div>
            </div>
            
            {/* Donation List */}
            <div className="bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-xl border border-gray-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white border-l-4 border-yellow-500 pl-4">Generous Donors</h3>
                <button 
                  onClick={() => fetchDonations(true)}
                  className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-sm text-white rounded-lg transition-colors inline-flex items-center gap-2 border border-gray-700"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                  <span>Refresh</span>
                </button>
              </div>
              
              {isLoading ? (
                <div className="flex justify-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-yellow-400"></div>
                </div>
              ) : donations.length > 0 ? (
                <div>
                  {/* Desktop Table View */}
                  <div className="hidden md:block relative">
                    <div className="overflow-x-auto overflow-y-auto max-h-[600px] rounded-lg border border-gray-700 scrollbar-none">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800 sticky top-0 z-10">
                          <tr>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-6 py-4 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="bg-gray-800/30 divide-y divide-gray-700">
                          {donations.map((donation, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'}>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{donation.Date}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-white">{donation.Name}</td>
                              <td className="px-6 py-4 whitespace-nowrap text-sm text-yellow-400 text-right">{donation.Amount}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    {donations.length > 10 && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none flex justify-center items-end pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Mobile Card View */}
                  <div className="md:hidden relative">
                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-gray-800/50">
                      {donations.map((donation, index) => (
                        <div key={index} className="bg-gray-800/30 p-4 rounded-lg border border-gray-700">
                          <div className="flex justify-between items-center mb-2">
                            <span className="text-sm text-gray-300">{donation.Date}</span>
                            <span className="text-sm text-yellow-400 font-medium">{donation.Amount}</span>
                          </div>
                          <div className="text-white font-medium">{donation.Name}</div>
                        </div>
                      ))}
                    </div>
                    {donations.length > 2 && (
                      <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none flex justify-center items-end pb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-400 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <div className="bg-gray-800/30 rounded-lg border border-gray-700 p-12 text-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                  <p className="text-gray-400 text-lg">No donations recorded yet.</p>
                  <p className="text-gray-500 mt-2">Be the first to contribute to this cause.</p>
                </div>
              )}
              
              <div className="mt-6 text-center">
                <p className="text-gray-400 text-sm">
                  We sincerely thank all donors for their generous contributions to the earthquake relief efforts.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
      
      {/* Add scroll to top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 bg-yellow-600 hover:bg-yellow-700 text-white rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Scroll to top"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </section>
  );
};

export default CondolenceSection;