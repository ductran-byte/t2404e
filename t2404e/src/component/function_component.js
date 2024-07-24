import './main.css';
function FunctionComponent ({title}) {
    return (
        <h1 className='demo' style={{color:"orange"}}>{title}</h1>
    );
}   
export default FunctionComponent;