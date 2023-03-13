import Card from '../Card/Card.jsx';

export default function Cards(props) {
    
    return   (
    <div className="contCards">
        {
            props.characters.map(character=>{
                return <Card
                key={`${character.id}-${character.name}`}
                id={character.id}
                name={character.name}
                species={character.species}
                gender={character.gender}
                image={character.image}
                onClose={props.onClose}
                />
            })
        }
    </div>);
}

