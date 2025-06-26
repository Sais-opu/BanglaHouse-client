import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend,
    CategoryScale,
    LinearScale,
    BarElement,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const HouseStatsChart = () => {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("https://banghouse.vercel.app/house")
            .then((res) => res.json())
            .then((data) => {
                setHouses(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Failed to fetch house data:", err);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-lg mt-10">Loading data...</p>;
    const groupedData = {};
    houses.forEach((h) => {
        const key = h.division;
        if (!groupedData[key]) {
            groupedData[key] = {
                population: 0,
                demandPercent: 0,
                avaiableList: 0,
                count: 0,
            };
        }
        groupedData[key].population += h.population;
        groupedData[key].demandPercent += h.demandPercent;
        groupedData[key].avaiableList += h.avaiableList;
        groupedData[key].count += 1;
    });
    const divisions = Object.keys(groupedData);
    const avgPopulation = divisions.map(
        (d) => Math.round(groupedData[d].population / groupedData[d].count)
    );
    const avgDemandPercent = divisions.map(
        (d) => Math.round(groupedData[d].demandPercent / groupedData[d].count)
    );
    const avgListings = divisions.map(
        (d) => Math.round(groupedData[d].avaiableList / groupedData[d].count)
    );
    const pieColors = [
        "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF", "#FF9F40",
        "#A0522D", "#32CD32", "#8A2BE2", "#FFD700", "#00CED1", "#DC143C"
    ];
    const piePopulationData = {
        labels: divisions,
        datasets: [
            {
                label: "Average Population",
                data: avgPopulation,
                backgroundColor: pieColors.slice(0, divisions.length),
            },
        ],
    };
    const pieDemandData = {
        labels: divisions,
        datasets: [
            {
                label: "Average Demand %",
                data: avgDemandPercent,
                backgroundColor: pieColors.slice(0, divisions.length),
            },
        ],
    };
    const barData = {
        labels: divisions,
        datasets: [
            {
                label: "Average Population",
                data: avgPopulation,
                backgroundColor: "#36A2EB",
            },
            {
                label: "Average Listings",
                data: avgListings,
                backgroundColor: "#FF6384",
            },
        ],
    };
    return (
        <div className="min-h-screen bg-gray-100 py-12 px-4">
            <div className="max-w-6xl mx-auto space-y-12">
                {/* Bar Chart */}
                <div className="bg-white p-6 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                        Average Population vs Listings by Division
                    </h2>
                    <Bar
                        data={barData}
                        options={{
                            responsive: true,
                            plugins: {
                                legend: {
                                    position: "bottom",
                                },
                            },
                        }}
                    />
                </div>

                {/* Pie Charts start */}
                <div className="flex flex-col lg:flex-row gap-6">
                    {/* Pie Chart for Population */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            Average Population Distribution
                        </h2>
                        <Pie data={piePopulationData} />
                    </div>

                    {/* Pie Chart for Demand % */}
                    <div className="bg-white p-6 rounded-lg shadow-lg flex-1">
                        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
                            Average Demand % by Division
                        </h2>
                        <Pie data={pieDemandData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HouseStatsChart;
