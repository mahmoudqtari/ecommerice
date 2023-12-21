import React, { useContext } from 'react'
import { UserContext } from '../../context/User';

function UserContact() {
    let { userData ,loading } = useContext(UserContext);
    if(loading){
        return <p>...loading</p>
    }
    return (
        <>
            <h2>{userData.email}</h2>
            <h2>{userData.phone}</h2>
        </>
    )
}

export default UserContact