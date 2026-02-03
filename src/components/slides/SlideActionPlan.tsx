import React from 'react';

const SlideActionPlan = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex justify-between items-end border-b border-gray-800 z-10">
                <div>
                    <h1 className="font-playfair text-4xl text-white font-bold tracking-tight mb-2">
                        90-Day Action Plan
                    </h1>
                    <p className="text-blue-400 text-lg font-light tracking-wide">
                        Roadmap to 100% Tracking & Utilization
                    </p>
                </div>
            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col items-center justify-center">
                <div className="w-full max-w-6xl space-y-8">
                    {/* Phase 1 */}
                    <div className="glass-card p-6 border-l-4 border-blue-500 relative">
                        <div className="absolute -left-3 top-6 w-6 h-6 bg-blue-500 rounded-full border-4 border-gray-900"></div>
                        <h3 className="text-xl font-bold text-white mb-1">Phase 1: Stabilization (Weeks 1-4)</h3>
                        <p className="text-blue-300 text-sm mb-4">Focus: Stop the bleeding. Capture the "Ghost Work".</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-blue-400"></i>
                                <span className="text-gray-300 text-sm">Implement "Log Everything" SOP</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-blue-400"></i>
                                <span className="text-gray-300 text-sm">Audit all "Offline" hours</span>
                            </div>
                        </div>
                    </div>

                    {/* Phase 2 */}
                    <div className="glass-card p-6 border-l-4 border-indigo-500 relative">
                        <div className="absolute -left-3 top-6 w-6 h-6 bg-indigo-500 rounded-full border-4 border-gray-900"></div>
                        <h3 className="text-xl font-bold text-white mb-1">Phase 2: Optimization (Weeks 5-8)</h3>
                        <p className="text-indigo-300 text-sm mb-4">Focus: Fill the buckets. Maximize ID Utilization.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-indigo-400"></i>
                                <span className="text-gray-300 text-sm">Move "Shadow Admin" tasks to underutilized VA IDs</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-indigo-400"></i>
                                <span className="text-gray-300 text-sm">Launch Digital Marketing Bundles</span>
                            </div>
                        </div>
                    </div>

                    {/* Phase 3 */}
                    <div className="glass-card p-6 border-l-4 border-emerald-500 relative">
                        <div className="absolute -left-3 top-6 w-6 h-6 bg-emerald-500 rounded-full border-4 border-gray-900"></div>
                        <h3 className="text-xl font-bold text-white mb-1">Phase 3: Scale (Weeks 9-12)</h3>
                        <p className="text-white text-sm mb-4">Focus: Expand the ceiling.</p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-emerald-400"></i>
                                <span className="text-gray-300 text-sm">Evaluate headcount expansion vs ID limits</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <i className="fas fa-check-circle text-emerald-400"></i>
                                <span className="text-gray-300 text-sm">Full 100% Tracking Compliance</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideActionPlan;
