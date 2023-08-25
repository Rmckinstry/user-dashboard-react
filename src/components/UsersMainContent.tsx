import { useState } from "react"
import UserInfo from "./UserInfo";
import UserTodos from "./UserTodos";

function UsersMainContent({user}:{user:any}){

    const [feature, setFeature] = useState("");
    
    function handleSelect(key:string){
        setFeature(key)
    }

    return(
        <>
            <div className="main-content-container">
                {Object.keys(user).length > 0 ? (
                    <>
                        <p>Selected User: {user.name}</p>

                        <div className="btn-container">
                            <button onClick={()=>{handleSelect("info")}}>User Info</button>
                            <button onClick={()=>{handleSelect("todos")}}>User To Do's</button>
                        </div>

                        {feature !== '' ? (
                            <>
                                {feature === 'info' && <UserInfo user={user} />}
                                {feature === 'todos' && <UserTodos id={user.id} />}

                            </>
                        ):(
                            <>
                                <p>Select a feature.</p>
                            </>
                        )}
                    </>
                ):(
                    <p>Click a user to view data.</p>
                )}
            </div>
        </>
    )
}

export default UsersMainContent