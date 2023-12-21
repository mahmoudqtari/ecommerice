import React, { useContext } from 'react'
import { UserContext } from '../../context/User';

function UserInfo() {
    let { userData ,loading } = useContext(UserContext);
    if(loading){
        return <p>...loading</p>
    }
    return (
        <>
            <h2>{userData.userName}</h2>
            <div className='img'>
                <img src={userData.image.secure_url} />
            </div>
        </>
    )
}

export default UserInfo