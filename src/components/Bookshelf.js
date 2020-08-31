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

    const handleDelete = event => {
        const indexOfBook = library.findIndex(book => {
            console.log(book.id);
            console.log(event.target.parentElement.parentElement.id);
            return book.id === event.target.parentElement.parentElement.id;
        });
        if (indexOfBook!==-1) {
            let newLibrary = [...library];
            newLibrary.splice(indexOfBook,1);
            setLibrary(newLibrary);
        }
    }
    
    return (
        <div id="bookshelf">
            {library.map((book, i) => {
                book.id='book-'+i;
                return (<Book book={book} key={book.id} onDelete={handleDelete}/>)
            })}
            <AddBook addBook={addToLibrary}/>
        </div>
    )
}

export default Bookshelf;