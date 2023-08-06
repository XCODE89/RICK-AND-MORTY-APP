import { useState } from "react"
import {useNavigate} from "react-router-dom"
import validation from "./Validation"
import style from "./form.module.css"
import { Link } from 'react-router-dom';
import axios from "axios";


const Form = ({login}) => {
    
    const navigate = useNavigate();
const [userData, setUserData] = useState({
    email : "",
    password : ""
})

const [errors, setErrors] = useState({
    email : "",
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
    console.log("ffkdjfb")
    const response = await axios.post("http://localhost:3001/rickandmorty/login", userData)
    if (response.data.token) {
            login(true)
            navigate("/home")
    } else {
        alert(response.data.error)
    }
}

    return(
        <div className={style.formCont}>
            <form onSubmit={handleSubmit} className={style.form}>
            <h2 className={style.login}>LOGIN</h2>
                <div className={style.inputCont}>
                    <label htmlFor="email"></label>
                    <input className={style.input} placeholder="email" type="text" autoComplete="off" name="email" value={userData.email} onChange={handleOnChange}></input>
                    <div className={style.errorCont}>
                    {errors.email && <p className={style.alertError}>{errors.email}</p>}
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




