
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookSearchPage from './pages/BookSearchPage';
import BookShelfPage from './pages/BookShelfPage';

const App = () => {
    return (
        <Router>
          <div className="container">
            <Routes>
                <Route exact path="/" element={<BookSearchPage/>} />
                <Route path="/bookshelf" element={<BookShelfPage/>} />
            </Routes>
            </div>
        </Router>
    );
};

export default App;
