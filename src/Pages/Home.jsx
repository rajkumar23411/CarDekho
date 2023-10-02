import { useNavigate } from "react-router-dom";
import CarCard from "../Components/CarCard";
import Navbar from "../Components/Navbar";
import Pagination from "../Components/Pagination";
import cars from "../cars.json";
import usePagination from "../pagination";
const Home = () => {
    const navigate = useNavigate();
    const pageCount = 10; // hard coded since given in the assignment docx
    const resultPerPage = 6;
    const { currentPage, currentPageItems, dataLength, setCurrentPage } =
        usePagination(cars, resultPerPage, pageCount);
    const handlePageChange = (newPage) => {
        if (newPage <= pageCount && newPage > 0) {
            setCurrentPage(newPage);
            navigate(`/page/${newPage}`);
        }
    };
    return (
        <div className="h-full w-full px-6">
            <Navbar />
            <div className="grid grid-cols-3 gap-10 my-10">
                {currentPageItems.map((car, i) => (
                    <CarCard key={i} car={car} />
                ))}
            </div>
            <Pagination
                dataLength={dataLength}
                currentPage={currentPage}
                totalPages={pageCount}
                handlePageChange={handlePageChange}
            />
        </div>
    );
};

export default Home;
