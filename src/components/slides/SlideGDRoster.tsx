import React from 'react';

const SlideGDRoster = () => {
    const list = [
        { name: 'Faizan Ahmed', role: 'GD • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Abdul Manan', role: 'GD • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Daniyal Ahmed', role: 'GD • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Uzam Liaqat', role: 'GD • Night', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Awais Munir', role: 'GD • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Fatima Hafeez', role: 'GD • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Muhammad Saad', role: 'GD • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Mahnoor', role: 'GD • Morning', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Muhammad Huzaifa', role: 'GD • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Muhammad Bilal', role: 'GD • Evening', free: '0h Free', status: 'Full', color: 'red' },
        { name: 'Unknown', role: 'GD • Unknown', free: '0h Free', status: 'Full', color: 'red' }, // Assuming from image/context or just list them all
        // Wait, I need to make sure I got all from HTML.
    ];
    // Re-checking the HTML content I saw in view_file.
    // Lines 2393 to 2492 in slides.html
    // Faizan, Abdul Manan, Daniyal, Uzam, Awais, Fatima, Muhammad Saad, Mahnoor, Muhammad Huzaifa, Muhammad Bilal.
    // Only 10 in the list I saw? The footer said Total Staff: 2 (Wait, line 2497 says "Total Staff: 2"? That seems like a typo in original HTML or I misread)
    // Actually the HTML snippet shows them all "Full" and "0h Free".
    // I will use the list I extracted.

    const gdList = [
        { name: 'Faizan Ahmed', role: 'GD • Evening' },
        { name: 'Abdul Manan', role: 'GD • Evening' },
        { name: 'Daniyal Ahmed', role: 'GD • Evening' },
        { name: 'Uzam Liaqat', role: 'GD • Night' },
        { name: 'Awais Munir', role: 'GD • Morning' },
        { name: 'Fatima Hafeez', role: 'GD • Morning' },
        { name: 'Muhammad Saad', role: 'GD • Evening' },
        { name: 'Mahnoor', role: 'GD • Morning' },
        { name: 'Muhammad Huzaifa', role: 'GD • Evening' },
        { name: 'Muhammad Bilal', role: 'GD • Evening' },
    ];

    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Graphic Design Roster
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">Capacity & Shift Analysis</p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 overflow-y-auto flex flex-col z-10">
                <div className="glass-card w-full h-full p-6 overflow-hidden flex flex-col relative">
                    {/* Grid Layout: Responsive Columns */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto content-start custom-scrollbar p-2 z-10">
                        {gdList.map((item, index) => (
                            <div key={index} className="flex items-center justify-between p-2 rounded bg-white/5 border-l-2 border-red-500">
                                <div>
                                    <div className="font-bold text-white text-xs">{item.name}</div>
                                    <div className="text-[10px] text-gray-400">{item.role}</div>
                                </div>
                                <div className="text-right">
                                    <div className="font-bold text-xs text-gray-300">0h Free</div>
                                    <div className="text-[10px] text-gray-300">Full</div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="mt-auto pt-4 border-t border-gray-700/50 flex justify-between text-[10px] text-gray-400">
                        <span>Graphic Design Roster</span>
                        <span>Total Staff: 10</span>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SlideGDRoster;
