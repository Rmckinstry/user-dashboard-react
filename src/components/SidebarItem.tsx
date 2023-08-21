import '../components/SidebarItem.css'


function SideBarItem({name}:{name:string}){

    return(
        <>
            <p className="sidebar-item">{name}</p>
        </>
    )
}

export default SideBarItem