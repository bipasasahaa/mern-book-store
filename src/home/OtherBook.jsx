import React, { useEffect, useState } from 'react'
import BookCards from '../components/BookCards';

const OtherBook = () => {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3000/all-books").then(res => res.json()).then(data => setBooks(data.slice(2, 8)))
    }, [])
    return (
        <div>
            <BookCards books={books} headline="More Books" />
        </div>
    )
}

export default OtherBook