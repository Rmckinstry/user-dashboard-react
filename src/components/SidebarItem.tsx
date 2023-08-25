import '../components/SidebarItem.css'


function SideBarItem({name}:{name:string}){

    return(
        <>
            <button className="sidebar-item">{name}</button>
        </>
    )
}

export default SideBarItem