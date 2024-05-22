import Image from "../atoms/imagen"
import Text from "../atoms/text"
import './cards.css'
function Card (props){
    return (
        <div id="card">
            <Image image={props.image}></Image>
            <Text text={props.text}></Text>
        </div>
    ) 
}

export default Card