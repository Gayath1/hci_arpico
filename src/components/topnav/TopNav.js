import React from 'react'

import './topnav.css'

import {Link} from 'react-router-dom'
import Dropdown from '../dropdown/Dropdown'
import logo from "../../assets/logo.png";

// import user_image from '../../assets/images/tuat.png'

const notifications = [
    {
        "icon": "bx bx-error",
        "content": "Curabitur id eros quis nunc suscipit blandit"
    },
    {
        "icon": "bx bx-package",
        "content": "Duis malesuada justo eu sapien elementum, in semper diam posuere"
    },
    {
        "icon": "bx bx-cart",
        "content": "Donec at nisi sit amet tortor commodo porttitor pretium a erat"
    },
    {
        "icon": "bx bx-error",
        "content": "In gravida mauris et nisi"
    },
    {
        "icon": "bx bx-cart",
        "content": "Curabitur id eros quis nunc suscipit blandit"
    }
]

const user_menu = [
    {
        "icon": "bx bx-user",
        "content": "Profile"
    },
    {
        "icon": "bx bx-wallet-alt",
        "content": "My Wallet"
    },
    {
        "icon": "bx bx-cog",
        "content": "Settings"
    },
    {
        "icon": "bx bx-log-out-circle bx-rotate-180",
        "onClick": ClearLocalStorage,
        "route": "/Home",
        "content": "Logout"
    }
]

const curr_user = {
    display_name: 'Tuat Tran',
    // image: user_image
}


function ClearLocalStorage() {
    localStorage.clear();
}

const renderNotificationItem = (item, index) => (
    <div className="notification-item" key={index}>
        <i className={item.icon}></i>
        <span>{item.content}</span>
    </div>
)

const renderUserToggle = (user) => (
    <div className="topnav__right-user">
        <div className="topnav__right-user__image">
            <img src={user.image} alt=""/>
        </div>
        <div className="topnav__right-user__name">
            {user.display_name}
        </div>
    </div>
)

const renderUserMenu = (item, index) => (
    <Link to={item.route} key={index}>
        <div className="notification-item" onClick={item.onClick}>
            <i className={item.icon}></i>
            <span>{item.content}</span>
        </div>
    </Link>
)

const Topnav = () => {

    return (
        <div className='topnav'>
            <div className="topnav__right-user">
                <Dropdown
                    icon='bx bx-menu'
                    contentData={notifications}
                    renderItems={(item, index) => renderNotificationItem(item, index)}
                    renderFooter={() => <Link to='/'>View All</Link>}
                />
                <div className="topnav__right-user__image">
                    <img src={logo} alt="company logo"/>
                </div>
            </div>
            <div className="topnav__search">
                <input type="text" placeholder='Search here...'/>
                <i className='bx bx-search'></i>
            </div>
            <div className="topnav__right">
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <h3>Home</h3>
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <h3>Contact Us</h3>
                </div>
                <div className="topnav__right-item">
                    {/* dropdown here */}
                    <Link to='/'>
                        <div className="notification-item">
                            <i className='bx bx-cart'></i>
                        </div>
                    </Link>
                </div>
                <div className="topnav__right-item">
                    <button className="login_header">login
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Topnav