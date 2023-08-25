import { useState, useEffect } from "react";
import UsersMainContent from "./UsersMainContent"
import UsersSidebar from "./UsersSidebar"
import '../components/Dashboard.css'

function Dashboard(){

    const [users, setUserData] = useState([]);
    const [selectedUser, setSelectedUser] = useState({});

    useEffect(() =>{
        async function getUsers(){
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            await res.json().then((users)=>{
                setUserData(users)
            });
        }
        getUsers()
    },[])

    function handleUserClick(userData : any){
        setSelectedUser(userData);
    }

    return(
        <>
            <div className="dashboard-container">
                {
                    users.length > 0 ? (
                        <>
                            <div id="dashboard-grid">
                                <UsersSidebar handleClick={handleUserClick} users={users} />
                                <UsersMainContent user={selectedUser} />
                            </div>
                            
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