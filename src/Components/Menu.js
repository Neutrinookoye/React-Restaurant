import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './footer'


const MenuItem = (props) => {
    return (
        <>
            <div className="row menu-box">
                <div className="col-6">
                    <h4 className="yellow">{props.menuName  } </h4>
                    <p className="text-muted">{props.menuContent} </p>
                </div>
                <div className="col-6 text-right">
                    <h4>{props.menuCost} </h4>
                </div>
            </div>
        </>
    )
}

const users = [
    {menuName : 'Lobster Bisque' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$5.95'} ,
    {menuName : 'Bread Barrel' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$6.95'} ,
    {menuName : 'Crab Cake' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$9.95'} ,
    {menuName : 'Caesar Selections' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$5.95'} ,
    {menuName : 'Tuscan Grilled' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$9.95'} ,
    {menuName : 'Mozzarella Stick' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$4.95'} ,
    {menuName : 'Greek Salad' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$12.95'} ,
    {menuName : 'Spinach Salad' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$5.95'} ,
    {menuName : 'Lobster Roll' , menuContent : 'Lobster, Meat, Lorem, Ipsum, Delorem' , menuCost : '$12.95'} ,
]

const MenuItems = () => {
    const SingleMenuItems = users.map((item , index) => 
        <div className="col-md-6">
            <MenuItem menuContent={item.menuContent} menuCost={item.menuCost} menuName={item.menuName} key={index}/>
        </div>
    )
    return (
        <div className="row">
            {SingleMenuItems}
        </div>
    )

}

const MenuPage = () => {
    return(
        <>
            <section className="menu">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center mt-3 mb-2">
                                <h3 className="">Check our tasty <span className="yellow">Menu</span></h3>
                                <div className="text-center mt-4">
                                    <Link to="#" className="btn">Show All</Link>
                                    <Link to="#" className="btn">Starters</Link>
                                    <Link to="#" className="btn">Salads</Link>
                                    <Link to="#" className="btn mr-0">Specialty</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    < MenuItems />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default MenuPage