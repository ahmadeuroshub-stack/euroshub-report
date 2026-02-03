import React from 'react';

const TitleSlide = () => {
    return (
        <div className="slide-container bg-grid relative overflow-hidden flex flex-col md:flex-row items-center justify-center md:items-center px-6 md:px-16 py-20 md:py-0">
            {/* Main Content (Left) */}
            <div className="z-10 w-full md:max-w-3xl relative text-center md:text-left">


                {/* Title Block */}
                <h1 className="mb-8">
                    <span className="block text-3xl font-light text-blue-200 mb-2 tracking-wide font-sans opacity-90">
                        Executive Workforce <span className="text-blue-500/50">&</span>
                    </span>
                    <span className="block text-7xl font-playfair font-bold text-white leading-tight tracking-tight drop-shadow-lg">
                        Capacity <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300">Analysis</span>
                    </span>
                </h1>

                {/* Decorative Line */}
                <div className="w-24 h-1.5 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full mb-8"></div>

                {/* Subtitle/Context */}
                <div className="space-y-4">
                    <p className="text-2xl text-white font-light leading-relaxed">
                        Comprehensive Utilization Review <br />
                        <span className="text-blue-200 font-normal">& Revenue Optimization Strategy</span>
                    </p>

                    <div className="flex items-center gap-4 mt-8 pt-8 border-t border-white/5 max-w-lg">
                        <div className="text-right pr-4 border-r border-white/10">
                            <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Assessment Period</p>
                            <p className="text-white font-mono text-sm">Aug 2025 — Jan 2026</p>
                        </div>
                        <div>
                            <p className="text-[10px] text-blue-400 uppercase tracking-widest font-bold">Generated For</p>
                            <p className="text-white font-mono text-sm">Executive Leadership</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TitleSlide;
