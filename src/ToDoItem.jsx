export function ToDoItem({completed,id,title,toggleTodo,deleteTodo}) {
    return (
        <li >
        <label>
          <input type="checkbox" 
          checked={completed}
          onChange={e => toggleTodo(id,e.target.checked)}
          />
          {title}
        </label>
        <button onClick={()=>deleteTodo(id)} //don't directly call deleteTodo call it inside a function
        className = "btn btn-danger">
            Delete
            </button>
      </li>
    )
}


