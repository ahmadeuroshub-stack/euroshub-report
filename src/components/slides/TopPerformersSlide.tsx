"use client";

import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const TopPerformersSlide = () => {
    const data = {
        labels: ['Laiba', 'Saira', 'Asif', 'Waqar', 'Syeda', 'Kainat', 'Zain', 'Jibran'],
        datasets: [{
            label: 'Total Hours (6-Month)',
            data: [2772, 2474, 2278, 1150, 980, 850, 171, 26],
            backgroundColor: [
                'rgba(59, 130, 246, 0.7)',   // Blue for Laiba
                'rgba(16, 185, 129, 0.7)',   // Emerald for Saira
                'rgba(168, 85, 247, 0.7)',   // Purple for Asif
                'rgba(6, 182, 212, 0.7)',    // Cyan for Waqar
                'rgba(20, 184, 166, 0.7)',   // Teal for Syeda
                'rgba(236, 72, 153, 0.7)',   // Pink for Kainat
                'rgba(156, 163, 175, 0.7)',  // Gray for Zain
                'rgba(245, 158, 11, 0.7)'    // Amber for Jibran
            ],
            borderColor: [
                'rgba(59, 130, 246, 1)',
                'rgba(16, 185, 129, 1)',
                'rgba(168, 85, 247, 1)',
                'rgba(6, 182, 212, 1)',
                'rgba(20, 184, 166, 1)',
                'rgba(236, 72, 153, 1)',
                'rgba(156, 163, 175, 1)',
                'rgba(245, 158, 11, 1)'
            ],
            borderWidth: 1,
            maxBarThickness: 20,
            borderRadius: 4
        }]
    };

    const options = {
        indexAxis: 'y' as const, // Horizontal bar chart
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                borderColor: 'rgba(148, 163, 184, 0.2)',
                borderWidth: 1,
                padding: 12,
                callbacks: {
                    label: function (context: any) {
                        return context.raw.toLocaleString() + ' Hours';
                    }
                }
            }
        },
        scales: {
            x: {
                grid: {
                    color: 'rgba(148, 163, 184, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: '#94a3b8',
                    font: { family: 'Inter' }
                },
                title: {
                    display: true,
                    text: 'Cumulative Hours (Aug 2025 - Jan 2026)',
                    color: '#cbd5e1',
                    font: { size: 10, weight: 'bold' }
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    autoSkip: false,
                    color: '#e2e8f0', // Lighter text for names
                    font: {
                        family: 'Inter',
                        size: 11,
                        weight: '600'
                    }
                }
            }
        },
        layout: {
            padding: {
                right: 20
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutQuart' as const
        }
    };

    const profiles = [
        { name: 'Laiba', hours: 2772, color: 'blue', icon: 'fa-pen-nib' },
        { name: 'Saira', hours: 2474, color: 'emerald', icon: 'fa-headset' },
        { name: 'Asif', hours: 2278, color: 'purple', icon: 'fa-users-cog' },
        { name: 'Waqar', hours: 1150, color: 'cyan', icon: 'fa-laptop-code' },
        { name: 'Syeda', hours: 980, color: 'teal', icon: 'fa-user-check' },
        { name: 'Kainat', hours: 850, color: 'pink', icon: 'fa-palette' },
        { name: 'Zain', hours: 171, color: 'gray', icon: 'fa-user-clock' },
        { name: 'Jibran', hours: 26, color: 'amber', icon: 'fa-code' },
    ];

    return (
        <div className="slide-container bg-grid">
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Top Performers Overview
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        6-Month Output Leaders • Aug 2025 – Jan 2026
                    </p>
                </div>

            </header>
            <main className="flex-1 px-12 py-4 flex flex-col lg:flex-row space-y-6 lg:space-y-0 lg:space-x-6 overflow-y-auto">
                {/* Left Column: Chart */}
                <div className="w-full lg:w-7/12 flex flex-col glass-panel rounded-xl p-4 min-h-[300px]">
                    <div className="flex justify-between items-center mb-2">
                        <h3 className="text-white font-semibold text-lg flex items-center">
                            <i className="fas fa-chart-bar mr-2 text-white"></i>
                            Total Tracked Hours (6-Month Cumulative)
                        </h3>
                    </div>
                    <div className="relative flex-grow w-full h-full">
                        <Bar data={data} options={options as any} />
                    </div>
                </div>
                {/* Right Column: Profiles */}
                <div className="w-full lg:w-5/12 grid grid-cols-1 sm:grid-cols-2 gap-3 overflow-y-visible lg:overflow-y-auto custom-scrollbar pr-2 h-full content-start pb-8 lg:pb-0">
                    <h3 className="col-span-full text-white font-semibold text-lg mb-1 pl-2 border-l-2 border-blue-500">
                        Key Contributors
                    </h3>
                    {profiles.map((profile, index) => (
                        <div key={index} className={`profile-card rounded-r-xl p-3 border-${profile.color}-500 flex flex-col justify-center`}>
                            <div className="flex justify-between items-center">
                                <div className="flex items-center">
                                    <div className={`w-8 h-8 rounded-full bg-${profile.color}-900 flex items-center justify-center text-${profile.color}-300 mr-2 border border-${profile.color}-600`}>
                                        <i className={`fas ${profile.icon} text-xs`}></i>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold text-sm">{profile.name}</h4>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-lg font-bold text-white font-playfair">{profile.hours.toLocaleString()}</p>
                                    <p className="text-[9px] text-gray-400">Hours</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default TopPerformersSlide;
