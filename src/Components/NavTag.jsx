import { FiChevronDown } from "react-icons/fi";
const NavTag = ({ tagname }) => {
    return (
        <div className="flex items-center justify-center gap-1 cursor-pointer">
            <span className="font-medium text-gray-600">{tagname}</span>
            <FiChevronDown className="font-medium text-gray-600" />
        </div>
    );
};
export default NavTag;
