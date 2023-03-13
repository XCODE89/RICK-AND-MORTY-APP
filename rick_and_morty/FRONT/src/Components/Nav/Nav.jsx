
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';


const Nav = (props) => {
    return (
    <nav className='nav'>
        <div>
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/"> Logout</Link>
        </div>
        <SearchBar onSearch={props.onSearch} />
    </nav>
    )
};

export default Nav;
