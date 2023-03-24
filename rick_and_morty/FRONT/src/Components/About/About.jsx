import style from "./About.module.css"
import portal from "../../Images/portada.jpg"

const About = () => {
    return (
        <div className={style.cont}>
            <div className={style.me}>
                <img className={style.img} src={portal} alt="hola"/>
            </div>
            <div className={style.image}>"Rick and Morty" es una serie de televisión de animación para adultos creada por Justin Roiland y Dan Harmon. La serie sigue las aventuras de un científico loco llamado Rick y su nieto tonto pero bienintencionado, Morty, a través de diferentes dimensiones y realidades.

La serie se estrenó en el 2013 y ha ganado popularidad por su humor absurdo y sus referencias a la cultura pop. A lo largo de las temporadas, Rick y Morty han enfrentado situaciones como la creación de un universo paralelo, la lucha contra aliens y la exploración de diferentes planetas y dimensiones.

Además de su comedia inteligente, la serie también ha explorado temas como la familia disfuncional, la depresión y la existencia humana. "Rick and Morty" se ha convertido en una de las series animadas más populares y aclamadas por la crítica de los últimos años.</div>
        </div>
    )
}
export default About