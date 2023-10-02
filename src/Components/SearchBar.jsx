import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
const SearchBar = () => {
    const [keyword, setKeyword] = useState("");
    const navigate = useNavigate();
    const handleChange = (e) => {
        setKeyword(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/search?keyword=${keyword}`);
    };
    return (
        <form
            className="flex h-12 w-96 bg-white relative rounded-2xl overflow-hidden"
            onSubmit={handleSubmit}
        >
            <input
                type="text"
                placeholder="Search..."
                className="h-full w-[88%] bg-transparent outline-none pl-4 placeholder:font-medium"
                value={keyword}
                onChange={(e) => handleChange(e)}
            />
            <FiSearch className="text-2xl absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
        </form>
    );
};

export default SearchBar;
