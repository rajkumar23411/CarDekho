import { Link, useLocation, useNavigate } from "react-router-dom";
import cars from "../cars.json";
import CarCard from "../Components/CarCard";
import Navbar from "../Components/Navbar";
import usePagination from "../pagination";
import Pagination from "../Components/Pagination";

const SearchCar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const query = new URLSearchParams(location.search);
    const keyword = query.get("keyword");
    const filteredCars = cars.filter((car) =>
        car.title.toLowerCase().includes(keyword.toLowerCase())
    );
    const pageCount = Math.ceil(filteredCars.length / 6);
    const resultPerPage = 6;
    const { currentPage, currentPageItems, dataLength, setCurrentPage } =
        usePagination(filteredCars, resultPerPage, pageCount);

    const handlePageChange = (newPage) => {
        if (newPage <= pageCount && newPage > 0) {
            setCurrentPage(newPage);
            navigate(`/search?keyword=${keyword}&page=${newPage}`);
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

            {filteredCars.length > 6 && (
                <Pagination
                    dataLength={dataLength}
                    currentPage={currentPage}
                    totalPages={pageCount}
                    handlePageChange={handlePageChange}
                />
            )}
        </div>
    );
};

export default SearchCar;
