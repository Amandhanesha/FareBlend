// Header.jsx
import React,{ useState } from 'react';

function Header1() {
  return (
    <header>
      <img src="fareblend_logo.png" alt="FareBlend Logo" />
      <h1>FareBlend</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </nav>
    </header>
  );
}



function SplitBillSection() {
  const [billItems, setBillItems] = useState([
    { name: 'Arman', amount: 0.00 },
    { name: 'Raj', amount: 0.00 },
    { name: 'Uttam', amount: 20.00 },
    { name: 'Ashu', amount: 0.00 },
  ]);

  const handleInputChange = (event, index) => {
    const newBillItems = [...billItems];
    newBillItems[index].amount = parseFloat(event.target.value);
    setBillItems(newBillItems);
  };

  const handleAddPerson = () => {
    setBillItems([...billItems, { name: '', amount: 0.00 }]);
  };

  const totalAmount = billItems.reduce((sum, item) => sum + item.amount, 0);

  return (
    <section className="split-bill-section">
      <h2>Split Bill</h2>
      <p>Split With:</p>
      {billItems.map((item, index) => (
        <BillItem
          key={index}
          name={item.name}
          amount={item.amount}
          onInputChange={(event) => handleInputChange(event, index)}
        />
      ))}
      <button onClick={handleAddPerson}>Add More</button>
      <div className="total">Total: ₹{totalAmount}</div>
    </section>
  );
}

//export default SplitBillSection;

// BillItem.jsx
//import React from 'react';

function BillItem({ name, amount, onInputChange }) {
  return (
    <div className="bill-item">
      <span>{name}</span>
      <input type="number" value={amount} onChange={onInputChange} />
    </div>
  );
}

export default BillItem;
