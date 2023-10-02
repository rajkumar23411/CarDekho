import { FiUsers } from "react-icons/fi";
import { BiGasPump, BiTachometer } from "react-icons/bi";
import { TfiShare } from "react-icons/tfi";
import { BiHeart } from "react-icons/bi";
const CarFeatures = ({ icon, feat }) => {
    return (
        <div className="flex items-center gap-2">
            <span className="text-blue-600 text-xl">{icon}</span>
            <span className="font-medium text-gray-600">{feat}</span>
        </div>
    );
};
const CarCard = ({ car }) => {
    // 3 digit random number
    // range 300 - 999
    const generateRandomPrice = () => {
        return Math.floor(Math.random() * 700) + 300;
    };
    return (
        <div className="h-full w-full border-2 border-white rounded-3xl shadow-lg shadow-gray-400 p-4 flex flex-col gap-4 backdrop-blur-xl">
            <div className="w-full h-64 rounded-3xl overflow-hidden">
                <img
                    src={car.image}
                    alt={car.title}
                    className="w-full h-full object-cover transition-all hover:scale-105 duration-300 ease-in-out"
                />
            </div>
            <div>
                <div className="flex items-center justify-between">
                    <span className="text-2xl font-medium text-gray-900">
                        {car.title}
                    </span>
                    <span className="border-2 border-dashed border-blue-400 rounded-xl px-4 py-1 font-medium text-gray-800">
                        {car.start_production}
                    </span>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-y-4 border-b-2 border-gray-300 pb-4">
                <CarFeatures icon={<FiUsers />} feat="4 People" />
                <CarFeatures icon={<BiGasPump />} feat="Gasoline" />
                <CarFeatures icon={<BiTachometer />} feat=" 8.2km/1-litre" />
                <CarFeatures icon={<TfiShare />} feat="Autometic" />
            </div>
            <div className="flex items-center justify-between">
                <div className="flex items-end">
                    <span className="text-2xl font-medium text-gray-800">
                        ${generateRandomPrice()} /
                    </span>
                    <span className="font-medium text-gray-800"> month</span>
                </div>
                <div className="flex items-center justify-center gap-4 h-10">
                    <span className="h-full w-10 bg-blue-200 grid place-items-center rounded-xl">
                        <BiHeart className="text-2xl text-blue-600" />
                    </span>
                    <span className="bg-blue-500 text-white hover:bg-blue-600 h-full px-4 grid place-items-center cursor-pointer rounded-2xl font-medium">
                        Rent now
                    </span>
                </div>
            </div>
        </div>
    );
};

export default CarCard;
