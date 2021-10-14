import React from 'react'
import icon from '../ghost.svg'

const EmptyBlock = () => {
  return (
    <div class="block empty-block">
      <img src={icon} style={{width: '52px'}}/>
      <h2>Список фраз пустой</h2>
      <p>Чтобы в этом списке появилась фраза, тебе необходимо нажать на кнопку “Сгенерировать”</p>
    </div>
  )
}

export default EmptyBlock
