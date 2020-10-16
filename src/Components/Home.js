import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer'

import bckg1 from '../assets/images/slide/slide-1.jpg'

const Jumbo = () => {
    const style = {
        background : `url(${bckg1})` ,
        backgroundWidth : 'cover' ,
        height : '100vh'
    }
    return (
        <>
            <section style={style} className="jumbotron">
                <div className="container">
                    <div className="d-flex justify-content-center intro">
                        <div className="intro-text">
                            <h1><span className="yellow">Delicious</span> <span>Restaurant</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Praesentium quod voluptatibus atque rerum iusto fugiat recusandae 
                                quam ea aperiam quae? Nihil quis eligendi, 
                                nobis assumenda dolor eveniet placeat libero adipisci.
                            </p>
                            <div>
                                <Link to="/menu" className="btn home-btn mr-2">OUR MENU</Link>
                                <Link to="/book" className="btn home-btn">BOOK A TABLE</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            < Footer />
        </>
    )
}

export default Jumbo