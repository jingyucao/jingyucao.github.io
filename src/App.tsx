import React from 'react';
import Layout from './components/layout/Layout';
import {Routes, Route, Navigate} from 'react-router-dom';
import Welcome from './components/welcome/Welcome';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path='/' element={<Navigate to='/welcome'/>}/>
                <Route path='/welcome' element={<Welcome/>}/>
            </Routes>
        </Layout>
    );
}

export default App;
