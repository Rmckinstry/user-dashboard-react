function Todo({todo}:{todo:any}){

    return (
        <>
            <div className="todo-flex-container">
                <p><strong>Title: </strong></p>
                <p>{todo.title}</p>
            </div>
            <div className="todo-flex-container">
                <p><strong>Completed: </strong></p>
                <input type="checkbox" checked={todo.completed} />
            </div>
        </>
    )
}

export default Todo;