const Input = (props)=> {
    return <div>
        <label htmlFor={props.id}>{props.children}</label>
        <input type={props.type} id={props.id} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    </div>
}
export default Input;