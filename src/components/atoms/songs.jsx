import './songs.css'
function Songs (props) {
    return (
        <h2 id='Songs'>{props.int}_{props.name} {props.duracion} </h2>
    )
}
export default Songs