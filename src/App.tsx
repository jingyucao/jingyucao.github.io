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
                <Route path='/' element={<Navigate to='/welcome'/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
                <Route path='/food-app' element={<FoodDemo/>}/>
                <Route path='/covid-map' element={<CovidMap/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
