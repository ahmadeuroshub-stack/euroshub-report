import React from 'react';

const SlideMarketingOpsRoster = () => {
    const marketingList = [
        { name: 'Eman Arif', role: 'SMM • Flexible', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Tabassum Munir', role: 'SMM • Flexible', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Ahsan Imran', role: 'SMM • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Azam Sultan', role: 'SMM • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Nayab Manzoor', role: 'SMM • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Fahad Rafique', role: 'SMM • Morning', free: '0h Free', status: 'Full', color: 'red' },
    ];
    const opsList = [
        { name: 'Ali Rayyan', role: 'Tech • Morning', free: '0h Free', status: 'Full', color: 'red' },
    ];

    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Marketing & Ops Roster
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">Capacity & Shift Analysis</p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col z-10">
                <div className="glass-card w-full h-full p-6 overflow-hidden flex flex-col relative">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 h-full">
                        {/* Marketing Column */}
                        <div className="flex flex-col h-full overflow-hidden">
                            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">Digital Marketing Team</h3>
                            <div className="overflow-y-auto custom-scrollbar flex-1 space-y-2 pr-2">
                                {marketingList.map((item, index) => (
                                    <div key={index} className="flex items-center justify-between p-2 rounded bg-white/5 border-l-2 border-red-500 hover:bg-white/10 transition-colors">
                                        <div>
                                            <div className="font-bold text-white text-xs">{item.name}</div>
                                            <div className="text-[10px] text-gray-400">{item.role}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className="font-bold text-xs text-gray-300">{item.free}</div>
                                            <div className="text-[10px] text-gray-300">{item.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Ops & Tech Column */}
                        <div className="flex flex-col h-full overflow-hidden">
                            <h3 className="text-white font-bold text-lg mb-4 border-b border-gray-700 pb-2">Ops & Tech Team</h3>
                            <div className="overflow-y-auto custom-scrollbar flex-1 space-y-2 pr-2">
                                {opsList.map((item, index) => (
                                    <div key={index} className={`flex items-center justify-between p-2 rounded bg-white/5 border-l-2 border-${item.color}-500 hover:bg-white/10 transition-colors`}>
                                        <div>
                                            <div className="font-bold text-white text-xs">{item.name}</div>
                                            <div className="text-[10px] text-gray-400">{item.role}</div>
                                        </div>
                                        <div className="text-right">
                                            <div className={`font-bold text-xs ${item.color === 'emerald' ? 'text-emerald-400' : 'text-gray-300'}`}>{item.free}</div>
                                            <div className={`text-[10px] ${item.color === 'emerald' ? 'text-emerald-300' : 'text-gray-300'}`}>{item.status}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideMarketingOpsRoster;
