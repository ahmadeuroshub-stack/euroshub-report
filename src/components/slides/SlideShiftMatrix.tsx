import React from 'react';

const SlideShiftMatrix = () => {
    return (
        <div className="slide-container bg-grid">
            {/* Header */}
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Shift Availability Matrix
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Operational Capacity by Time Zone & Shift • January 2026
                    </p>
                </div>

            </header>
            {/* Main Content */}
            <main className="flex-1 px-12 py-10 flex flex-col justify-start md:justify-center overflow-y-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 h-full md:max-h-[500px]">
                    {/* Morning Shift */}
                    <div className="glass-card rounded-xl border-t-4 border-yellow-500 flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i className="fas fa-sun text-8xl text-yellow-400"></i>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-yellow-900/30 flex items-center justify-center border border-yellow-500/30 text-yellow-400">
                                    <i className="fas fa-coffee"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Morning Shift</h3>
                                    <p className="text-yellow-400/80 text-xs uppercase tracking-wider">08:00 - 16:00</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <span className="block text-4xl font-playfair font-bold text-white mb-1">57 <span className="text-lg font-sans font-normal text-gray-400">hrs</span></span>
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Weekly Capacity</span>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-300 text-sm font-semibold mb-2">Personnel:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700">SEO Team</span>
                                </div>
                            </div>
                        </div>
                        <div className="recommendation-box p-4 mt-auto">
                            <p className="text-yellow-400 text-xs font-bold uppercase mb-1"><i className="fas fa-lightbulb mr-1"></i> Recommendation</p>
                            <p className="text-gray-300 text-sm leading-snug">Open for SEO & Marketing client acquisition.</p>
                        </div>
                    </div>
                    {/* Evening Shift */}
                    <div className="glass-card rounded-xl border-t-4 border-indigo-500 flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i className="fas fa-cloud-sun text-8xl text-indigo-400"></i>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-indigo-900/30 flex items-center justify-center border border-indigo-500/30 text-indigo-400">
                                    <i className="fas fa-sunset"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Evening Shift</h3>
                                    <p className="text-indigo-400/80 text-xs uppercase tracking-wider">16:00 - 00:00</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <span className="block text-4xl font-playfair font-bold text-white mb-1">35 <span className="text-lg font-sans font-normal text-white">hrs</span></span>
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Weekly Capacity</span>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-300 text-sm font-semibold mb-2">Personnel:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs border border-gray-700">Wasiq</span>
                                    <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs border border-gray-700">Ilsa</span>
                                </div>
                            </div>
                        </div>
                        <div className="recommendation-box p-4 mt-auto">
                            <p className="text-indigo-400 text-xs font-bold uppercase mb-1"><i className="fas fa-exchange-alt mr-1"></i> Recommendation</p>
                            <p className="text-gray-300 text-sm leading-snug">Ideal for VA/Admin overflow and timezone overlap.</p>
                        </div>
                    </div>
                    {/* Night Shift */}
                    <div className="glass-card rounded-xl border-t-4 border-blue-400 flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i className="fas fa-moon text-8xl text-blue-400"></i>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-blue-900/30 flex items-center justify-center border border-blue-400/30 text-blue-300">
                                    <i className="fas fa-stars"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Night Shift</h3>
                                    <p className="text-blue-400/80 text-xs uppercase tracking-wider">00:00 - 08:00</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <span className="block text-4xl font-playfair font-bold text-white mb-1">32 <span className="text-lg font-sans font-normal text-gray-400">hrs</span></span>
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Weekly Capacity</span>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-300 text-sm font-semibold mb-2">Personnel:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700">Ahmad</span>
                                </div>
                            </div>
                        </div>
                        <div className="recommendation-box p-4 mt-auto">
                            <p className="text-blue-400 text-xs font-bold uppercase mb-1"><i className="fas fa-user-clock mr-1"></i> Recommendation</p>
                            <p className="text-gray-300 text-sm leading-snug">Sell 1 Full-Time Night VA contract immediately.</p>
                        </div>
                    </div>
                    {/* Flexible Shift */}
                    <div className="glass-card rounded-xl border-t-4 border-emerald-500 flex flex-col relative overflow-hidden group">
                        <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                            <i className="fas fa-layer-group text-8xl text-emerald-400"></i>
                        </div>
                        <div className="p-6 flex-1 flex flex-col">
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="w-10 h-10 rounded-full bg-emerald-900/30 flex items-center justify-center border border-emerald-500/30 text-emerald-400">
                                    <i className="fas fa-shuffle"></i>
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-white">Flexible / Task</h3>
                                    <p className="text-emerald-400/80 text-xs uppercase tracking-wider">Project Based</p>
                                </div>
                            </div>
                            <div className="mb-6">
                                <span className="block text-4xl font-playfair font-bold text-white mb-1">126 <span className="text-lg font-sans font-normal text-gray-400">hrs</span></span>
                                <span className="text-xs text-gray-400 uppercase tracking-wide">Weekly Capacity</span>
                            </div>
                            <div className="mb-4">
                                <p className="text-gray-300 text-sm font-semibold mb-2">Personnel:</p>
                                <div className="flex flex-wrap gap-2">
                                    <span className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs border border-gray-700">Social Media Team</span>
                                </div>
                            </div>
                        </div>
                        <div className="recommendation-box p-4 mt-auto">
                            <p className="text-emerald-400 text-xs font-bold uppercase mb-1"><i className="fas fa-project-diagram mr-1"></i> Recommendation</p>
                            <p className="text-gray-300 text-sm leading-snug">Wide open for project-based SMM work.</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideShiftMatrix;
