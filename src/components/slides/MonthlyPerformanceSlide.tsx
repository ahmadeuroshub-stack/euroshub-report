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
    PointElement,
    LineElement,
    LineController,
    BarController,
} from 'chart.js';
import { Chart } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    LineController,
    BarController,
    Title,
    Tooltip,
    Legend
);

const MonthlyPerformanceSlide = () => {
    const data = {
        labels: ['Aug 2025', 'Sep 2025', 'Oct 2025', 'Nov 2025', 'Dec 2025', 'Jan 2026'],
        datasets: [
            {
                type: 'bar' as const,
                label: 'Total Hours',
                data: [1838.5, 1708.0, 1738.8, 1688.7, 2013.3, 1688.2],
                backgroundColor: 'rgba(59, 130, 246, 0.7)', // Blue-500
                borderColor: 'rgba(59, 130, 246, 1)',
                borderWidth: 1,
                borderRadius: 4,
                order: 2,
                yAxisID: 'y',
            },
            {
                type: 'line' as const,
                label: 'Active IDs',
                data: [6, 6, 6, 7, 7, 8],
                borderColor: 'rgba(249, 115, 22, 1)', // Orange-500
                backgroundColor: 'rgba(249, 115, 22, 0.2)',
                borderWidth: 3,
                pointBackgroundColor: '#fff',
                pointBorderColor: 'rgba(249, 115, 22, 1)',
                pointRadius: 6,
                pointHoverRadius: 8,
                tension: 0.1,
                order: 1,
                yAxisID: 'y1',
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false // Custom legend built in HTML
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.9)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                borderColor: 'rgba(59, 130, 246, 0.3)',
                borderWidth: 1,
                padding: 12,
                displayColors: true,
                callbacks: {
                    label: function (context: any) {
                        let label = context.dataset.label || '';
                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y;
                            if (context.dataset.type === 'bar') label += ' hrs';
                        }
                        return label;
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
                    font: {
                        family: 'Inter',
                        size: 12
                    }
                }
            },
            y: {
                type: 'linear' as const,
                display: true,
                position: 'left' as const,
                grid: {
                    color: 'rgba(148, 163, 184, 0.1)',
                    drawBorder: false
                },
                ticks: {
                    color: '#94a3b8',
                    font: {
                        family: 'Inter',
                        size: 12
                    },
                    callback: function (value: any) {
                        return value + 'h';
                    }
                },
                title: {
                    display: true,
                    text: 'Total Hours',
                    color: '#cbd5e1',
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                },
                suggestedMax: 2200
            },
            y1: {
                type: 'linear' as const,
                display: true,
                position: 'right' as const,
                grid: {
                    drawOnChartArea: false,
                },
                ticks: {
                    color: '#fb923c', // Orange-400
                    stepSize: 1,
                    font: {
                        family: 'Inter',
                        size: 12,
                        weight: 'bold'
                    }
                },
                title: {
                    display: true,
                    text: 'Active IDs',
                    color: '#fb923c',
                    font: {
                        size: 10,
                        weight: 'bold'
                    }
                },
                min: 0,
                max: 10
            }
        },
        animation: {
            duration: 1500,
            easing: 'easeOutQuart' as const
        }
    };

    return (
        <div className="slide-container bg-grid">
            {/* Header */}
            <header className="w-full px-12 pt-8 pb-4 flex flex-col md:flex-row justify-between items-start md:items-end border-b border-gray-800 space-y-4 md:space-y-0">
                <div>
                    <h1 className="font-playfair text-3xl md:text-4xl text-white font-bold tracking-tight mb-2">
                        Monthly Performance Trends
                    </h1>
                    <p className="text-blue-400 text-base md:text-lg font-light tracking-wide">
                        Consolidated Hours & Active Workforce IDs • Aug 2025 – Jan 2026
                    </p>
                </div>

            </header>
            {/* Main Content */}
            <main className="flex-1 px-12 py-8 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-8 overflow-y-auto">
                {/* Chart Section */}
                <div className="w-full lg:w-3/4 glass-panel rounded-xl p-6 flex flex-col relative min-h-[400px]">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-white font-semibold text-lg flex items-center">
                            <i className="fas fa-chart-line mr-2 text-white"></i> {/* Changed to chart-line as chart-mixed is pro */}
                            Workforce Output vs. Active IDs
                        </h3>
                        <div className="flex items-center space-x-4 text-xs">
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-blue-500 rounded-sm mr-2"></span>
                                <span className="text-white">Total Hours (Left Axis)</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
                                <span className="text-white">Active IDs (Right Axis)</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative flex-grow w-full h-full">
                        <Chart type='bar' data={data} options={options as any} />
                    </div>
                </div>
                {/* Insights Sidebar */}
                <div className="w-full lg:w-1/4 flex flex-col space-y-6">
                    {/* Summary Card */}
                    <div className="glass-panel rounded-xl p-6 border-l-4 border-blue-500">
                        <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-2">Total Output</h4>
                        <div className="flex items-baseline space-x-2">
                            <span className="text-4xl font-bold text-white font-playfair">10,675</span>
                            <span className="text-sm text-gray-300">hrs</span>
                        </div>
                        <p className="text-gray-300 text-xs mt-2">Cumulative tracked hours over 6-month period</p>
                    </div>
                    {/* Trend Insight Card */}
                    <div className="glass-panel rounded-xl p-6 border-l-4 border-emerald-500">
                        <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-2">Stability Analysis</h4>
                        <div className="flex items-center mb-2">
                            <i className="fas fa-arrow-right text-white mr-2"></i>
                            <span className="text-lg font-semibold text-white">Consistent Volume</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Hours remain relatively stable (~1,700h avg) despite seasonal fluctuations, showing a reliable baseline capacity.
                        </p>
                    </div>
                    {/* Growth Insight Card */}
                    <div className="glass-panel rounded-xl p-6 border-l-4 border-orange-500">
                        <h4 className="text-white uppercase text-xs font-bold tracking-widest mb-2">Capacity Expansion</h4>
                        <div className="flex items-center mb-2">
                            <i className="fas fa-user-plus text-white mr-2"></i>
                            <span className="text-lg font-semibold text-white">Active IDs: 6 → 8</span>
                        </div>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Workforce IDs expanded in Nov 2025. However, Jan 2026 hours (1,688h) match Nov levels, indicating <span className="text-white font-semibold">new capacity is not yet fully utilized</span>.
                        </p>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default MonthlyPerformanceSlide;
