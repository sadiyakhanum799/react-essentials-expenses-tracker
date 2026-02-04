import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1>marios pizza - online ordering</h1>
       
        <p> authentic pizza since 2000</p>
      </header>
<main>
  <form className="pizza-order-form">
    <h2>place your order</h2>
    <section className="customer-info">
      <h3>customer Information</h3>
    </section>
    <section className="pizza-customization">
      <h3>build your pizza</h3>
    </section>
    <section className='order-summary'>
      <h3>order summary</h3>
    </section>
    <button type='submit' >place order - $0.00 </button>
  </form>
  </main>  
    </div>
  );
}

export default App;
