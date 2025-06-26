import React from "react";

const feedbacks = [
    {
        rating: 5,
        comment:
            "Excellent app! It helped me organize my tasks efficiently and boosted my team's productivity.",
        user: "John Doe",
    },
    {
        rating: 4,
        comment:
            "Great real-time chat feature, very responsive and easy to use for quick discussions.",
        user: "Jane Smith",
    },
    {
        rating: 5,
        comment:
            "Image sharing works flawlessly! Made collaboration much smoother with my external partners.",
        user: "Mike Johnson",
    },
    {
        rating: 4,
        comment:
            "Role-based access gave us peace of mind. The controls are clear and secure.",
        user: "Emily Davis",
    },
];

const StarRating = ({ rating }) => {
    // Show  stars 
    return (
        <div className="flex space-x-1 mb-3">
            {[...Array(5)].map((_, i) => (
                <svg
                    key={i}
                    className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-600"
                        }`}
                    fill={i < rating ? "currentColor" : "none"}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.14 6.59a1 1 0 00.95.69h6.92c.969 0 1.371 1.24.588 1.81l-5.6 4.065a1 1 0 00-.364 1.118l2.14 6.59c.3.921-.755 1.688-1.54 1.118l-5.6-4.064a1 1 0 00-1.175 0l-5.6 4.064c-.784.57-1.838-.197-1.54-1.118l2.14-6.59a1 1 0 00-.364-1.118L2.38 11.017c-.783-.57-.38-1.81.588-1.81h6.92a1 1 0 00.95-.69l2.14-6.59z"
                    />
                </svg>
            ))}
        </div>
    );
};

const RatingFeedback = () => {
    return (
        <section className="bg-gray-500 py-12 px-6 my-10">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-white text-center mb-10">
                    User Ratings & Feedback
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {feedbacks.map(({ rating, comment, user }, idx) => (
                        <div
                            key={idx}
                            className="bg-[#1e293b] rounded-lg p-6 text-white shadow-md"
                        >
                            <StarRating rating={rating} />
                            <p className="mb-4 text-gray-300 italic">"{comment}"</p>
                            <p className="text-sm font-semibold text-yellow-400">- {user}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RatingFeedback;
