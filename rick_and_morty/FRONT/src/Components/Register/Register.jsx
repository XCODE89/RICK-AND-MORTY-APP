import { Link } from "react-router-dom";
import axios from "axios";
import style from "./register.module.css"
import { useState } from "react";
import validation from "../Form/Validation"

const Register = () => {
   const [infoUser, setInfoUser] = useState({
      name: "",
      email: "",
      password: "",
      rePassword: ""
   })
   const [errors, setErrors] = useState({
      name: "",
      email: "",
      password: "",
      rePassword: ""
   })


   const handleOnChange = (e) => {
      setInfoUser({
         ...infoUser, 
         [e.target.name]: e.target.value 
      })
      setErrors(validation({
         ...infoUser, 
         [e.target.name]: e.target.value
      }))
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
               <div className={style.inputCont}>
                  <input type="text" name="name" className={style.input} value={infoUser.name} onChange={handleOnChange} placeholder="Nombre" />
                  <div className={style.errorCont}>
                     {errors.name && <p className={style.alertError}>{errors.name}</p>}
                  </div>
               </div>
               <div className={style.inputCont}>
                  <input type="text" name="email" className={style.input} value={infoUser.email} onChange={handleOnChange} placeholder="Correo" />
                  <div className={style.errorCont}>
                     {errors.email && <p className={style.alertError}>{errors.email}</p>}
                  </div>
               </div>
               <div className={style.inputCont}>
                  <input type="password" name="password" className={style.input} value={infoUser.password} onChange={handleOnChange} placeholder="Contraseña" />
                  <div className={style.errorCont}>
                     {errors.password && <p className={style.alertError}>{errors.password}</p>}
                  </div>
               </div>
               <div className={style.inputCont}>
                  <input type="password" name="rePassword" className={style.input} value={infoUser.rePassword} onChange={handleOnChange} placeholder="Confirmar Contraseña"/>
                  <div className={style.errorCont}>
                     {errors.rePassword && <p className={style.alertError}>{errors.rePassword}</p>}
                  </div>
               </div>
               <button type="submit">REGISTRAR</button>
            </form>
         </div>
      </>
   )
}

export default Register;