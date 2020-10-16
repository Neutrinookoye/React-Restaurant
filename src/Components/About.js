import React from 'react'
import aboutImg from '../assets/images/about.jpg'
import Footer from './footer'

const WhyCard = (props) => {
    return (
        <>
            <div className="">
                <div className="about-box">
                    <h3 className="yellow text-bold">{props.whyCardNum} </h3>
                    <h4 className="text-bold">{props.whyCardTitle} </h4>
                    <p>{props.whyCardDesc} </p>
                </div>
            </div>
        </>
    )
}

const whyCardValues = [
    {whyCardNum : "01" , whyCardTitle : "Lorem Ipsum" , id : '1' ,
        whyCardDesc : "Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
    } ,
    {whyCardNum : "02" , whyCardTitle : "Repellat Nihil" , id : '2' ,
        whyCardDesc : "Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"
    } ,
    {whyCardNum : "03" , whyCardTitle : "Ad ad velit qui" , id : '3' ,
        whyCardDesc : "Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"
    }
]


const ThreeWhyCards = (props) => {
    const SingleWhyCard = whyCardValues.map((whyCardValue , index) => 
        <div className="col-md-4">
            <WhyCard whyCardNum={whyCardValue.whyCardNum}
                    whyCardDesc={whyCardValue.whyCardDesc}
                    whyCardTitle={whyCardValue.whyCardTitle}
                    key={whyCardValue.id}
            />
        </div>
    )
    return (
        <div className="row">
            {SingleWhyCard}
        </div>
    )

}   

const AboutPage = () => {

    const style = {
        background : `url(${aboutImg})` ,
        backgroundSize : 'cover' ,
    }
    
    return(
        <>
        <section className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5 about-img" style={style}>
                    </div>
                    <div className="col-md-7">
                        <div className="content container">
                            <h3 className="text-center">Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
                            </p>
                            <p className="font-italic">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                magna aliqua.
                            </p>
                            <ul>
                                <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                <li><i className="bx bx-check-double"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                <li><i className="bx bx-check-double"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                            </ul>
                            <p>
                                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center section-header">
                            <h3 >Why choose <span className="yellow">Our Restaurant</span> </h3>
                            <p>Ut possimus qui ut temporibus culpa velit eveniet modi omnis est adipisci expedita at voluptas atque vitae autem.</p>
                        </div>
                    </div>
                </div>
                <ThreeWhyCards />
            </div>
        </section>
        <Footer />
        </>
    )
}

export default AboutPage