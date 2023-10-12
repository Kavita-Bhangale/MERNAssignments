import "./icon.css";
//example of HOC
const Icon = (props) => {
    const init = props.value[0];
    return <div><h2 className="icon">{init}</h2></div>
}

export default Icon;