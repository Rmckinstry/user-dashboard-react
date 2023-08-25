function UsersMainContent({user}:{user:any}){
    return(
        <>
            <div className="main-content-container">
                {Object.keys(user).length > 0 ? (
                    <>
                    <p>Selected User: {user.name}</p>
                    <div className="user-info-container">
                        <p className="user-info"><strong>Name: </strong>{user.name}</p>
                        <p className="user-info"><strong>Email: </strong>{user.email}</p>
                        <p className="user-info"><strong>Phone: </strong>{user.phone}</p>
                        <p className="user-info"><strong>Username: </strong>{user.username}</p>
                        <p className="user-info"><strong>Address:</strong></p>
                        <div id="address-container">
                            <p className="user-info">{user["address"]["street"]}</p>
                            <p className="user-info">{user["address"]["suite"]}</p>
                            <p className="user-info">{user["address"]["city"]}, {user["address"]["zipcode"]}</p>
                        </div>
                        <p className="user-info"><strong>Company: </strong>{user["company"]["name"]}</p>
                        <p className="user-info"><strong>Website: </strong>{user.website}</p>
                    </div>
                    </>
                ):(
                    <p>Click a user to view data.</p>
                )}
            </div>
        </>
    )
}

export default UsersMainContent