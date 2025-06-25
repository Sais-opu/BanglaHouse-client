const Home = () => {
    return (
        <div
            className="min-h-screen flex items-center justify-center bg-cover bg-center relative"
            style={{ backgroundImage: `url('https://i.ibb.co/xqDCY64y/banner.jpg)` }}
        >
            <div className="absolute inset-0 text-black bg-opacity-50"></div>
            <div className="relative z-10 text-center text-black px-4">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Divison-Wise House Demand Visualizer</h1>
                <p className="text-lg md:text-xl max-w-2xl mx-auto">
                    Explore housing demand, average rent, and listing insights across all divisions of Bangladesh. 
                    Make smarter real estate decisions using dynamic charts and data.
                </p>
            </div>
        </div>
    );
};

export default Home;
