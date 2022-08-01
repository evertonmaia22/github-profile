import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './pages/home';
import { Repos } from './pages/repos';

const Pages = () => (
    <Router>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/repos' element={<Repos />} />
        </Routes>
    </Router>
);

export default Pages;