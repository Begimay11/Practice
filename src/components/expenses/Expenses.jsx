import { ExpensesCard } from "./ExpensesCard";

function Expenses(props){
    const {data} = props;
    return <div>

        {/* {data.map((el)=> {
            return <ExpensesCard el={el}/>
        })} */}
        <div>{props.title}</div>
        <div>{props.price}</div>
    </div>
}
export default Expenses;