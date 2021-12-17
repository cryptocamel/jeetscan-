import React from 'react'
import ReactDOM from 'react-dom'
import { Home } from "./views";
import { Routes, Route } from "React-router-dom";
import { Header, Footer } from "./components";
function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
