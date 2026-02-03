import React from 'react';

const SlideKeyEnablers = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Key Enablers for Execution
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Operational Framework & Standards
                    </p>
                </div>

            </header>
            <main className="flex-1 px-12 py-6 flex items-center justify-start md:justify-center overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full h-auto max-w-6xl mx-auto">
                    {/* Card 1 */}
                    <div className="glass-card p-6 rounded-2xl border-t-4 border-blue-500 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-400 text-3xl mb-3 border border-blue-500/30 glow-blue">
                            <i className="fas fa-file-contract"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Standard SOPs</h3>
                        <p className="text-blue-200 text-base font-medium">For time tracking & reporting</p>
                        <p className="text-gray-400 text-sm mt-2 px-4">
                            Unified protocols ensuring every billable minute is captured and categorized correctly.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="glass-card p-6 rounded-2xl border-t-4 border-emerald-500 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-400 text-3xl mb-3 border border-emerald-500/30 glow-emerald">
                            <i className="fas fa-crosshairs"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Utilization Targets</h3>
                        <p className="text-white text-base font-medium">Floor of 60% per active ID</p>
                        <p className="text-gray-400 text-sm mt-2 px-4">
                            Minimum baseline utilization requirement to maintain active status and eligibility.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="glass-card p-6 rounded-2xl border-t-4 border-purple-500 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-400 text-3xl mb-3 border border-purple-500/30 glow-blue">
                            <i className="fas fa-calendar-check"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Weekly Reviews</h3>
                        <p className="text-purple-200 text-base font-medium">Monday capacity stand-ups</p>
                        <p className="text-gray-400 text-sm mt-2 px-4">
                            Mandatory synchronization to align available hours with incoming project backlog.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="glass-card p-6 rounded-2xl border-t-4 border-amber-500 flex flex-col justify-center items-center text-center transform hover:scale-105 transition-transform duration-300">
                        <div className="w-16 h-16 rounded-full bg-amber-900/50 flex items-center justify-center text-amber-400 text-3xl mb-3 border border-amber-500/30 glow-amber">
                            <i className="fas fa-trophy"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">Incentive Alignment</h3>
                        <p className="text-white text-base font-medium">Bonus for billable hours</p>
                        <p className="text-gray-400 text-sm mt-2 px-4">
                            Direct financial rewards tied to exceeding utilization thresholds.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideKeyEnablers;
