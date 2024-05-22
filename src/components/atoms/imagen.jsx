import './imagen.css'
function Image (props) {
    return (
    <div id='cards_img'>
        <img id='cards_img_img' src={props.image}></img>
    </div>
    )
}
export default Image    