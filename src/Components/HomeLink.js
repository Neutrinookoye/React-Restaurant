import React from 'react'

const HomeLink = () => {
    return(
        <nav className="fixed-top text-right">
            <div className="container"> 
                <div className="home-link">
                    <i className="fa fa-phone"></i><span className="phone">+234 816 625 5118</span>
                    <i className="fa fa-clock-o"></i><span>Mon-Sat: 11:00 AM - 23:00 PM</span>                
                </div>
            </div>
        </nav>
    )
}

export default HomeLink