function UsersMainContent({user}:{user:any}){
    return(
        <>
            <div className="main-content-container">
                {Object.keys(user).length > 0 ? (
                    <p>{user.name}</p>
                ):(
                    <p>Click a user to view data.</p>
                )}
            </div>
        </>
    )
}

export default UsersMainContent