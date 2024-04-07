// Win4Game.jsx
import React, { useState } from 'react';

const Win4Game = () => {
  const [selectedNumbers, setSelectedNumbers] = useState(Array(4).fill(0));
  const [winningNumbers, setWinningNumbers] = useState([]);
  const [result, setResult] = useState('');

  // Générer 4 numéros gagnants avec le CSPRNG
  const generateWinningNumbers = () => {
    const numbers = [];
    while (numbers.length < 4) {
      const randomNumber = Math.floor(Math.random() * 48) + 1;
      if (!numbers.includes(randomNumber)) {
        numbers.push(randomNumber);
      }
    }
    setWinningNumbers(numbers);
    setResult('');
  };

  // Vérifier si les numéros sélectionnés correspondent aux numéros gagnants
  const checkResult = () => {
    const matchingNumbers = selectedNumbers.filter(num => winningNumbers.includes(num)).length;
    if (matchingNumbers === 4) {
      setResult('Félicitations, vous avez gagné le Win 4 !');
    } else {
      setResult(`Désolé, vous n'avez pas gagné. Nombre de correspondances : ${matchingNumbers}`);
    }
  };

  return (
    <div>
      <h1>Win 4</h1>
      <div>
        <h2>Numéros gagnants</h2>
        <p>{winningNumbers.join(' - ')}</p>
        <button onClick={generateWinningNumbers}>Tirer les numéros gagnants</button>
      </div>
      <div>
        <h2>Sélectionnez vos numéros</h2>
        {selectedNumbers.map((number, index) => (
          <input
            key={index}
            type="number"
            min="1"
            max="48"
            value={number}
            onChange={e => {
              const newNumbers = [...selectedNumbers];
              newNumbers[index] = parseInt(e.target.value);
              setSelectedNumbers(newNumbers);
            }}
          />
        ))}
        <button onClick={checkResult}>Vérifier le résultat</button>
        <p>{result}</p>
      </div>
    </div>
  );
};

export default Win4Game;

