import SideBarItem from "./SidebarItem";

function UsersSidebar({users}:{users:Array<any>}){

    let usersList : Array<any> = users;

    return(
        <>
            <div className="sidebar-container">
                <h2>Users</h2>
                <ul>
                    {usersList.map(user=>
                        <SideBarItem key={user.id} name={user.name} />
                    )}
                </ul>
            </div>
        </>
    )
}

export default UsersSidebar