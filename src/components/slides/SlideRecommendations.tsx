import React from 'react';

const SlideRecommendations = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Strategic Recommendations
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Three-Pronged Approach for Revenue Optimization
                    </p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 flex flex-col gap-6 relative z-10 overflow-y-auto">
                {/* Top Row: 3 Priorities */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto">
                    {/* Priority 1 */}
                    <div className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col glow-blue border-t-4 border-t-blue-500">
                        <div className="priority-number absolute right-[-10px] top-[-20px] text-white opacity-5 text-9xl font-playfair font-bold">01</div>
                        <div className="icon-circle bg-blue-900/50 text-blue-400 border border-blue-500/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6">
                            <i className="fas fa-eye"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Make Invisible Work Visible</h3>
                        <p className="text-blue-200 font-semibold mb-4 text-sm uppercase tracking-wide">The Foundation</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            Currently, 66% of output is "ghost work." Mandate strict Upwork tracking for all revisions, administrative tasks, and internal meetings. If it happens, it must be logged.
                        </p>
                        <div className="bg-blue-900/30 border border-blue-500/30 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-blue-400 font-bold text-sm">
                                <i className="fas fa-check-circle"></i> Action:
                            </div>
                            <p className="text-white text-xs mt-1">Implement "Log Everything" Policy</p>
                        </div>
                    </div>
                    {/* Priority 2 */}
                    <div className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col glow-emerald border-t-4 border-t-emerald-500">
                        <div className="priority-number absolute right-[-10px] top-[-20px] text-white opacity-5 text-9xl font-playfair font-bold">02</div>
                        <div className="icon-circle bg-emerald-900/50 text-emerald-400 border border-emerald-500/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6">
                            <i className="fas fa-rocket"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Activate Dormant Resources</h3>
                        <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">The Expansion</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            The Digital Marketing bench has 213h/week of open capacity. Transform this overhead into revenue by packaging SEO and Social Media bundles for immediate sale.
                        </p>
                        <div className="bg-emerald-900/30 border border-emerald-500/30 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-emerald-400 font-bold text-sm">
                                <i className="fas fa-check-circle"></i> Action:
                            </div>
                            <p className="text-white text-xs mt-1">Launch Marketing Packages</p>
                        </div>
                    </div>
                    {/* Priority 3 */}
                    <div className="glass-card rounded-2xl p-8 relative overflow-hidden flex flex-col glow-amber border-t-4 border-t-amber-500">
                        <div className="priority-number absolute right-[-10px] top-[-20px] text-white opacity-5 text-9xl font-playfair font-bold">03</div>
                        <div className="icon-circle bg-amber-900/50 text-amber-400 border border-amber-500/30 w-16 h-16 rounded-full flex items-center justify-center text-3xl mb-6">
                            <i className="fas fa-gauge-high"></i>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2 font-playfair">Optimize High Performers</h3>
                        <p className="text-white font-semibold mb-4 text-sm uppercase tracking-wide">The Scale</p>
                        <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                            Top IDs (Laiba, Saira) are heavily utilized internally but have ID tracking headroom. Scale their contract loads by 2-3x to maximize the "trust capital" of these profiles.
                        </p>
                        <div className="bg-amber-900/30 border border-amber-500/30 rounded-lg p-3">
                            <div className="flex items-center gap-2 text-amber-400 font-bold text-sm">
                                <i className="fas fa-check-circle"></i> Action:
                            </div>
                            <p className="text-white text-xs mt-1">Triple Contract Assignment</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideRecommendations;
