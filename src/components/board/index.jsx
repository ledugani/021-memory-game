import React from 'react'
import PropTypes from 'prop-types'

import Card from '../card'

import './styles'

export default function Board({ cards, dimension, flipped, handleClick }) {
  return <div>
    {
      cards.map(card => (
      <Card
        key={card.id}
        id={card.id}
        type={card.type}
        width={dimension / 4.5}
        height={dimension / 4.5}
        flipped={flipped.includes(card.id)}
        handleClick={() => handleClick(card.id)}
      />
      ))
    }
  </div>
}

Board.propTypes = {
  dimension: PropTypes.number.isRequired,
  cards: PropTypes.arrayOf(PropTypes.shape({})),
  flipped: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleClick: PropTypes.func.isRequired,
}