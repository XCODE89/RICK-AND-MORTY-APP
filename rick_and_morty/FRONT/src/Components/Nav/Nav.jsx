import React, { useEffect, useState } from 'react';
import axios from "axios"

import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import style from "./Nav.module.css"
import logo from "../../Images/titulo.png"


const Nav = (props) => {
    const [user, setUser] = useState("")

    useEffect(() => {
        const profile = async () => {
            
            const token = (localStorage.getItem("token")).replace(/^"(.*)"$/, '$1')
            const response = await axios.get("http://localhost:3001/rickandmorty/profile", {
                headers: {
                  Authorization: token
                }
            })
            const user = response.data.username.charAt(0).toUpperCase() + response.data.username.slice(1).toLowerCase();
            setUser(user)
            console.log("holitas", user)
        }
        profile()
    }, [])


    const token = localStorage.getItem("token")
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
                {token && <div className={style.welcome}>Bienvenido {user}</div>}
            </nav>
        </div>
    )
};

export default Nav;