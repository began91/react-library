import React, {useState} from 'react';
import './Book.css';

const Book = props => {
    const book = props.book;
    const [read, setRead] = useState(book.read);

    return (
        <div className="book">
            <div className="cover-card" style={{backgroundImage: `url(${book.picUrl})`}}>
            </div>
            <div className="info-card">
                <h3>{book.title}</h3>
                <h4>{book.author}</h4>
                <p>{book.pages} pages</p>
                <label htmlFor="read">
                    <input type="checkbox" name="read" id="read-checkbox" checked={read} onChange={()=>setRead(!read)}/>
                    <span> Read</span>
                </label>
            </div>
        </div>
    )
}

export default Book;