import { useState } from "react"
import validation from "./Validation"

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

const handleSubmit = (event) => {
    event.preventDefault();
    login(userData)
}

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="username"></label>
            <input type="text" name="username" value={userData.username} onChange={handleOnChange}></input>
            {errors.username && <p>{errors.username}</p>}
            <label htmlFor="password"></label>
            <input type="password" name="password" value={userData.password} onChange={handleOnChange}></input>
            {errors.password && <p>{errors.password}</p>}
            <button>LOGIN</button>
        </form>
    )
}
export default Form;