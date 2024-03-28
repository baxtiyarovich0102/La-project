import React from 'react';
import Navbar from "./components/navbar";
import "./App.css"
import Home from "./components/home";
import {Routes, Route} from "react-router-dom";
import Products from "./components/products";
import Product from "./components/product";

function App(props) {
    return (
        <div>
            <Navbar/>
        <Routes>
            <Route path={"/"} element={<Home/>}/>
            <Route path={"/products"} element={<Products/>}/>
            <Route path={"/products/:id"} element={<Product/>}/>
        </Routes>
        </div>
    );
}

export default App;