import { useState, useEffect } from "react";
import UsersMainContent from "./UsersMainContent"
import UsersSidebar from "./UsersSidebar"

function Dashboard(){

    const [users, setUserData] = useState([]);

    useEffect(() =>{
        async function getUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            await res.json().then((users)=>{
                setUserData(users)
            });
        }
        getUsers()
    },[])

    return(
        <>
            <div className="dashboard-container">
                {
                    users.length > 0 ? (
                        <>
                            <UsersSidebar users={users} />
                            <UsersMainContent />
                        </>
                    ):(
                        <p>Loading Users...</p>
                    )
                }

            </div>
        </>
    )
}

export default Dashboard