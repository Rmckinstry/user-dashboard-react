import { useEffect, useState } from "react";
import Todo from "./Todo";

function UserTodos({id}:{id:string}){

    const [todos, setTodos] = useState<any[]>([]);

    useEffect(()=>{
        console.log(id)

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
                    {todos.map(todo=>
                        <div key={todo.id}>
                            <Todo todo={todo} />
                        </div>
                    )}
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