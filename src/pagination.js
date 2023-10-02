import { useState } from "react";
function usePagination(items, resultPerPage, pageCount) {
    const [currentPage, setCurrentPage] = useState(1);
    const startIndex = (currentPage - 1) * resultPerPage;
    const endIndex = currentPage * resultPerPage;
    const currentPageItems = items.slice(startIndex, endIndex);
    const dataLength = items.length;

    return {
        currentPage,
        currentPageItems,
        dataLength,
        setCurrentPage,
        pageCount,
    };
}

export default usePagination;
