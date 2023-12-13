import React, { useContext } from 'react'
import { UserContext } from '../../context/User';
import { Link } from 'react-router-dom';

function Profile() {
    let { userData } = useContext(UserContext);

    return (
        <>
            {userData != null ?
                <div className='data-user'>
                    <div className='img'>
                        <img src={userData.image.secure_url} />
                    </div>
                    <h2>{userData.userName}</h2>
                    <h3>{userData.email}</h3>
                </div> :"no data"
            }

            <Link to={'/order'}>get Order</Link>
        </>
    )
}

export default Profile