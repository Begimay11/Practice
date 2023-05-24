import { useState } from "react"
import Button from "../UI/Button"
import Input from "../UI/Input"

export const ExpensesForm =(props)=> {
    const [text,setText] = useState('')
    const [number,setNumber] = useState('')
    const [date,setDate] = useState('')

    const textChangeHandler = (e)=> {
        setText(e.target.value)
        console.log(text);
    }
    const numberChangeHandler = (e)=> {
        setNumber(e.target.value)
        console.log(number);
    }
    const dateChangeHandler = (e)=> {
        setDate(e.target.value)
        console.log(date);
    }
    const submitChangeHandler =(e)=> {
        e.preventDefault()

        const addList = {
            title: text,
            price: number,
            date: new Date(date)
        }
    }
    return <div style={{height: '250px'}}>
        <Input type='text' placeholder='Zagolovok' children='Zagolovok' value={text} onChange={textChangeHandler}/>
        <Input type='number' placeholder='Kolichestvo' children='Kolichestvo' value={number} onChange={numberChangeHandler}/>
        <Input type='date' placeholder='Data' children='Data' value={date} onChange={dateChangeHandler}/>
        <Button onClick={props.onClick}>Otmena</Button>
        <Button>Dobavit rashody</Button>
    </div>
}