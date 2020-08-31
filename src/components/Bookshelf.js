import React, {useState} from 'react';
import Book from './Book';
import AddBook from './AddBook';
import './Bookshelf.css';

const initialLibrary = [];

const newBook = (title, author, pages, read, picUrl) => {
    return {title, author, pages, read, picUrl}
}

initialLibrary.push(newBook('The Hobbit', 'J.R.R. Tolkien',295,false, 'https://images-na.ssl-images-amazon.com/images/I/419UGp1CsQL._SX331_BO1,204,203,200_.jpg'));
initialLibrary.push(newBook('Fahrneheit 451', 'Ray Bradbury',243,true, 'https://m.media-amazon.com/images/I/711ZL2p7DmL._AC_UY436_QL65_.jpg'));
initialLibrary.push(newBook('A Farewelll to Ams', 'Ernest Hemingway',355,true, 'https://m.media-amazon.com/images/I/71jLEXvpd7L._AC_UY436_QL65_.jpg'));
initialLibrary.push(newBook('The Catcher in the Rye', 'J.D. Salinger',234,true, 'https://m.media-amazon.com/images/I/511BDFArolL._AC_UY436_QL65_.jpg'));

const Bookshelf = () => {
    const [library, setLibrary] = useState(initialLibrary);

    const addToLibrary = book => {
        setLibrary([...library, book]);
    }
    
    return (
        <div id="bookshelf">
            {library.map(book => (<Book book={book} key={book.title}/>))}
            <AddBook addBook={addToLibrary}/>
        </div>
    )
}

export default Bookshelf;