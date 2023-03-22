import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import style from "./Detail.module.css"


const Detail = () => {
    
    const [character, setCharacter] = useState({});
    const {detailId} = useParams();

    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
        .then((response) => response.json())
        .then((char) => {
            if (char.name) {
            setCharacter(char);
            } else {
            window.alert("No hay personajes con ese ID");
            }
        })
        .catch((err) => {
            window.alert("No hay personajes con ese ID");
        });
        return setCharacter({});
    }, [detailId]);


    return (
        <div className={style.container}>
            <div className={style.box}>
                <div className={style.imgBox}>
                    <img className={style.img} src={character?.image} alt={character.name}></img>
                </div>
                <div className={style.content}>
                    <div className={style.textCont}>
                        <p className={style.item}>Name:<br/>{character?.name}</p>
                    </div>
                    <div className={style.textCont}>
                        <p className={style.item}>Specie:<br/>{character?.species}</p>
                    </div>
                    <div className={style.textCont}>
                        <p className={style.item}>Gender:<br/>{character?.gender}</p>
                    </div>
                    <div className={style.textCont}>
                        <p className={style.item}>Status:<br/>{character?.status}</p>
                    </div>
                    <div className={style.textCont}>
                     <p className={style.item}>Origin:<br/>{character?.origin}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail