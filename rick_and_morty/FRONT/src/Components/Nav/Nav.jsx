
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from "./Nav.module.css"


const Nav = (props) => {
    return (
        <div className={style.navCont}>
            <nav className={style.nav}>
                <div className={style.routesCont}>
                <Link to="/home" className={style.link}>Home</Link>
                <Link to="/about" className={style.link}>About</Link>
                <Link to="/favorites" className={style.link}>Favorites</Link>
                <Link to="/" className={style.link}> Logout</Link>
                </div>
                <div className={style.barCont}>
                <SearchBar onSearch={props.onSearch} />
                </div>
            </nav>

        </div>
    )
};

export default Nav;

