import { motion } from "framer-motion";
import { useState, useEffect } from "react"; // Update import

const CondolenceSection = () => {
  const [showDonationPopup, setShowDonationPopup] = useState(false);
  const [showUpdatesPopup, setShowUpdatesPopup] = useState(false);
  const [donations, setDonations] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  // Function to fetch donations from Google Sheets
  const fetchDonations = async () => {
    if (showDonationPopup) {
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

  // Fetch donations when popup is opened
  useEffect(() => {
    if (showDonationPopup) {
      fetchDonations();
    }
  }, [showDonationPopup]);

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
            In light of these difficult circumstances, we have made the decision to postpone our THINK, SPRINT, DESIGN bootcamp until the situation stabilizes and our community has had time to heal and rebuild.
          </p>
          
          <p className="text-gray-300 text-lg leading-relaxed">
            During this challenging time, we believe our focus should be on supporting recovery efforts and standing in solidarity with those who are suffering. We will announce new dates for our bootcamp when it is appropriate to do so.
          </p>
        </motion.div>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <motion.button // Changed from motion.a to motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowDonationPopup(true)} // Changed from href to onClick
            className="bg-gray-800 hover:bg-gray-700 text-white py-4 px-8 rounded-lg font-medium flex items-center justify-center gap-2 border border-gray-700 transition-colors"
          >
            <span>Ways to Help</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
            </svg>
          </motion.button>
          
          <motion.button // Change from motion.a to motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowUpdatesPopup(true)} // Change from href to onClick
            className="bg-transparent text-white py-4 px-8 rounded-lg font-medium flex items-center justify-center gap-2 border border-gray-700 hover:border-gray-500 transition-colors"
          >
            <span>Stay Updated</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
            </svg>
          </motion.button>
        </div>
      </div>
    
      {/* Donation Popup */}
      {showDonationPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowDonationPopup(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button 
                onClick={() => setShowDonationPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="border-l-4 border-yellow-500 pl-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold font-malinton text-white">
                  Support <span className="text-yellow-400">Relief Efforts</span>
                </h2>
              </div>

              <div className="text-gray-300 space-y-6">
                <p className="leading-relaxed">
                  Your support can make a significant difference in helping those affected by the earthquake. All donations will be used directly for emergency relief operations, including providing
                  temporary shelter, food, clean water, and medical assistance to affected communities. Below are verified accounts where you can contribute to the relief efforts:
                </p>

                {/* Bank Transfer Details */}
                <div className="space-y-4">
                  {/* Myanmar Payment Methods */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-white font-semibold mb-2">Ma Wai Yi Mon Soe (Myanmar)</h3>
                    <div className="space-y-2 text-sm">
                      <p>KBZ Pay: <span className="text-yellow-400">09260567664</span></p>
                      <p>Wave Pay: <span className="text-yellow-400">09260567664</span></p>
                      <p>AYA Pay: <span className="text-yellow-400">09260567664</span></p>
                      <p>CB Pay: <span className="text-yellow-400">09260567664</span></p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-white font-semibold mb-2">Ko Htet Aung Shine (Myanmar)</h3>
                    <div className="space-y-2 text-sm">
                      <p>KBZ Bank: <span className="text-yellow-400">12751112701565501</span></p>
                      <p>AYA Bank: <span className="text-yellow-400">40033130921</span></p>
                    </div>
                  </div>

                  {/* Thailand Payment Methods */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-white font-semibold mb-2">Ko La Min Thaw (Thailand)</h3>
                    <div className="space-y-2 text-sm">
                      <p>Bangkok Bank: <span className="text-yellow-400">149-4-167180</span></p>
                      <p>PromptPay: <span className="text-yellow-400">0964528735</span></p>
                    </div>
                  </div>

                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-white font-semibold mb-2">Ma Thet Htar Swe (Thailand)</h3>
                    <div className="space-y-2 text-sm">
                      <p>TTB Bank: <span className="text-yellow-400">807-2-09537-8</span></p>
                    </div>
                  </div>
                </div>

                {/* Donation List from Google Sheets */}
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-white mb-4 border-b border-gray-700 pb-2">Recent Donations</h3>
                  
                  {isLoading ? (
                    <div className="flex justify-center py-8">
                      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-yellow-400"></div>
                    </div>
                  ) : donations.length > 0 ? (
                    <div className="bg-gray-800/50 rounded-lg border border-gray-700 overflow-hidden">
                      <table className="min-w-full divide-y divide-gray-700">
                        <thead className="bg-gray-800">
                          <tr>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Date</th>
                            <th scope="col" className="px-4 py-3 text-left text-xs font-medium text-gray-400 uppercase tracking-wider">Name</th>
                            <th scope="col" className="px-4 py-3 text-right text-xs font-medium text-gray-400 uppercase tracking-wider">Amount</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-700">
                          {donations.map((donation, index) => (
                            <tr key={index} className={index % 2 === 0 ? 'bg-gray-800/30' : 'bg-gray-800/10'}>
                              <td className="px-4 py-2 text-sm text-gray-300">{donation.Date}</td>
                              <td className="px-4 py-2 text-sm text-gray-300">{donation.Name}</td>
                              <td className="px-4 py-2 text-sm text-yellow-400 text-right">
                                {donation.Amount}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  ) : (
                    <p className="text-gray-400 text-center py-4">No donations recorded yet.</p>
                  )}
                  
                  <div className="mt-4 text-center">
                    <button 
                      onClick={fetchDonations}
                      className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-sm text-white rounded-lg transition-colors inline-flex items-center gap-2"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                      <span>Refresh Donations</span>
                    </button>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-yellow-900/30 p-4 rounded-lg border border-yellow-700/50">
                  <h4 className="text-yellow-400 font-medium mb-2">Important Note</h4>
                  <p className="text-sm">
                    Please include "EQ - (Donated Person Name)" in your transfer note.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
      
      {/* Updates Popup */}
      {showUpdatesPopup && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setShowUpdatesPopup(false)}
        >
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20 }}
            className="bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button 
                onClick={() => setShowUpdatesPopup(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="border-l-4 border-blue-500 pl-4 mb-6">
                <h2 className="text-2xl md:text-3xl font-bold font-malinton text-white">
                  Stay <span className="text-blue-400">Updated</span>
                </h2>
              </div>

              <div className="text-gray-300 space-y-6">
                <p className="leading-relaxed">
                  To receive updates about the bootcamp and our community's response to the earthquake:
                </p>

                <div className="space-y-4">
                  {/* Social Media Updates */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-white font-semibold mb-2">Follow Our Social Media</h3>
                    <div className="space-y-2 text-sm">
                      <p>Facebook: <span className="text-blue-400">@uxmmyanmar</span></p>
                      <p>Instagram: <span className="text-blue-400">@uxmm.official</span></p>
                      <p>Telegram Channel: <span className="text-blue-400">t.me/uxmmyanmar</span></p>
                    </div>
                  </div>

                  {/* Email Updates */}
                  <div className="bg-gray-800 p-4 rounded-lg border border-gray-700">
                    <h3 className="text-white font-semibold mb-2">Join Our Mailing List</h3>
                    <form className="space-y-3">
                      <input 
                        type="email" 
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                      />
                      <button 
                        type="submit"
                        className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                      >
                        Subscribe for Updates
                      </button>
                    </form>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="bg-blue-900/30 p-4 rounded-lg border border-blue-700/50">
                  <h4 className="text-blue-400 font-medium mb-2">What to Expect</h4>
                  <ul className="text-sm space-y-2">
                    <li>• New bootcamp dates and registration details</li>
                    <li>• Community support initiatives</li>
                    <li>• Relief effort updates</li>
                    <li>• Ways to help affected communities</li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};

export default CondolenceSection;