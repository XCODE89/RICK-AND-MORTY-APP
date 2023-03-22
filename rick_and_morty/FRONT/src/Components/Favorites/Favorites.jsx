import { useSelector, useDispatch } from "react-redux";
import style from "./favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../Redux/actions";

const Favorites = () => {
  const { myFavorites } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };
  return (
    <div>
      <div>
        <select onChange={handlerOrder}>
          <option value="order" disabled="disabled">Order By</option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select onChange={handlerFilter}>
          <option value="order" disabled="disabled">Order By</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Gernderless</option>
        </select>
      </div>

      {myFavorites.map((character) => {
        return (
          <div>
            <div className={style.box}>
              <div className={style.imgBox}>
                <img
                  className={style.img}
                  src={character.image}
                  alt={character.name}
                />
              </div>
              <div className={style.content}>
                <Link to={`/detail/${character.id}`}>
                  <h2 className={style.item}>
                    <small>Nombre:</small>
                    <br></br>
                    {character.name}
                  </h2>
                </Link>
                <h2 className={style.item}>
                  <small>Especie:</small>
                  <br></br>
                  {character.species}
                </h2>
                <h2 className={style.item}>
                  <small>Genero:</small>
                  <br></br>
                  {character.gender}
                </h2>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Favorites;
