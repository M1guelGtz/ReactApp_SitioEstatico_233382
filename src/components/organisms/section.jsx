import Mysql from "../../Data/MySQL.js";
import Titulo from "../atoms/titulo.jsx";
import Card from "../molecules/cards";
import './section.css';
function Section () {
    return (
        <div id="cards_section">
            <Titulo titulo={Mysql.titulo}></Titulo>
            {Mysql.Albums.map(contacts => <Card image={contacts.image} text={contacts.text}></Card>)}
        </div>
    )
}

export default Section