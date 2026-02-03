import React from 'react';

const SlideGrowthStrategy = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Growth Strategy & Capacity Optimization
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Maximizing Upwork ID Utilization for Q1 2026
                    </p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col items-center justify-center relative">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl relative z-10">
                    {/* Strategy 1: The Quick Win */}
                    <div className="glass-card p-8 rounded-2xl border-t-4 border-emerald-500 flex flex-col relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <i className="fas fa-bolt text-9xl text-emerald-400"></i>
                        </div>
                        <div className="mb-6 relative">
                            <span className="inline-block px-3 py-1 bg-emerald-900/40 text-emerald-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-emerald-500/20">
                                Priority 1
                            </span>
                            <h3 className="text-3xl font-playfair font-bold text-white mb-2">The Quick Win</h3>
                            <p className="text-emerald-200/80 text-sm font-medium">Digital Marketing Bundles</p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            Utilize the <strong className="text-white">213 hours</strong> of open capacity in the Digital Marketing team. Create standardized "SEO + Social Media" packages and sell them aggressively to existing design clients.
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-700/50">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400">Potential Revenue</span>
                            </div>
                        </div>
                    </div>
                    {/* Strategy 2: The Scale Play */}
                    <div className="glass-card p-8 rounded-2xl border-t-4 border-blue-500 flex flex-col relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <i className="fas fa-expand-arrows-alt text-9xl text-blue-400"></i>
                        </div>
                        <div className="mb-6 relative">
                            <span className="inline-block px-3 py-1 bg-blue-900/40 text-blue-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-blue-500/20">
                                Priority 2
                            </span>
                            <h3 className="text-3xl font-playfair font-bold text-white mb-2">The Scale Play</h3>
                            <p className="text-blue-200/80 text-sm font-medium">Maximize VA IDs</p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            Fill the <strong className="text-white">352 hours</strong> of open VA/Support capacity. Target "Night Shift" contracts to utilize available slots on Ahmad's and other underutilized IDs.
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-700/50">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400">Potential Revenue</span>
                            </div>
                        </div>
                    </div>
                    {/* Strategy 3: The Efficiency Fix */}
                    <div className="glass-card p-8 rounded-2xl border-t-4 border-amber-500 flex flex-col relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                        <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                            <i className="fas fa-cogs text-9xl text-amber-400"></i>
                        </div>
                        <div className="mb-6 relative">
                            <span className="inline-block px-3 py-1 bg-amber-900/40 text-amber-400 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3 border border-amber-500/20">
                                Priority 3
                            </span>
                            <h3 className="text-3xl font-playfair font-bold text-white mb-2">The Efficiency Fix</h3>
                            <p className="text-amber-200/80 text-sm font-medium">Consolidate & Track</p>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            Stop "Ghost Work". Enforce strict time-tracking for all internal tasks and revisions. Move "Offline" work to "Online" to build ID history and visibility.
                        </p>
                        <div className="mt-auto pt-4 border-t border-gray-700/50">
                            <div className="flex justify-between items-center text-xs">
                                <span className="text-gray-400">Visibility Gain</span>
                                <span className="text-amber-400 font-bold text-lg">+20% Hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideGrowthStrategy;
