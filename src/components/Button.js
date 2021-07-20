import '../styles/Button.css';

function Button(props){
    return (
        <button className="Button" type="button" onClick={props.handleClick}>{props.value}</button>
    )
}

export default Button;