import React from 'react'

import Footer from './footer'

const EventForm = (props) => {
    return(
        <div className="">
            <input type={props.type} placeholder={props.placeholder} className="form-control formform" />
        </div>
    )
}

const users = [
    {type : 'text' , placeholder : 'Your Name'} ,
    {type : 'email' , placeholder : 'Your Email'} ,
    {type : 'telephone' , placeholder : 'Your Phone'} ,
    {type : 'text' , placeholder : 'Date'} ,
    {type : 'text' , placeholder : 'Time'} ,
    {type : 'text' , placeholder : '# of People'} 
]

const EventFormInput = (props) => {
    const SingleEventFormInput = users.map((item , index) => 
        <div className="col-md-4">
            <EventForm key={index} type={item.type} placeholder={item.placeholder} />
        </div>
    )
    return (
        <div className="row">
            {SingleEventFormInput}
        </div>
    )
} 


const BookEventPage = () => {
    return(
        <>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center mt-3">
                                <h3 className="">Book a <span className="yellow">Table</span></h3>
                                <p>Ut possimus qui ut temporibus culpa valit eveneit modi onmis est 
                                    adipisci expedita at voluptas atque vitae autem.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div>
                                <form method="POST" >
                                    <EventFormInput />
                                    <div className="row">
                                        <div className="col-md-12">
                                            <textarea cols="8" rows="4" className="form-control" placeholder="Message" />
                                        </div>
                                        <div className="col-md-12 text-center mt-3 mb-5">
                                            <button className="btn form-btn" type="submit">Send Message</button>
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

export default BookEventPage