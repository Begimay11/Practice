import { useState } from "react";
import Button from "../UI/Button";
import { ExpensesForm } from "./ExpensesForm";

function NewExpenses(props){
    const [state,setState] = useState(false)
  
    const openClickHandler = ()=> {
        setState((prev) => !prev)
      
    }
    return <div style={{backgroundColor: '#AD9BE9',width: '800px', height: '90px',paddingTop: '20px'}}>
        {state ? <ExpensesForm onClick={openClickHandler}/> : <Button onClick={openClickHandler}>Dobavit novyi rashod</Button> }

        {/* // <ExpensesForm/> */}
        {/* <Button>Dobavit novyi rashod</Button> */}
        {/* <ExpensesForm/> */}
    </div>
}
export default NewExpenses;