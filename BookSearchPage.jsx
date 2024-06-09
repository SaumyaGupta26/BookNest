
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookSearch from '../components/BookSearch';

const BookSearchPage = () => {
    const navigate = useNavigate();
    const [bookshelf, setBookshelf] = useState(() => {
        const savedBooks = localStorage.getItem('bookshelf');
        return savedBooks ? JSON.parse(savedBooks) : [];
    });

    const handleAddToBookshelf = (book) => {
        const updatedBookshelf = [...bookshelf, book];
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
    };

    return (
        <div className='booksearchpage'>
            <h1>Book Search</h1>
            <BookSearch onAddToBookshelf={handleAddToBookshelf} />
            <button onClick={() => navigate('/bookshelf')}>Go to My Bookshelf</button>
        </div>
    );
};

export default BookSearchPage;
