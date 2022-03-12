import React from 'react';
import Layout from './components/layout/Layout';
import {Routes, Route, Navigate} from 'react-router-dom';
import Welcome from './components/welcome/Welcome';
import AboutMe from './components/aboutme/AboutMe';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate to='/welcome'/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
                <Route path='/about-me' element={<AboutMe/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
