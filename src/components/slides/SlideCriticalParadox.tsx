import React from 'react';

const SlideCriticalParadox = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Critical Issues: The Paradox
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        High Work Volume vs. Low Tracked Output
                    </p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col items-center justify-center">
                <div className="w-full max-w-5xl">
                    <div className="flex flex-col md:flex-row items-center justify-center mb-12 gap-8">
                        {/* Paradox Left */}
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-white mb-2">26 Staff</div>
                            <div className="text-gray-400 uppercase tracking-widest text-sm">Full-Time Personnel</div>
                        </div>
                        {/* Paradox Divider */}
                        <div className="hidden md:flex flex-col items-center px-4">
                            <div className="h-12 w-0.5 bg-red-500/50"></div>
                            <div className="bg-gray-900 border border-red-500 p-2 rounded-full z-10 my-2">
                                <i className="fas fa-not-equal text-red-500 text-2xl"></i>
                            </div>
                            <div className="h-12 w-0.5 bg-red-500/50"></div>
                        </div>
                        {/* Paradox Right */}
                        <div className="text-center">
                            <div className="text-5xl md:text-6xl font-bold text-blue-500 mb-2">8 IDs</div>
                            <div className="text-blue-300 uppercase tracking-widest text-sm">Active Upwork Profiles</div>
                        </div>
                    </div>

                    <div className="paradox-divider w-full"></div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Cause 1 */}
                        <div className="issue-card p-5 rounded-r-xl mb-2 flex items-start space-x-4 flex-1 mx-2">
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 border border-gray-700">
                                <i className="fas fa-ghost text-red-400 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Ghost Work</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Paid revisions and internal edits are often done offline to save "hours," artificially lowering our utilization stats.
                                </p>
                            </div>
                        </div>
                        {/* Cause 2 */}
                        <div className="issue-card p-5 rounded-r-xl mb-2 flex items-start space-x-4 flex-1 mx-2">
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 border border-gray-700">
                                <i className="fas fa-user-slash text-orange-400 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">ID Scarcity</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Ratio of 1 ID per 3.25 Employees. New talent has nowhere to log hours, creating a tracking black hole.
                                </p>
                            </div>
                        </div>
                        {/* Cause 3 */}
                        <div className="issue-card p-5 rounded-r-xl mb-2 flex items-start space-x-4 flex-1 mx-2">
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 border border-gray-700">
                                <i className="fas fa-clipboard-list text-blue-400 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">Administrative Overhead</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Internal reporting, Slack communication, and stand-ups consume ~20% of the workday which is currently untracked.
                                </p>
                            </div>
                        </div>
                        {/* Cause 4 */}
                        <div className="issue-card p-8 rounded-r-xl flex items-start space-x-5 flex-1 mx-2">
                            <div className="bg-gray-800 p-2 rounded-lg flex-shrink-0 border border-gray-700">
                                <i className="fas fa-users-viewfinder text-purple-400 text-xl"></i>
                            </div>
                            <div>
                                <h4 className="text-white font-bold text-lg mb-1">The "Shared ID" Bottleneck</h4>
                                <p className="text-gray-300 text-sm leading-relaxed">
                                    Multiple staff members funneling work through a single ID creates logistical bottlenecks.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideCriticalParadox;
