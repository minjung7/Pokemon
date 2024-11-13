import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/dex";
import Detail from "../pages/detail";




const Router = () => {
    return (
        <BrowserRouter>
            
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/dex' element={<Dex />} />
                <Route path='/detail/:id' element={<Detail />} />
                </Routes>

        </BrowserRouter>
    );
};

export default Router;