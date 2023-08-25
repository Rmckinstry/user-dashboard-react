function Todo({todo}:{todo:any}){

    return (
        <>
            <p>Tiitle: {todo.title}</p>
            <p>Completed: {todo.completed}</p>
        </>
    )
}

export default Todo;