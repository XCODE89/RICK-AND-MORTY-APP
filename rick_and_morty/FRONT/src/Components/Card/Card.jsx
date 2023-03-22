import style from "./Card.module.css"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import { addFavorite, deleteFavorite } from "../../Redux/actions"

export default function Card(props) {
const myFavorites = useSelector(state => state.myFavorites)
const dispatch = useDispatch()

const [isFav, setIsFav] = useState(false)

const handleFavorite = () => {
   if(isFav === true) {
      setIsFav(false)
      dispatch(deleteFavorite(props.id))
   } else {
      setIsFav(true)
      dispatch(addFavorite(props))
   }
}

useEffect(() => {
   myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
         setIsFav(true);
      }
   });
}, [myFavorites]);

return (
   <div className={style.container}>
      <div className={style.box}>
         <div className={style.imgBox}>
            <div className={style.icons}>
               {
                  isFav 
                  ? (<button className={style.like} onClick={handleFavorite}>❤️</button>) 
                  : (<button className={style.like} onClick={handleFavorite}>🤍</button>)
               }
                  <button className={style.eliminar} onClick={() =>props.onClose(props.id)}>X</button>
            </div>
               <img className={style.img} src={props.image} alt={props.name} />
         </div>
         <div className={style.content}>
            <Link to={`/detail/${props.id}`} className={style.nameLink}>
               <h2 className={style.item}><small>Name:</small><br></br>{props.name}</h2>
            </Link>
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