import { Link } from "react-router-dom";

const NoResults = ({ keyword }) => {
    return (
        <div className="h-[80vh] flex items-center justify-center flex-col">
            <h1 className="text-gray-800 text-3xl font-medium">
                No result found for{" "}
                <span className="text-blue-600">"{keyword}"</span>
            </h1>
            <h2 className="text-gray-700 ">
                Please check your spelling and try again
            </h2>
            <Link
                to="/"
                className="bg-blue-500 text-white font-medium mt-6 cursor-pointer hover:bg-blue-600 px-4 py-2 rounded-lg"
            >
                Go Back
            </Link>
        </div>
    );
};

export default NoResults;
