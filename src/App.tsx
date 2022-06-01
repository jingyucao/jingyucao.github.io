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
                <Route path='/*' element={<Navigate to='/website'/>}/>
                <Route path='/website' element={<Welcome/>}/>
                <Route path='/website/aboutme' element={<AboutMe/>}/>
                <Route path='/website/foodapp' element={<FoodDemo/>}/>
                <Route path='/website/covidmap' element={<CovidMap/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
