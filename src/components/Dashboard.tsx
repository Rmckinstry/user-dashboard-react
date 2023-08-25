import { useState, useEffect } from "react";
import UsersMainContent from "./UsersMainContent"
import UsersSidebar from "./UsersSidebar"
import '../components/Dashboard.css'
import '../components/Styles.css'


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
                                <div id="users-sidebar-app-container">
                                    <UsersSidebar handleClick={handleUserClick} users={users} />
                                </div>
                                <div id="users-main-content-app-container">
                                    <UsersMainContent user={selectedUser} />
                                </div>
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