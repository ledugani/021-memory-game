import React from 'react';

export default function App() {
  return (
    <div>
      <h2>Can you remember where the cards are?</h2>
      <Card
        id={1}
        width={100}
        height={100}
        back={`/img/back.png`}
        front={`/img/react.png`}
        flipped={flipped.includes(1)}
        handleClick={() => handleClick(1)}
      />
    </div>
  )
}