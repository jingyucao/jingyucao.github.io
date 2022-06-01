import React from 'react';
import Layout from './components/layout/Layout';
import {Routes, Route, Navigate} from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import AboutMe from './components/aboutme/AboutMe';
import FoodDemo from "./components/food-demo/FoodDemo";
import CovidMap from "./components/covidmap/CovidMap";

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate to='/website?page=welcome'/>}/>
                <Route path='/website?page=welcome' element={<Welcome/>}/>
                <Route path='/website?page=aboutme' element={<AboutMe/>}/>
                <Route path='/website?page=foodapp' element={<FoodDemo/>}/>
                <Route path='/website?page=covidmap' element={<CovidMap/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
