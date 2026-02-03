import React from 'react';

const SlideDepartmentDeepDive = () => {
    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Department Deep Dive
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Available Capacity & Utilization Opportunities
                    </p>
                </div>

            </header>
            {/* Main Content */}
            <main className="flex-1 px-12 py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto">
                {/* Card 1: Digital Marketing (High Opportunity) */}
                <div className="glass-card rounded-2xl p-6 border-t-4 border-t-cyan-500">
                    <div className="flex justify-between items-start mb-4">
                        <div className="dept-icon-wrapper bg-cyan-900/40 text-cyan-400 border border-cyan-500/20">
                            <i className="fas fa-bullhorn"></i>
                        </div>
                        <div className="bg-cyan-900/30 text-white text-xs px-2 py-1 rounded border border-cyan-500/30 uppercase tracking-wider font-semibold">
                            Primary Opportunity
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">Digital Marketing</h2>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-6xl text-white metric-big">213</span>
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">Hours / Week</span>
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">Talent Pool (6 Staff)</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="staff-pill">Eman Arif</span>
                            <span className="staff-pill">Tabassum Munir</span>
                            <span className="staff-pill">Ahsan Imran</span>
                            <span className="staff-pill">Azam Sultan</span>
                            <span className="staff-pill">Nayab Manzoor</span>
                            <span className="staff-pill">Fahad Rafique</span>
                        </div>
                    </div>
                    <div className="strategy-box bg-cyan-900/20 border border-cyan-500/20">
                        <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                            <i className="fas fa-key"></i> Strategy: Bundle & Sell
                        </div>
                        <p className="text-gray-300 text-sm leading-snug">
                            Create "Growth Starter" packages combining SEO audits with monthly Social Media management. Immediate capacity for 5-6 full-time client accounts.
                        </p>
                    </div>
                </div>
                {/* Card 2: Virtual Assistants (Medium Opportunity) */}
                <div className="glass-card rounded-2xl p-6 border-t-4 border-t-indigo-500">
                    <div className="flex justify-between items-start mb-4">
                        <div className="dept-icon-wrapper bg-indigo-900/40 text-indigo-400 border border-indigo-500/20">
                            <i className="fas fa-headset"></i>
                        </div>
                        <div className="bg-indigo-900/30 text-indigo-300 text-xs px-2 py-1 rounded border border-indigo-500/30 uppercase tracking-wider font-semibold">
                            Scalable Support
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">Virtual Assistants</h2>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-6xl text-indigo-400 metric-big">73</span>
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">Hours / Week</span>
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">Talent Pool (4 Staff)</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="staff-pill">Ahmad (Night)</span>
                            <span className="staff-pill">Wasiq (Evening)</span>
                            <span className="staff-pill">Ilsa (Evening)</span>
                            <span className="staff-pill">Hamza</span>
                        </div>
                    </div>
                    <div className="strategy-box bg-indigo-900/20 border border-indigo-500/20">
                        <div className="flex items-center gap-2 text-indigo-400 font-bold text-sm mb-2">
                            <i className="fas fa-clock"></i> Strategy: Shift Coverage
                        </div>
                        <p className="text-gray-300 text-sm leading-snug">
                            Sell 2 Full-Time Equivalent (FTE) roles targeting international clients needing Night/Evening coverage. Ideal for 24/7 customer support expansion.
                        </p>
                    </div>
                </div>
                {/* Card 3: Development (Niche Opportunity) */}
                <div className="glass-card rounded-2xl p-6 border-t-4 border-t-emerald-500">
                    <div className="flex justify-between items-start mb-4">
                        <div className="dept-icon-wrapper bg-emerald-900/40 text-emerald-400 border border-emerald-500/20">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="bg-emerald-900/30 text-white text-xs px-2 py-1 rounded border border-emerald-500/30 uppercase tracking-wider font-semibold">
                            Technical Niche
                        </div>
                    </div>
                    <h2 className="text-2xl font-bold text-white mb-1">Development</h2>
                    <div className="flex items-baseline gap-2 mb-6">
                        <span className="text-6xl text-white metric-big">35</span>
                        <span className="text-gray-400 text-sm font-medium uppercase tracking-wide">Hours / Week</span>
                    </div>
                    <div className="mb-6">
                        <p className="text-gray-400 text-xs uppercase tracking-wider font-semibold mb-3">Talent Pool (2 Specialists)</p>
                        <div className="flex flex-wrap gap-2">
                            <span className="staff-pill border-emerald-500/30 bg-emerald-900/40 text-emerald-100">Ali Rayyan</span>
                            <span className="staff-pill border-amber-500/30 bg-amber-900/40 text-amber-100">Jibran</span>
                        </div>
                    </div>
                    <div className="strategy-box bg-emerald-900/20 border border-emerald-500/20">
                        <div className="flex items-center gap-2 text-white font-bold text-sm mb-2">
                            <i className="fas fa-wrench"></i> Strategy: Tech Retainer
                        </div>
                        <p className="text-gray-300 text-sm leading-snug">
                            Monetize as a high-margin "Tech Support & Maintenance" retainer. Focus on landing page creation and website maintenance for existing design clients.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideDepartmentDeepDive;
