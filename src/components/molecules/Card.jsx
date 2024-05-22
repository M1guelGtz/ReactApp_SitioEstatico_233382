import Name from "../atoms/name"
import Url from "../atoms/Url"
import './card.css'
function Cards (props){
    return (
        <div id="Card_card">
            <Name name={props.name}></Name>
            <Url url= {props.url}></Url>
        </div>
    )
}

export default Cards