
import React from 'react';
import { useNavigate } from 'react-router-dom';
import BookShelf from '../components/BookShelf';

const BookShelfPage = () => {
    const navigate = useNavigate();
    const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];

    return (
        <div>
            <h1>My Bookshelf</h1>
            <BookShelf books={bookshelf} />
            <button className="back-button" onClick={() => navigate('/')}>Back to Search</button>
        </div>
    );
};

export default BookShelfPage;

