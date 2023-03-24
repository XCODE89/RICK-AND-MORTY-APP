
import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from "./Nav.module.css"
import logo from "../../Images/titulo.png"


const Nav = (props) => {
    return (
        <div className={style.navCont}>
            <nav className={style.nav}>
                <div className={style.routesCont}>
                    <img className={style.logo} src={logo} alt="logo"/>
                    <Link to="/home" className={style.link}>Home</Link>
                    <Link to="/about" className={style.link}>About</Link>
                    <Link to="/favorites" className={style.link}>Favorites</Link>
                    <Link to="/" className={style.link}> Logout</Link>
                </div>
                <div className={style.barCont}>
                <SearchBar onSearch={props.onSearch} randomChar={props.randomChar} clearAll={props.clearAll}/>
                </div>
            </nav>

        </div>
    )
};

export default Nav;

