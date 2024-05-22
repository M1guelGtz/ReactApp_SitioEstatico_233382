import Mysql from "../../Data/MySQL"
import Titulo from "../atoms/titulo"
import Cards from "../molecules/Card"
import './section3.css'
function Section3 () {
    return (
        <div id="card_section">
            <Titulo titulo={Mysql.top}></Titulo>
            {Mysql.canciones.map(canciones=> <Cards name={canciones.name} url = {canciones.Link}></Cards>)}
        </div>
    )
}

export default Section3