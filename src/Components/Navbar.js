import React , {useState} from 'react'
import {Link , NavLink} from 'react-router-dom'

import {Collapse , Navbar , NavItem , Nav} from 'reactstrap' ;


const HomeNavbar = () => {
    const [collapseOpen , setCollapseOpen] = useState(false) ;

    return (
        <>
            {
                collapseOpen ? (
                    <div id="bodyClick" onClick={()=> {document.documentElement.classList.toggle('nav-open')
                        setCollapseOpen(false) ;} }  />
                ) : null
            }
            <Navbar className="fixed-top shadow-sm" expand="lg">
                <div className="container">
                    <Link to="/" className="navbar-brand">Delicious</Link>
                    <button className="navbar-toggler" type="button"
                        aria-expanded={collapseOpen} 
                        onClick={() => {document.documentElement.classList.toggle('nav-open')
                        setCollapseOpen(false)}}
                    >
                        <span className="navbar-toggler-bar top-bar"></span>
                        <span className="navbar-toggler-bar middle-bar"></span>
                        <span className="navbar-toggler-bar last-bar"></span>
                    </button>
                    <Collapse className="justify-content-end" id="navbarDefault"
                        isOpen={collapseOpen} navbar
                    >
                        <Nav navbar className="">
                            <NavItem>
                                <NavLink to="/home" className="nav-link" activeClassName="active">
                                    <span>Home</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/about" className="nav-link" activeClassName="active">
                                    <span>About</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/menu" className="nav-link" activeClassName="active">
                                    <span>Menu</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/event" className="nav-link" activeClassName="active">
                                    <span>Events</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/chefs" className="nav-link" activeClassName="active">
                                    <span>Chefs</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/gallery" className="nav-link" activeClassName="active">
                                    <span>Gallery</span>
                                </NavLink>
                            </NavItem>

                            <NavItem>
                                <NavLink to="/contact" className="nav-link" activeClassName="active">
                                    <span>Contact</span>
                                </NavLink>
                            </NavItem>

                            <NavItem className="book">
                                <NavLink to="/book" className="nav-link " activeClassName="">
                                    <span>BOOK A TABLE</span>
                                </NavLink>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </div>
            </Navbar>
        </>
    )
}

export default HomeNavbar