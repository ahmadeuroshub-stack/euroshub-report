import React from 'react';

const SlideUpworkCapacity = () => {
    return (
        <div className="slide-container bg-grid">
            {/* Header */}
            <header className="w-full px-12 pt-8 pb-4 flex justify-between items-end border-b border-gray-800">
                <div>
                    <h1 className="font-playfair text-4xl text-white font-bold tracking-tight mb-2">
                        Upwork ID Capacity Analysis
                    </h1>
                    <p className="text-blue-400 text-lg font-light tracking-wide">
                        Utilization Dashboard & Available Headroom • January 2026
                    </p>
                </div>

            </header>
            {/* Main Content */}
            <main className="flex-1 px-12 py-8 flex flex-col space-y-6 overflow-y-auto">
                {/* Top Row: High & Medium Utilization */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Saira (High) */}
                    <div className="glass-card p-6 rounded-xl border-l-4 border-high relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold text-xl">Saira</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">VA / Support</p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-high font-mono">65%</span>
                                <p className="text-gray-300 text-[10px] uppercase">Utilized</p>
                            </div>
                        </div>
                        <div className="w-full progress-track h-3 rounded-full mb-4 overflow-hidden">
                            <div className="h-full utilization-high rounded-full" style={{ width: '65%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm border-t border-gray-700 pt-3">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs">Tracked</span>
                                <span className="text-white font-bold">94 hrs</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-gray-400 text-xs">Available</span>
                                <span className="text-high font-bold">50 hrs</span>
                            </div>
                        </div>
                    </div>
                    {/* Asif (Med) */}
                    <div className="glass-card p-6 rounded-xl border-l-4 border-med relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold text-xl">Asif</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">Account Mgmt</p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-med font-mono">57%</span>
                                <p className="text-gray-300 text-[10px] uppercase">Utilized</p>
                            </div>
                        </div>
                        <div className="w-full progress-track h-3 rounded-full mb-4 overflow-hidden">
                            <div className="h-full utilization-med rounded-full" style={{ width: '57%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm border-t border-gray-700 pt-3">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs">Tracked</span>
                                <span className="text-white font-bold">82 hrs</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-gray-400 text-xs">Available</span>
                                <span className="text-med font-bold">62 hrs</span>
                            </div>
                        </div>
                    </div>
                    {/* Waqar (Med) */}
                    <div className="glass-card p-6 rounded-xl border-l-4 border-med relative overflow-hidden">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-white font-bold text-xl">Waqar</h3>
                                <p className="text-gray-400 text-xs uppercase tracking-wide">VA / Tech</p>
                            </div>
                            <div className="text-right">
                                <span className="text-2xl font-bold text-med font-mono">52%</span>
                                <p className="text-gray-300 text-[10px] uppercase">Utilized</p>
                            </div>
                        </div>
                        <div className="w-full progress-track h-3 rounded-full mb-4 overflow-hidden">
                            <div className="h-full utilization-med rounded-full" style={{ width: '52%' }}></div>
                        </div>
                        <div className="flex justify-between text-sm border-t border-gray-700 pt-3">
                            <div className="flex flex-col">
                                <span className="text-gray-400 text-xs">Tracked</span>
                                <span className="text-white font-bold">75 hrs</span>
                            </div>
                            <div className="flex flex-col text-right">
                                <span className="text-gray-400 text-xs">Available</span>
                                <span className="text-med font-bold">69 hrs</span>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Bottom Row: Low Utilization & Dormant */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
                    {/* Laiba (Low/Med) */}
                    <div className="glass-card p-4 rounded-xl border-l-4 border-low relative overflow-hidden">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-white font-bold text-lg">Laiba</h3>
                            <span className="text-low font-mono font-bold">44%</span>
                        </div>
                        <div className="w-full progress-track h-2 rounded-full mb-3 overflow-hidden">
                            <div className="h-full utilization-low rounded-full" style={{ width: '44%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Tracked: <span className="text-white font-bold">63h</span></span>
                            <span className="text-gray-400">Open: <span className="text-low font-bold">81h</span></span>
                        </div>
                    </div>
                    {/* Syeda (Low) */}
                    <div className="glass-card p-4 rounded-xl border-l-4 border-low relative overflow-hidden">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-white font-bold text-lg">Syeda</h3>
                            <span className="text-low font-mono font-bold">31%</span>
                        </div>
                        <div className="w-full progress-track h-2 rounded-full mb-3 overflow-hidden">
                            <div className="h-full utilization-low rounded-full" style={{ width: '31%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Tracked: <span className="text-white font-bold">44h</span></span>
                            <span className="text-gray-400">Open: <span className="text-low font-bold">100h</span></span>
                        </div>
                    </div>
                    {/* Kainat (Low) */}
                    <div className="glass-card p-4 rounded-xl border-l-4 border-low relative overflow-hidden">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-white font-bold text-lg">Kainat</h3>
                            <span className="text-low font-mono font-bold">24%</span>
                        </div>
                        <div className="w-full progress-track h-2 rounded-full mb-3 overflow-hidden">
                            <div className="h-full utilization-low rounded-full" style={{ width: '24%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Tracked: <span className="text-white font-bold">35h</span></span>
                            <span className="text-gray-400">Open: <span className="text-low font-bold">109h</span></span>
                        </div>
                    </div>
                    {/* Jibran (New/Low) */}
                    <div className="glass-card p-4 rounded-xl border-l-4 border-amber-500 relative overflow-hidden">
                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-white font-bold text-lg">Jibran</h3>
                            <span className="text-amber-400 font-mono font-bold">20%</span>
                        </div>
                        <div className="w-full progress-track h-2 rounded-full mb-3 overflow-hidden">
                            <div className="h-full bg-amber-500 rounded-full" style={{ width: '20%' }}></div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-400">Tracked: <span className="text-white font-bold">8h</span></span>
                            <span className="text-gray-400">Open: <span className="text-amber-400 font-bold">32h</span></span>
                        </div>
                    </div>
                    {/* Zain (Dormant) */}
                    <div className="glass-card p-4 rounded-xl border-2 border-dashed border-red-500/50 bg-red-900/10 relative overflow-hidden">

                        <div className="flex justify-between items-center mb-3">
                            <h3 className="text-red-300 font-bold text-lg">Zain</h3>
                            <span className="text-red-400 font-mono font-bold">0%</span>
                        </div>
                        <div className="w-full progress-track h-2 rounded-full mb-3 overflow-hidden">
                            <div className="h-full bg-transparent"></div>
                        </div>
                        <div className="flex justify-between text-xs">
                            <span className="text-gray-300">Tracked: <span className="text-gray-400">0h</span></span>
                            <span className="text-gray-400">Open: <span className="text-red-400 font-bold">144h</span></span>
                        </div>
                    </div>
                </div>
                {/* Summary Insight */}
                <div className="glass-card rounded-xl p-4 flex flex-col md:flex-row items-center justify-between border-t border-blue-500/30 space-y-4 md:space-y-0 text-center md:text-left">
                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
                        <div className="flex flex-col px-4 md:border-r border-gray-700">
                            <span className="text-gray-400 text-xs uppercase tracking-widest">Total Weekly Capacity</span>
                            <span className="text-white font-playfair text-2xl font-bold">
                                1,008 <span className="text-sm font-sans font-normal text-gray-300">hrs</span>
                            </span>
                        </div>
                        <div className="flex flex-col px-4 border-r border-gray-700">
                            <span className="text-gray-400 text-xs uppercase tracking-widest">Total Tracked</span>
                            <span className="text-blue-400 font-playfair text-2xl font-bold">
                                399 <span className="text-sm font-sans font-normal text-gray-300">hrs</span>
                            </span>
                        </div>
                        <div className="flex flex-col px-4">
                            <span className="text-gray-400 text-xs uppercase tracking-widest">Unused "Headroom"</span>
                            <span className="text-white font-playfair text-2xl font-bold">
                                609 <span className="text-sm font-sans font-normal text-gray-300">hrs</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex items-center text-sm text-gray-300 bg-blue-900/30 px-4 py-2 rounded-lg border border-blue-500/30">
                        <i className="fas fa-info-circle text-blue-400 mr-2"></i>
                        <span>IDs can support another <strong>4 full-time</strong> staff members immediately.</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideUpworkCapacity;
