import React from 'react'
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <section className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-12 foot text-center">
                        <div>
                            <h3>Delicious</h3>
                            <p className="para">Et aut eum quis fuga eos sunt ipsa nihil. Labore corporis magni
                                eligendi fuga maxime saepe commodi placeat.
                            </p>
                        </div>
                        <div className="foot-link">
                            <Link to="#"><i className="fa fa-twitter"></i> </Link>
                            <Link to="#"><i className="fa fa-facebook"></i> </Link>
                            <Link to="#"><i className="fa fa-instagram"></i> </Link>
                            <Link to="#"><i className="fa fa-skype"></i> </Link>
                            <Link to="#"><i className="fa fa-linkedin"></i> </Link>

                        </div>
                        <div>
                            <p className="foot-para">&copy; Copyright <span className="foot-bold text-white">Delicious</span>. All Rights Reserved</p>
                            <p className="foot-para">Originally designed by <span className="foot-yellow">BootstrapMade</span></p>
                            <p className="foot-para">Redesigned by <span className="foot-yellow">Neutrino Okoye</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Footer