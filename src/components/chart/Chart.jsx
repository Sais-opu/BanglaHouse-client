import React, { useEffect, useState } from "react";
import { Pie, Bar } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement);

const HouseStatsChart = () => {
    const [houses, setHouses] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch("http://localhost:5000/house")
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

    if (loading) return <p className="text-center">Loading...</p>;

    // Calculate Averages
    const avgPopulation = Math.round(houses.reduce((sum, h) => sum + h.population, 0) / houses.length);
    const avgDemandPercent = Math.round(houses.reduce((sum, h) => sum + h.demandPercent, 0) / houses.length);

    const pieData = {
        labels: ["Average Population", "Average Demand %"],
        datasets: [
            {
                label: "Average Stats",
                data: [avgPopulation, avgDemandPercent],
                backgroundColor: ["#36A2EB", "#FF6384"],
                borderColor: ["#36A2EB", "#FF6384"],
                borderWidth: 1,
            },
        ],
    };

    const barData = {
        labels: houses.map((h) => h.division),
        datasets: [
            {
                label: "Population",
                data: houses.map((h) => h.population),
                backgroundColor: "#4bc0c0",
            },
            {
                label: "Available Listings",
                data: houses.map((h) => h.avaiableList),
                backgroundColor: "#9966ff",
            },
        ],
    };

    return (
        <div className="max-w-4xl mx-auto mt-8 space-y-12">
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold text-center mb-4">Average Population vs Demand (%)</h2>
                <Pie data={pieData} />
            </div>

            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold text-center mb-4">Population vs Listings by Division</h2>
                <Bar data={barData} options={{ responsive: true, plugins: { legend: { position: "bottom" } } }} />
            </div>
        </div>
    );
};

export default HouseStatsChart;
