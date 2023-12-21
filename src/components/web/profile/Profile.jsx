import React, { useContext } from 'react'
import { UserContext } from '../../context/User';
import { Link, Outlet } from 'react-router-dom';
import style from './Profile.module.css'
function Profile() {
    let { loading } = useContext(UserContext);
    if(loading){
        return <p>...loading</p>
    }
    return (
        <>
            <aside className={`${style.profile}`}>
                <div className={`${style.profileLink}`}>
                    <nav>
                        <Link to=''>info</Link>
                        <Link to="contact">contact</Link>
                    </nav>
                </div>
                <div className={`${style.userData}`}>
                    <Outlet />
                </div>
            </aside>

            <Link to={'/order'}>get Order</Link>
        </>
    )
}

export default Profile