import { useSelector, useDispatch } from "react-redux";
import style from "./favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../Redux/actions";

const Favorites = (props) => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  const closeFav = () =>{
    myFavorites.forEach(fav => {props.onClose(fav.id)      
    });
  }
  return (
    <div className={style.general}>
      <div>
        <select className={style.select} onChange={handlerOrder}>
          <option value="order" disabled="disabled">Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select className={style.select} onChange={handlerFilter}>
          <option value="order" disabled="disabled">Order By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
        <button className={style.select} onClick={() =>closeFav()}>Clear Favorites</button>
      </div>
      <div className={style.container}>
      {myFavorites.map((character) => {
        return (
            <div className={style.box}>
              <div className={style.imgBox}>
                <img className={style.img} src={character.image} alt={character.name}/>
              </div>
              <div className={style.content}>
                <Link className={style.nameLink} to={`/detail/${character.id}`}>
                  <h2 className={style.item}>Name: <br/>{character.name}</h2>
                </Link>
              </div>
            </div>
        );
      })}
      </div>
    </div>
  );
};

export default Favorites;
