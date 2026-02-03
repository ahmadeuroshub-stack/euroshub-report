import React from 'react';

const SlideVARoster = () => {
    const list = [
        { name: 'Syeda Alina Zahra', role: 'VA • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Muhammad Ramzan', role: 'VA • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Kiran Zaman', role: 'VA • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Shahroze Shahid', role: 'VA • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Mohsin Ali', role: 'VA • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Hamayun', role: 'VA • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Ashan Ali Asif', role: 'VA • Night', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Muhammad Wasiq Zafar', role: 'VA • Evening', free: '20h Free', status: 'Partial', color: 'yellow' },
        { name: 'Alishba Chaudhry', role: 'VA • Unknown', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Ahmad', role: 'VA • Night', free: '32h Free', status: 'Available', color: 'emerald' },
        { name: 'Ilsa', role: 'VA • Evening', free: '15h Free', status: 'Partial', color: 'yellow' },
        { name: 'Hamza Ikram', role: 'VA • Unknown', free: '6h Free', status: 'Partial', color: 'yellow' },
    ];

    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Virtual Assistants Roster
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">Capacity & Shift Analysis</p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col z-10">
                <div className="glass-card w-full h-full p-6 overflow-hidden flex flex-col relative">
                    {/* Grid Layout: Responsive Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto content-start custom-scrollbar p-2 z-10">
                        {list.map((item, index) => (
                            <div key={index} className={`flex items-center justify-between p-2 rounded bg-white/5 border-l-2 border-${item.color}-500`}>
                                <div>
                                    <div className="font-bold text-white text-xs">{item.name}</div>
                                    <div className="text-[10px] text-gray-400">{item.role}</div>
                                </div>
                                <div className="text-right">
                                    <div className={`font-bold text-xs ${item.color === 'red' || item.color === 'gray' ? 'text-gray-300' : 'text-white'}`}>{item.free}</div>
                                    <div className="text-[10px] text-gray-300">{item.status}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-between text-[10px] text-gray-400">
                        <span>Virtual Assistants Roster</span>
                        <span>Total Staff: 12</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideVARoster;
