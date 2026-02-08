import React,{useState} from 'react';
import './index.css';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('food');

  const categories = ['food', 'transport', 'entertainment', 'bills','shopping','others'];


  const addExpene = (e) => {
    e.preventDefault();
    if(!description.trim() || !amount)return;

    const newExpense = {
      id: Date.now(),
      description:description.trim(),
      amount: parseFloat(amount),
      category,
      date: new Date().toDateString().split('T')[0]
    
    };
    setExpenses((prevExpenses) => [newExpense, ...prevExpenses]);
    setDescription('');
    setAmount('');
  };
  const totalAmount = expenses.reduce((sum, expense) => sum + expense.amount, 0);

return(
  <div className='App'>
    <h1>personal expense tracker</h1>
    <form className='expense-form' onSubmit={addExpene}>
      <div className='form-group'>
        <label>description</label>
        <input
          type='text'
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder='what did you spent on'
          required
        />
      </div>
      <div className='form-group'>
        <label>amount</label>
        <input
          type='number'
          step='0.01'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder='0.00'
          required
        />
      </div>
      <div className='form-group'>
        <label>category</label>
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <button type='submit'>add expense</button>
    </form>
    <div className='expense-list'>
      {expenses.length==0?(
<p style={{textAlign:'center',color:'#7e6565ff',fontstyle:'italic'}}>no expense yet. add your first expense above</p>
      ):(
        expenses.map(expense => (
          <div key ={expense.id} className='expense-item'>
            <div className='expense-info'>
             <div className='expense-description'>{expense.description}</div>
             <div className='expense-category'>{expense.category}</div>
              <div style={{color:'#666',fontSize:'14px'}}>{expense.date}</div>
              </div>
              <div className='expense-amount'>{expense.amount}</div>
             </div>
        ))
)}
        </div>
     <div className='total-section'>
      <h2> total expenses</h2>
       </div>
</div>
)
}

export default App;
