import '../styles/TextInput.css';

function TextInput(props){
    return (
        <input className="TextInput" type={props.type} placeholder={props.placeholder} value={props.value} onChange={props.handleChange}></input>
    )
}

export default TextInput;