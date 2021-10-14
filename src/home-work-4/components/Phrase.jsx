import React from 'react'

const Phrase = ({list}) => {
  return (
    <div class="list">
      {
        list.map((item, index) => 
          <div class="block" key={index}><h3>{item}</h3></div>
        )
      }
    </div>
  )
}

export default Phrase
