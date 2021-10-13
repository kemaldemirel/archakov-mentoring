document.addEventListener('DOMContentLoaded', () => {
  const data = ['Купить машину', 'Купить дом']

  const ul = document.querySelector('#app-list')
  const input = document.querySelector('#app-input')
  const btn = document.querySelector('#app-btn')

  const deleteTask = (data, index) => {
    data.splice(index, 1)
    render(data)
  }

  const render = (data) => {
    ul.innerHTML = ''
    data.forEach((item, index) => {
      const li = document.createElement('li')

      const deleteBtn = document.createElement('button')
      deleteBtn.textContent = 'X'

      li.textContent = item
      li.append(deleteBtn)

      ul.append(li)

      deleteBtn.addEventListener('click', () => {
        let conf = confirm('Действительно удалить задачу?')
        if (conf) {
          deleteTask(data, index)
        }
      })
    });
  }

  btn.addEventListener('click', (e) => {
    e.preventDefault()

    const valueInput = input.value.trim()
    if (valueInput) {
      data.push(valueInput)
      input.value = ''
      render(data)
    } else {
      alert('Введите задачу!')
    }

  })

  render(data)
})