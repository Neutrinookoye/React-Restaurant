import React from 'react'
import {Link} from 'react-router-dom'

import chef1 from '../assets/images/chefs/chefs-1.jpg'
import chef2 from '../assets/images/chefs/chefs-2.jpg'
import chef3 from '../assets/images/chefs/chefs-3.jpg'
import Footer from './footer'


const ChefBox = (props) => {
    return(
        <div className="chef-div">
            <img src={props.src} alt="a chef" className="img-fluid" />
            <div className="chef-box text-center">
                <h5 className="text-muted">{props.chefName} </h5>
                <hr />
                <p className="text-muted">{props.chefDesc} </p>
                <div>
                    <Link to={props.link1}><i className={props.icon1}></i> </Link>
                    <Link to={props.link2}><i className={props.icon2}></i> </Link>
                    <Link to={props.link3}><i className={props.icon3}></i> </Link>
                    <Link to={props.link4}><i className={props.icon4}></i> </Link>
                </div>
            </div>
        </div>
    )
}

const users = [
    {src : chef1 , chefName : "Walter White" , chefDesc : "Master Chef" , 
        link1 : "#a" , icon1 : "fa fa-twitter" , link2 : '#' , icon2 : "fa fa-facebook" ,
        link3 : '#' , icon3 : "fa fa-instagram" , link4 : '#' , icon4 : "fa fa-linkedin"
    } ,
    {src : chef2 , chefName : "Sarah Johnson" , chefDesc : "Patissier" , 
        link1 : "#b" , icon1 : "fa fa-twitter" , link2 : '#' , icon2 : "fa fa-facebook" ,
        link3 : '#' , icon3 : "fa fa-instagram" , link4 : '#' , icon4 : "fa fa-linkedin"
    } ,
    {src : chef3 , chefName : "William Anderson" , chefDesc : "Cook" , 
        link1 : "#c" , icon1 : "fa fa-twitter" , link2 : '#' , icon2 : "fa fa-facebook" ,
        link3 : '#' , icon3 : "fa fa-instagram" , link4 : '#' , icon4 : "fa fa-linkedin"
    }
]

const ChefBoxes = (props) => {
    const SingleChefBox = users.map((item , index) => 
        <div className="col-md-4">
            <ChefBox key={index} src={item.src} chefName={item.chefName} chefDesc={item.chefDesc}
                link1={item.link1} link2={item.link2} link3={item.link3} link4={item.link4}
                icon1={item.icon1} icon2={item.icon2} icon3={item.icon3} icon4={item.icon4}
            />
        </div>
    )
    return(
        <div className="row">
            {SingleChefBox}
        </div>
    )
}

const ChefsPage = (props)  => {
    return(
        <>
            <section className="chef">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center mt-3">
                                <h3 className="">Our Professional <span className="yellow">Chefs</span></h3>
                                <p>Ut possimus qui ut temporibus culpa valit eveneit modi onmis est 
                                    adipisci expedita at voluptas atque vitae autem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <ChefBoxes />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default ChefsPage



