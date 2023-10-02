import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Pages/Home";
import "./App.css";
import SearchCar from "./Pages/SearchCar";

const App = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<Navigate to="/page/1" replace={true} />}
            />
            <Route path="/page/:page" element={<Home />} />
            <Route path="/search" element={<SearchCar />} />
        </Routes>
    );
};
export default App;
