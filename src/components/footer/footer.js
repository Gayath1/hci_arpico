import React from 'react'

import './footer.css'

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
        <>
        <div className='footer'>
            <div className="footer__right-user">
                <div className="footer__search">
                    <i className='bx bx-mail-send'></i>
                    <input type="text" placeholder='Type your email'/>
                </div>
                &nbsp;
                &nbsp;
                &nbsp;
                &nbsp;
                <button className="login_footer">Subscribe
                </button>
            </div>
            <div className="footer__right">
                <div className="footer__right-user__image">
                    <img src={logo} alt="company logo"/>
                </div>
            </div>
        </div>
    <div className="row">
        <div className="col-4">
            <h1>Explore</h1>
            <br/>
            <br/>
            <h3>Home</h3>
            <br/>
            <h3>About Us</h3>
            <br/>
            <h3>Store locations</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            &nbsp;&nbsp;<a>Copyright © 2021. Richard Pieris & Company PLC</a>
        </div>
        <div className="col-4">
            <h1>Policy Statement</h1>
            <br/>
            <br/>
            <h3>Retail chains</h3>
            <br/>
            <h3>Products</h3>
            <br/>
            <h3>Terms and Conditions </h3>

        </div>
        <div className="col-4">
            <h1>Support</h1>
            <br/>
            <br/>
            <h3>What in store</h3>
            <br/>
            <h3>Payments</h3>
            <br/>
            <h3>FAQ</h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="social_icons">
            <div className="row">
                <Link to='/'>
                    <div className="notification-item">
                        <i className='bx bxl-facebook-square'></i>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="notification-item">
                        <i className='bx bxl-instagram-alt'></i>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="notification-item">
                        <i className='bx bxl-twitter'></i>
                    </div>
                </Link>
            </div>
            </div>

        </div>
    </div>
            </>
    )
}

export default Topnav