import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Detail = () => {
    
    const [character, setCharacter] = useState({});
    const {detailId} = useParams();

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
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
        <div>
            <Link to="/home">Home</Link>
            <h1>{character?.name}</h1>
            <p>{character?.status}</p>
            <p>{character?.species}</p>
            <p>{character?.origin?.name}</p>
            <img src={character?.image} alt={character.name}></img>
        </div>
    )
}

export default Detail