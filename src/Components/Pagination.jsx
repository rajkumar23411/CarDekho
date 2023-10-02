import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
const Pagination = ({
    currentPage,
    totalPages,
    handlePageChange,
    dataLength,
}) => {
    const handlePrevClick = () => {
        if (currentPage > 1) {
            handlePageChange(currentPage - 1);
        }
    };
    const handleNextClick = () => {
        if (currentPage < totalPages) {
            handlePageChange(currentPage + 1);
        }
    };
    return (
        <div className="flex items-center justify-between rounded-3xl border-2 border-white mb-2 px-6 h-16 shadow-lg shadow-gray-400">
            <div>6 from {dataLength}</div>
            <div className="flex gap-2 items-center justify-center">
                <button
                    onClick={handlePrevClick}
                    disabled={currentPage === 1}
                    className="bg-white shadow-md rounded-lg p-2 hover:bg-blue-100"
                >
                    <FiArrowLeft />
                </button>

                {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => handlePageChange(index + 1)}
                        className={`${
                            index + 1 === currentPage
                                ? "bg-blue-100"
                                : "bg-white "
                        } shadow-md rounded-lg text-gray-800 h-8 w-8 grid place-items-center font-medium hover:bg-blue-100`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={handleNextClick}
                    disabled={currentPage === totalPages}
                    className="bg-white shadow-md rounded-lg p-2 hover:bg-blue-100"
                >
                    <FiArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Pagination;
