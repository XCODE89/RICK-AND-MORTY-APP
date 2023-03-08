
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
    <nav className='nav'>
        <Link to="/about">About</Link>
        <SearchBar onSearch={props.onSearch} />
        <Link to="/home">Home</Link>
    </nav>
    )
};

export default Nav;