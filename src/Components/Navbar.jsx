import NavTag from "./NavTag";
import SearchBar from "./SearchBar";

const Navbar = () => {
    return (
        <div className="w-full h-[5rem] border border-white rounded-3xl shadow-lg mt-1 flex items-center px-6 gap-8">
            <SearchBar />
            <NavTag tagname="Relevance" />
            <NavTag tagname="All brands" />
        </div>
    );
};

export default Navbar;
