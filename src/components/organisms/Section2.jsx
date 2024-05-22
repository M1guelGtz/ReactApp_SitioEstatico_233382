import Mysql from "../../Data/MySQL.js";
import Songs from "../atoms/songs.jsx";
import Titulo from "../atoms/titulo.jsx";
import './section2.css';
function Section2 () {
    return (
        <div id="cards_section2">
            <Titulo titulo={Mysql.songsTitulo}></Titulo>
            {Mysql.songsFavs.map(favs => <Songs name={favs.name} duracion={favs.duracion} int={favs.numero}></Songs>)}
        </div>
    )
}

export default Section2