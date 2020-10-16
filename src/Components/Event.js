import React from 'react'
import eventImage from '../assets/images/event-custom.jpg'
import eventBckg from '../assets/images/events-bg.jpg'
import Footer from './footer'



const EventPage = (props) => {

    const style = {
        background : `url(${eventBckg})` ,
        backgroundSize : 'cover' ,
        backgroundAttachment : 'fixed' ,
        // height : '100vh' ,
        backgroundPosition : 'center'
    }

    return(
        <>
        <section style={style} className="event">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center">
                            <h3 className="text-white">Organize Your <span className="yellow">Events</span> In Our Restaurant</h3>
                        </div>
                    </div>
                </div>
                <div className="event-box">
                    <div className="row">
                        <div className="col-lg-6">
                            <img src={eventImage} alt="" className="img-fluid" />
                        </div>
                        <div className="col-lg-6">
                            <div className="text-white">
                                <h3 className="yellow text-bold">Custom Parties</h3>
                                <h3 className="text-white amount">$99</h3>
                                <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="icofont-check-circled"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="icofont-check-circled"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                </ul>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur
                                </p>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </section>
        <Footer />
        </>
    )
}

export default EventPage