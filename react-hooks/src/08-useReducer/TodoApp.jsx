import React from 'react'
import { useTodo } from '../hooks/useTodo';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';



export const TodoApp = () => {

  const {todos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodo();

  return (
     <>
        <h1>TodoApp 10, <small>Pendientes: 2</small></h1>
        <hr />

        <div className="row">
            <div className="col-7">
               <TodoList todos={todos} onDeleteTodo={id => handleDeleteTodo(id)} onToggleTodo={handleToggleTodo} />
            </div>

            <div className="col-5">
                <h4>Agregar TODO</h4>
                <hr />
                <TodoAdd onNewTodo={handleNewTodo}/>
            </div>
        </div>

       
    </>
  )
}
