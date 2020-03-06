import React, { useState, useEffect } from 'react';
import Board from './components/board'

initializeDeck from './deck'
export default function App() {
  const [cards, setCards] = useState([])
  const [flipped, setFlipped] = useState([])

  useEffect(() => {
    setCards(initializedDeck())
  }, [])

  const handleClick = (id) => {
    setFlipped([ ...flipped, id ])
  }

  return (
    <div>
      <h2>Can you remember where the cards are?</h2>
      <Board
        cards={cards}
        flipped={flipped}
        handleClick={handleClick}
      />
    </div>
  )
}