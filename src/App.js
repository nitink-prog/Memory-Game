import React, { useState } from "react";
import SingleCard from "./components/SingleCard";
import "./App.css";

const cardImages = [
  { src: "/img/helmet-1.png " },
  { src: "/img/potion-1.png " },
  { src: "/img/ring-1.png " },
  { src: "/img/scroll-1.png " },
  { src: "/img/shield-1.png " },
  { src: "/img/sword-1.png " },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);

  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));

    setCards(shuffledCards);
    setTurns(0);
  };

  const resetAndTurns = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
  };

  const compare = (cOne, cTwo) => {
    cOne.src === cTwo.src ? console.log("match") : console.log("no");
  };
  const handleChoice = (card) => {
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
    console.log(choiceOne, choiceTwo);

    if (choiceOne && choiceTwo) {
      compare(choiceOne, choiceTwo);
      resetAndTurns();
    }
  };

  return (
    <div className="App">
      <h1>Magic Match</h1>
      <button onClick={shuffleCards}>New Game</button>

      <div className="card-grid">
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} handleChoice={handleChoice} />
        ))}
      </div>
    </div>
  );
}

export default App;
