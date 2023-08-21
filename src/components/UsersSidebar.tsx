import SideBarItem from "./SidebarItem";

function UsersSidebar({users, handleClick}:{users:Array<any>, handleClick:any}){

    let usersList : Array<any> = users;

    function handleUserClick(user :any){
        // logic here to tell parent Dashboard component to display users information
        console.log(user)
        handleClick(user)
    }

    return(
        <>
            <div className="sidebar-container">
                <h2>Users</h2>
                {usersList.map(user=>
                    <div key={user.id} className="sidebar-item-container" onClick={()=>{handleUserClick(user)}}>
                        <SideBarItem name={user.name} />
                    </div>
                )}
            </div>
        </>
    )
}

export default UsersSidebar