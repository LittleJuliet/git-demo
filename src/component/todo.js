
function Todo() {
  const todoList = ['起床', '洗漱', '吃早餐', '上班'];

  return (
    <div>
      <ul>
        {todoList.map((item) => {
          return <li key={item}>{item}</li>
        })}
      </ul>
    </div>
  )
}

export default Todo;