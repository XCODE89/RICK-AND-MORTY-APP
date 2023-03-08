import style from "./Card.module.css"
import { Link } from "react-router-dom"

export default function Card(props) {



   return (
      <div className={style.container}>
         <div className={style.box}>
            <div className={style.imgBox}>
               <button className={style.eliminar} onClick={() =>props.onClose(props.id)}>X</button>
               <img className={style.img} src={props.image} alt={props.name} />
            </div>
            <div className={style.content}>
               <Link to={`/detail/${props.id}`}>
                  <h2 className={style.item}><small>Nombre:</small><br></br>{props.name}</h2>
               </Link>
               <h2 className={style.item}><small>Especie:</small><br></br>{props.species}</h2>
               <h2 className={style.item}><small>Sexo:</small><br></br>{props.gender}</h2>
            </div>
         </div>
      </div>
      // <div>
      //    <button onClick={()=>{onClose(id)}}>X</button>
      //    <h2>{name}</h2>
      //    <h2>{species}</h2>
      //    <h2>{gender}</h2>
      //    <img src={image} alt={name} />
      // </div>
   )
}