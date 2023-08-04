import { useState } from "react"
import validation from "./Validation"
import style from "./form.module.css"
import { Link } from 'react-router-dom';
import axios from "axios";


const Form = ({login}) => {

const [userData, setUserData] = useState({
    username : "",
    password : ""
})

const [errors, setErrors] = useState({
    username : "",
    password : ""
})

const handleOnChange = (event) => {
    setUserData({
        ...userData,
        [event.target.name] : event.target.value
    })

    setErrors (validation({
        ...userData,
        [event.target.name] : event.target.value

    }))
}

const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post("http://localhost:3001/rickandmorty/login", userData)
    console.log(response.data)
    login(userData)
}

    return(
        <div className={style.formCont}>
            <form onSubmit={handleSubmit} className={style.form}>
            <h2 className={style.login}>LOGIN</h2>
                <div className={style.inputCont}>
                    <label htmlFor="username"></label>
                    <input className={style.input} placeholder="Username" type="text" autoComplete="off" name="username" value={userData.username} onChange={handleOnChange}></input>
                    <div className={style.errorCont}>
                    {errors.username && <p className={style.alertError}>{errors.username}</p>}
                    </div>
                </div>
                <div className={style.inputCont}>
                    <label htmlFor="password"></label>
                    <input className={style.input} placeholder="Password" type="password" name="password" value={userData.password} onChange={handleOnChange}></input>
                    <div className={style.errorCont}>
                    {errors.password && <p className={style.alertError}>{errors.password}</p>}
                    </div>
                </div>
                <div>
                    <button type="submit" className={style.button}>INGRESAR</button>
                    <p className={style.text}>¿Aún no tienes una cuenta?</p>
                    <Link to="/register" className={style.button}>UNETE</Link>
                </div>
            </form> 
        </div>
    )
}

export default Form;




