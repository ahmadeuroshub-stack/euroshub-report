import React from 'react';

const ExecutiveSummarySlide = () => {
    return (
        <div className="slide-container bg-grid">
            {/* Header */}
            <header className="w-full px-12 pt-8 pb-4 flex justify-between items-end border-b border-gray-800">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Executive Workforce & Capacity Analysis
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Workforce Analysis & Strategic Outlook • February 2026
                    </p>
                </div>

            </header>
            {/* Main Content Area */}
            <main className="flex-1 px-12 py-8 flex flex-col justify-start md:justify-between space-y-6 md:space-y-0">
                {/* Key Metrics Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:h-64 mb-6">
                    {/* Metric 1: Operational Stability */}
                    <div className="glass-card rounded-xl p-6 border-t-4 border-blue-500 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-4 right-4 text-blue-400 opacity-20">
                            <i className="fas fa-server text-6xl"></i>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Current Capacity</p>
                            <div className="flex items-baseline space-x-2">
                                <h2 className="text-5xl font-bold text-white font-playfair">1,688</h2>
                                <span className="text-xl text-gray-300">hrs</span>
                            </div>
                        </div>
                        <div className="mt-4">
                            <p className="text-blue-200 text-sm leading-relaxed">
                                <span className="font-bold text-white">7 Active IDs</span> showing stable month-over-month performance. Core operational baseline established.
                            </p>
                        </div>
                    </div>
                    {/* Metric 2: The Critical Gap */}
                    <div className="glass-card rounded-xl p-6 border-t-4 border-red-500 relative overflow-hidden flex flex-col justify-between">
                        <div className="absolute top-4 right-4 text-red-400 opacity-20">
                            <i className="fas fa-triangle-exclamation text-6xl"></i>
                        </div>
                        <div>
                            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold mb-2">Operational Risk</p>
                            <h2 className="text-5xl font-bold text-red-400 font-playfair">66%</h2>
                            <p className="text-red-300 text-lg font-medium mt-1">Untracked "Ghost Work"</p>
                        </div>
                        <div className="mt-4">
                            <div className="w-full bg-gray-700 h-2 rounded-full mb-2">
                                <div className="bg-red-500 h-2 rounded-full" style={{ width: '66%' }}></div>
                            </div>
                            <p className="text-gray-300 text-xs">
                                Majority of paid graphic design work is currently invisible to tracking systems.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Strategic Priorities Section */}
                <div className="glass-card rounded-xl p-6 border-l-4 border-indigo-500 flex-1 flex flex-col">
                    <div className="flex items-center mb-4 border-b border-gray-700 pb-3">
                        <i className="fas fa-bullseye text-indigo-400 text-xl mr-3"></i>
                        <h3 className="text-xl font-bold text-white font-playfair">Immediate Strategic Priorities</h3>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 h-full items-center py-4 md:py-0">
                        {/* Priority 1 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center font-bold border border-blue-500">
                                1
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Fix Tracking Systems</h4>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Implement mandatory "Upwork-first" logging for all revisions and internal tasks to eliminate ghost work.
                                </p>
                            </div>
                        </div>
                        {/* Priority 2 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-blue-300 flex items-center justify-center font-bold border border-blue-500">
                                2
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Optimize Utilization</h4>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Fill the ~78% unused capacity in Graphic Design IDs and ~49% in VA IDs with billable contracts.
                                </p>
                            </div>
                        </div>
                        {/* Priority 3 */}
                        <div className="flex items-start space-x-4">
                            <div className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-900 text-white flex items-center justify-center font-bold border border-blue-500">
                                3
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-1">Activate Bench</h4>
                                <p className="text-sm text-gray-400 leading-snug">
                                    Package and sell Digital Marketing services to utilize the 213 available hours in the department.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ExecutiveSummarySlide;
