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
                <Route path='/*' element={<Navigate to='/'/>}/>
                <Route path='/' element={<Welcome/>}/>
                <Route path='/aboutme' element={<AboutMe/>}/>
                <Route path='/foodapp' element={<FoodDemo/>}/>
                <Route path='/covidmap' element={<CovidMap/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
