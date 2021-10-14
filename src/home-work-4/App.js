import React, {useState} from 'react'
import './App.css'
import EmptyBlock from './components/EmptyBlock'
import Phrase from './components/Phrase'
import {adjectivesArr, nounsArr} from './arrays'

const App = () => {
  const [list, setList] = useState([])

  const generateList = () => {
    const string = `
      ${adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]} 
      ${adjectivesArr[Math.floor(Math.random() * adjectivesArr.length)]} 
      ${nounsArr[Math.floor(Math.random() * nounsArr.length)]}
    `
    const result = []
    result.push(string)
    
    setList([...list, result])
  }

  const resetState = () => {
    setList([])
    console.log(list)
  }

  return (
    <div class="wrapper">
      {
        list.length > 0 ? (
          <Phrase list={list} />
        ) : (
          <EmptyBlock />
        )
      }
      <button class="btn btn_generate" onClick={generateList}>Сгенерировать</button>
      <button class="btn btn_clear" onClick={resetState}>Очистить</button>
    </div>
  )
}

export default App
