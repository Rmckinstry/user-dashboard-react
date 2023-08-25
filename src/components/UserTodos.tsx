import { useEffect, useState } from "react";
import Todo from "./Todo";

function UserTodos({id}:{id:string}){

    const [todos, setTodos] = useState<any[]>([]);

    useEffect(()=>{
        async function getUserTodos(){
            try{
                const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
                await res.json().then((todos)=>{
                    setTodos(todos)
                })
            } catch(err){
                alert(err)
            }
        }

        getUserTodos();
    },[id])

    return(
        <>
            {todos.length!=0 ? (
                <>
                    <div id="todos-container">
                        {todos.map(todo=>
                            <div className="todo-app-container" key={todo.id}>
                                <Todo todo={todo} />
                            </div>
                        )}
                    </div>
                </>
            ):(
                <> 
                    <p>Loading todos...</p>
                </>
            )}
        </>
    )
}

export default UserTodos;