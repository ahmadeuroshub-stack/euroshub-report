import React from 'react';

const SlideExecutionEnablers = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Strategic Execution Enablers
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Foundational requirements for success
                    </p>
                </div>
            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col items-center justify-start md:justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full h-auto items-center px-6 md:px-12">
                    <div className="h-auto flex flex-col justify-center text-center lg:text-left">
                        <h2 className="text-4xl md:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
                            Key Enablers for <br /><span className="text-blue-400">Execution</span>
                        </h2>
                        <p className="text-gray-300 text-base md:text-lg leading-relaxed border-l-0 lg:border-l-4 border-blue-500 lg:pl-6">
                            Foundational pillars required to unlock the revenue potential.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full h-auto">
                        <div className="glass-card p-4 flex items-center gap-4 border-l-4 border-emerald-500">
                            <div className="bg-emerald-900/30 p-3 rounded-full text-emerald-400 border border-emerald-500/20 shrink-0">
                                <i className="fas fa-file-contract text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold mb-1">Standard SOPs</h3>
                                <p className="text-gray-400 text-xs">For time tracking</p>
                            </div>
                        </div>
                        <div className="glass-card p-4 flex items-center gap-4 border-l-4 border-amber-500">
                            <div className="bg-amber-900/30 p-3 rounded-full text-amber-400 border border-amber-500/20 shrink-0">
                                <i className="fas fa-crosshairs text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold mb-1">Utilization Targets</h3>
                                <p className="text-gray-400 text-xs">Floor of 60%</p>
                            </div>
                        </div>
                        <div className="glass-card p-4 flex items-center gap-4 border-l-4 border-blue-500">
                            <div className="bg-blue-900/30 p-3 rounded-full text-blue-400 border border-blue-500/20 shrink-0">
                                <i className="fas fa-calendar-check text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold mb-1">Weekly Reviews</h3>
                                <p className="text-gray-400 text-xs">Capacity stand-ups</p>
                            </div>
                        </div>
                        <div className="glass-card p-4 flex items-center gap-4 border-l-4 border-purple-500">
                            <div className="bg-purple-900/30 p-3 rounded-full text-purple-400 border border-purple-500/20 shrink-0">
                                <i className="fas fa-trophy"></i>
                            </div>
                            <div>
                                <h3 className="text-white text-lg font-bold mb-1">Incentive Alignment</h3>
                                <p className="text-gray-400 text-xs">Reward billable hours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideExecutionEnablers;
