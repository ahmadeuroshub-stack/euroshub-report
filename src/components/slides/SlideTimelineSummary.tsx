import React from 'react';

const SlideTimelineSummary = () => {
    const records = [
        { name: 'Kainat', hours: '1120.8 hrs', peak: '2025-09 (297h)', status: 'Active', color: 'blue', icon: 'fa-user' },
        { name: 'Laiba', hours: '2771.8 hrs', peak: '2025-08 (687h)', status: 'Active', color: 'blue', icon: 'fa-user' },
        { name: 'Saira', hours: '2473.7 hrs', peak: '2025-11 (457h)', status: 'Active', color: 'blue', icon: 'fa-user' },
        { name: 'Asif', hours: '2277.7 hrs', peak: '2025-08 (418h)', status: 'Active', color: 'blue', icon: 'fa-user' },
        { name: 'Waqar', hours: '1271.2 hrs', peak: '2025-12 (325h)', status: 'Active', color: 'blue', icon: 'fa-user' },
        { name: 'Syeda', hours: '760.3 hrs', peak: '2026-01 (190h)', status: 'Active', color: 'blue', icon: 'fa-user' },
        { name: 'Jibran', hours: '26.0 hrs', peak: '2026-01 (10h)', status: 'Active', color: 'amber', icon: 'fa-code' },
        { name: 'Zain', hours: '0.0 hrs', peak: 'N/A (0h)', status: 'Inactive', color: 'gray', icon: 'fa-user' },
    ];

    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Total Timeline Summary
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Cumulative tracked hours per ID (Aug '25 - Jan '26)
                    </p>
                </div>
            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col items-center justify-start md:justify-center">
                <div className="glass-card w-full h-full p-0 overflow-hidden flex-1 flex flex-col">
                    <div className="grid grid-cols-2 md:grid-cols-4 bg-blue-900/40 p-3 border-b border-blue-500/20 font-bold text-white uppercase tracking-wider text-[10px] md:text-sm">
                        <div className="col-span-1">Upwork ID</div>
                        <div className="col-span-1 text-center">Total Output</div>
                        <div className="hidden md:block col-span-1 text-center">Peak Month</div>
                        <div className="hidden md:block col-span-1 text-right">Status</div>
                    </div>
                    <div className="overflow-y-auto flex-1 p-2 space-y-2">
                        {records.map((record, index) => (
                            <div key={index} className={`grid grid-cols-2 md:grid-cols-4 p-2 rounded-lg ${record.status === 'Inactive' ? 'bg-gray-800/30 text-gray-400' : 'bg-white/5 hover:bg-white/10 text-white'} items-center transition-colors border border-transparent hover:border-blue-500/30`}>
                                <div className="col-span-1 font-bold text-lg flex items-center gap-3">
                                    <div className={`w-8 h-8 rounded-full ${record.name === 'Zain' ? 'bg-gray-700' : `bg-${record.color}-600`} flex items-center justify-center text-xs`}>
                                        <i className={`fas ${record.icon}`}></i>
                                    </div>
                                    {record.name}
                                </div>
                                <div className={`col-span-1 text-center font-playfair text-xl ${record.name === 'Jibran' ? 'text-amber-300' : (record.name === 'Zain' ? '' : 'text-blue-300')}`}>
                                    {record.hours}
                                </div>
                                <div className="hidden md:block col-span-1 text-center text-sm font-mono opacity-80">
                                    {record.peak}
                                </div>
                                <div className="hidden md:block col-span-1 text-right">
                                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${record.status === 'Active' ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-500/20' : 'bg-red-900/30 text-red-400 border border-red-500/20'}`}>
                                        {record.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideTimelineSummary;
