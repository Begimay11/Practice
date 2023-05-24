
import './App.css';
import Expenses from './components/expenses/Expenses';
import NewExpenses from './components/newExpenses/NewExpenses';

const data = [
  {
    title: 'alma',
    price: 30
  },
  {
    title: 'banan',
    price: 30
  },
  {
    title: 'abricos',
    price: 30
  },
  {
    title: 'shabdaly',
    price: 30
  },
]
function App() {
  return (
    <div className="App">
     <NewExpenses/>
     {data.map((el)=> {
      //  return <Expenses title = {el.title} price={el.price}/>
     })}
     {/* <Expenses data={data}/> */}
    </div>
  );
}

export default App;
