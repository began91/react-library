import React from 'react';
import Bookshelf from './Bookshelf';
import './Library.css';

const Library = () => {
    return (
        <div id="library">
            <h1>My Library</h1>
            <Bookshelf/>
        </div>
    )
}

export default Library;