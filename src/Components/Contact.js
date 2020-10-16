import React from 'react' ;

import Footer from './footer'

const ContactLink = (props) => {
    return(
        <div className="row">
            <div className="col-md-2">
                <div>
                    <i className={props.icon}></i>
                </div>
            </div>
            <div className="col-md-10">
                <div className="pl-3">
                    <h4>{props.header} </h4>
                    <p className="text-muted">{props.para1} </p>
                    <p className="text-muted">{props.para2} </p>
                </div>
            </div>
        </div>
    )
}

const users = [
    {icon : "fa fa-map-marker" , header : "Location:" , para1 : "A108 Adam Street" , 
        para2 : "New York, NY 535022"
    } ,
    {icon : "fa fa-clock-o" , header : "Open Hours:" , para1 : "Monday-Saturday:" , 
        para2 : "11:00 AM - 23:00 PM"
    } ,
    {icon : "fa fa-envelope" , header : "Email:" , para1 : "info@example.com" , 
        para2 : "contact@example.com"
    } ,
    {icon : "fa fa-phone" , header : "Call:" , para1 : "+234 816 624 5118" , 
        para2 : "+234 816 624 5118"
    } 
]


const ContactLinks = (props) => {
    const SingleContactLink = users.map((item , index) => 
        <div className="col-md-3">
            <ContactLink key={index} icon={item.icon} header={item.header} para1={item.para1}
                para2={item.para2}
            />
        </div>
    )
    return(
        <div className="row">
            {SingleContactLink}
        </div>
    )
}

const ContactPage = () => {
    return(
        <>
        <section className="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="section-header text-center mt-3">
                            <h3 className=""><span className="yellow">Contact</span> Us</h3>
                            <p>Ut possimus qui ut temporibus culpa valit eveneit modi onmis est 
                                adipisci expedita at voluptas atque vitae autem.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="contact-link-div">
                    <ContactLinks />
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="contact-form-div">
                            <form method="POST">
                                <div className="row">
                                    <div className="col-md-6">
                                        <input placeholder="Your Name" className="formform form-control" type="text" />                                    
                                    </div>
                                    <div className="col-md-6">
                                        <input placeholder="Your Email" className="formform form-control" type="email" />                                    
                                    </div>
                                    <div className="col-md-12">
                                        <input placeholder="Subject" className="formform form-control" type="text" />                                    
                                    </div>
                                    <div className="col-md-12 text-center">
                                        <textarea placeholder="Message" className="formform form-control" rows="5" cols="5" /> 
                                        <div>
                                            <button type="submit" className="form-btn" >Send Message</button>
                                        </div>                                   
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Footer />
        </>
    )
}

export default ContactPage