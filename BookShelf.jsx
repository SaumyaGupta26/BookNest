
import React from 'react';

const Bookshelf = ({ books }) => {
    return (
        <div>
            {books.length === 0 ? (
                <p className='no-books'>No books in your bookshelf.</p>
            ) : (
                books.map((book) => (
                    <div key={book.key} className="book-card">
                        <h3>{book.title}</h3>
                        <p>Author: {book.author_name?.join(', ') || 'N/A'}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default Bookshelf;
