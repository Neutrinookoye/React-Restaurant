import React from 'react' 

import Footer from './footer'

import gall1 from '../assets/images/gallery/gallery-1.jpg'
import gall2 from '../assets/images/gallery/gallery-2.jpg'
import gall3 from '../assets/images/gallery/gallery-3.jpg'
import gall4 from '../assets/images/gallery/gallery-4.jpg'
import gall5 from '../assets/images/gallery/gallery-5.jpg'
import gall6 from '../assets/images/gallery/gallery-6.jpg'
import gall7 from '../assets/images/gallery/gallery-7.jpg'
import gall8 from '../assets/images/gallery/gallery-8.jpg'

const Avatar = (props) => {
    return(
        <div className="gallery-box">
            <img src={props.src} alt={props.alt} className="img-fluid" />
        </div>
    )
}

const images = [
    {src : gall1 , alt : 'Gallery image' } ,
    {src : gall2 , alt : 'Gallery image' } ,
    {src : gall3 , alt : 'Gallery image' } ,
    {src : gall4 , alt : 'Gallery image' } ,
    {src : gall5 , alt : 'Gallery image' } ,
    {src : gall6 , alt : 'Gallery image' } ,
    {src : gall7 , alt : 'Gallery image' } ,
    {src : gall8 , alt : 'Gallery image' } ,
]

const GalleryImages = (props) => {
    const SingleGalleryImage = images.map((item , index) => 
        <div className="col-md-3 col-sm-6 gall-box">
            <Avatar key={index} src={item.src} alt={item.alt} />
        </div>
    )
    return (
        <div className="row">
            {SingleGalleryImage}
        </div>
    )
}

const GalleryPage = () => {
    return(
        <>
            <section className="gallery">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-header text-center mt-3">
                                <h3 className="">Organize Your <span className="yellow">Events</span> In Our Restaurant</h3>
                                <p>Ut possimus qui ut temporibus culpa valit eveneit modi onmis est 
                                    adipisci expedita at voluptas atque vitae autem.
                                </p>
                            </div>
                        </div>
                    </div>
                    <GalleryImages />
                </div>
            </section>
            <Footer />
        </>
    )
}

export default GalleryPage












