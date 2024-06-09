
import React, { useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookSearch = ({ onAddToBookshelf }) => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = async (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            const response = await axios.get(`https://openlibrary.org/search.json?q=${value}&limit=10&page=1`);
            setResults(response.data.docs);
        } else {
            setResults([]);
        }
    };

    return (
        <div >
            <input
                type="text"
                value={query}
                onChange={handleSearch}
                placeholder="Search for books..."
            />
            <div className="results">
                {results.map((book) => (
                    <BookCard key={book.key} book={book} onAddToBookshelf={onAddToBookshelf} />
                ))}
            </div>
        </div>
    );
};

export default BookSearch;
