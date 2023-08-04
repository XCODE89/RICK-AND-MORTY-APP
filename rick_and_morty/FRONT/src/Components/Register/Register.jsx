import { Link } from "react-router-dom";
import axios from "axios";
import style from "./register.module.css"
import { useState } from "react";

const Register = () => {
   const [infoUser, setInfoUser] = useState({
      name: "",
      email: "",
      password: "",
      rePassword: "",
   })

   const handleOnChange = (e) => {
      setInfoUser({
         ...infoUser, 
         [e.target.name]: e.target.value 
      })
   }


   const handleSubmit = async (e) => {
      e.preventDefault()
         const response = await axios.post("http://localhost:3001/rickandmorty/", infoUser)
         setInfoUser({
            name: "",
            email: "",
            password: "",
            rePassword: "",
         })
         if(response.data.error) {
            alert(response.data.error)
         } else {
            alert("registrado")
         }
   }
   return(
      <>
         <Link to="/">REGRESAR</Link>
         <div className={style.formContainer}>
            <form onSubmit={handleSubmit} className={style.form}>
               <h2 className={style.title}>Registro</h2>
               <input type="text" name="name" className={style.input} value={infoUser.name} onChange={handleOnChange} placeholder="Nombre" />
               <input type="text" name="email" className={style.input} value={infoUser.email} onChange={handleOnChange} placeholder="Correo" />
               <input type="text" name="password" className={style.input} value={infoUser.password} onChange={handleOnChange} placeholder="Contraseña" />
               <input type="text" name="rePassword" className={style.input} value={infoUser.rePassword} onChange={handleOnChange} placeholder="Confirmar Contraseña" />
               <button type="submit">REGISTRAR</button>
            </form>
         </div>
      </>
   )
}

export default Register;