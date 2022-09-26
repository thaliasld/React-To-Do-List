import React from 'react'

const TodoList = ({todos, handleEdit, handleDelete}) => {
  return (
    <ul className='allTodos'>
    {
      todos.map((t) => (
        <li className='singleTodo'>
      <span className='todoText' key={t.id}>{t.todo}</span>
      <button onClick={()=>handleEdit(t.id)}><i className='fa fa-edit'></i></button>
      <button onClick={()=>handleDelete(t.id)}><i className='fa fa-trash'></i></button>
    </li>
      ))
    }
  </ul>
  )
}

export default TodoList