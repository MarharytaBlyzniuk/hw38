
import './App.css';
import React, { useState } from 'react';
import Button from './components/Button'; // імпортуємо кнопку
import Input from './components/Input';  // імпортуємо текстове поле

function App() {
  const [inputValue, setInputValue] = useState('');

  const handleButtonClick = () => {
    alert('Кнопка натиснута!');
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
      <div>
        <h1>My Project</h1>
        <Input placeholder="Введіть текст" onChange={handleInputChange} />
        <Button text="Натисни мене" onClick={handleButtonClick} />
        <p>Введений текст: {inputValue}</p>
      </div>
  );
}

export default App;
