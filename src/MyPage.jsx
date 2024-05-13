import React, { useState } from 'react';
import './MyPage.css';
function App() {
  const [description, setDescription] = useState('');
  const [billAmount, setBillAmount] = useState('');
  const [people, setPeople] = useState([]);
  const [newPerson, setNewPerson] = useState('');
  const [dividedAmount, setDividedAmount] = useState(null);
  const [billDescription, setBillDescription] = useState('');

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleBillAmountChange = (event) => {
    setBillAmount(event.target.value);
  };

  const handleNewPersonChange = (event) => {
    setNewPerson(event.target.value);
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Description:", description);
    console.log("Bill Amount:", billAmount);
  };

  const handleAddPeople = () => {
    // Add new person to the list
    setPeople([...people, newPerson]);
    setNewPerson(''); // Clear input field after adding person
  };

  const divideBillAmongPeople = () => {
    if (people.length === 0) {
      alert("Please add at least one person.");
      return;
    }

    const amountPerPerson = parseFloat(billAmount) / people.length;
    setDividedAmount(amountPerPerson.toFixed(2));
  };

  const generateBillDescription = () => {
    if (!description || !billAmount || people.length === 0 || !dividedAmount) {
      alert("Please fill in all fields and divide the bill among people.");
      return;
    }

    const peopleString = people.map(person => `${person}: Rupees ${dividedAmount}`).join(", ");
    const descriptionString = `Description: ${description}, Bill Amount: Rupees ${billAmount}, People: ${peopleString}`;
    setBillDescription(descriptionString);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div className="title">FareBlend</div>
        <div className="navigation">
          <button>Home</button>
          <button>Contact Us</button>
        </div>
      </header>
      <div className="content">
        <h2>Enter Details:</h2>
        <div>
          <label>Description of Bill:</label>
          <input
            type="text"
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label>Bill Amount:</label>
          <input
            type="number"
            value={billAmount}
            onChange={handleBillAmountChange}
          />
        </div>
        <button onClick={handleSubmit}>Submit</button>
        <div>
          <input
            type="text"
            value={newPerson}
            onChange={handleNewPersonChange}
            placeholder="Enter Name"
          />
          <button onClick={handleAddPeople}>Add People</button>
        </div>
        <div>
          {people.map((person, index) => (
            <div key={index}>{person}: Rupees {dividedAmount}</div>
          ))}
        </div>
        <button onClick={divideBillAmongPeople}>Divide Bill Among People</button>
        <button onClick={generateBillDescription}>Generate Bill Description</button>
        {billDescription && (
          <div>
            <h3>Bill Description:</h3>
            <p>{billDescription}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;