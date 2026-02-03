"use client";

import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const SlideSuccessMetrics = () => {
    // Left Chart: Revenue Potential (Filled vs Open)
    const revenueData = {
        labels: ['Current Utilization', 'Available Capacity (Open)'],
        datasets: [{
            data: [65, 35],
            backgroundColor: ['rgba(16, 185, 129, 0.7)', 'rgba(30, 41, 59, 0.5)'], // Emerald vs Dark
            borderColor: ['#10b981', 'rgba(148, 163, 184, 0.2)'],
            borderWidth: 1,
            cutout: '75%'
        }]
    };

    // Center Chart: Department Efficiency
    const deptData = {
        labels: ['Billable', 'Non-Billable / Ghost'],
        datasets: [{
            data: [45, 55],
            backgroundColor: ['rgba(59, 130, 246, 0.7)', 'rgba(239, 68, 68, 0.7)'], // Blue vs Red
            borderColor: ['#3b82f6', '#ef4444'],
            borderWidth: 1,
            cutout: '75%'
        }]
    };

    // Right Chart: Target vs Actual (Headcount Capacity)
    const targetData = {
        labels: ['Staff with IDs', 'Staff needing IDs'],
        datasets: [{
            data: [35, 65],
            backgroundColor: ['rgba(245, 158, 11, 0.7)', 'rgba(30, 41, 59, 0.5)'], // Amber vs Dark
            borderColor: ['#f59e0b', 'rgba(148, 163, 184, 0.2)'],
            borderWidth: 1,
            cutout: '75%'
        }]
    };

    const chartOptions = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: false } // Custom centers, disable tooltip for cleaner look or keep if needed
        }
    };

    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 z-10 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Success Metrics Dashboard
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Key Performance Indicators & Targets
                    </p>
                </div>

            </header>
            <main className="flex-1 px-12 py-8 flex flex-col justify-center items-center overflow-y-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">

                    {/* Metric Card 1 */}
                    <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Capacity Utilization</h3>
                        <div className="relative w-48 h-48 mb-6">
                            <Doughnut data={revenueData} options={chartOptions} />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <span className="block text-4xl font-bold text-white">65%</span>
                                <span className="text-xs text-gray-400 uppercase">Utilized</span>
                            </div>
                        </div>
                        <div className="w-full mt-auto">
                            <div className="flex justify-between text-xs mb-2 px-4">
                                <span className="text-emerald-400 font-bold">Target: 85%</span>
                                <span className="text-gray-400">Current Gap: 20%</span>
                            </div>
                            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mx-auto max-w-[200px]">
                                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '76%' }}></div>
                            </div>
                        </div>
                    </div>

                    {/* Metric Card 2 */}
                    <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">Billable Efficiency</h3>
                        <div className="relative w-48 h-48 mb-6">
                            <Doughnut data={deptData} options={chartOptions} />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <span className="block text-4xl font-bold text-blue-400">45%</span>
                                <span className="text-xs text-gray-400 uppercase">Tracked</span>
                            </div>
                        </div>
                        <div className="w-full mt-auto">
                            <p className="text-xs text-red-400 mb-2 font-semibold">Crisis: 55% "Ghost Work"</p>
                            <p className="text-[10px] text-gray-400 leading-snug px-4">
                                Over half of work done is currently untracked on Upwork.
                            </p>
                        </div>
                    </div>

                    {/* Metric Card 3 */}
                    <div className="glass-card p-6 rounded-2xl flex flex-col items-center text-center">
                        <h3 className="text-gray-400 text-sm font-bold uppercase tracking-widest mb-6">ID Penetration</h3>
                        <div className="relative w-48 h-48 mb-6">
                            <Doughnut data={targetData} options={chartOptions} />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                                <span className="block text-4xl font-bold text-amber-400">35%</span>
                                <span className="text-xs text-gray-400 uppercase">Coverage</span>
                            </div>
                        </div>
                        <div className="w-full mt-auto">
                            <div className="flex justify-between text-xs mb-2 px-4">
                                <span className="text-amber-400 font-bold">Target: 100%</span>
                                <span className="text-gray-400">Gap: High</span>
                            </div>
                            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden mx-auto max-w-[200px]">
                                <div className="bg-amber-500 h-full rounded-full" style={{ width: '35%' }}></div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default SlideSuccessMetrics;
