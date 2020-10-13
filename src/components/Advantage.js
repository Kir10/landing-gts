import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

class Advantage extends Component {

    render() {
        return (

            <div className={"container badge-dark col-xl-12"}>

            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="img/time.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={"bg-dark"}>Will help you organize your time</h5>
                                <p>______________________________________</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/success.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={"bg-dark"}>Will guide you to your success</h5>
                                <p>______________________________________.</p>
                            </div>
                    </div>
                    <div className="carousel-item">
                        <img src="img/goal-oriented.jpg" className="d-block w-100" alt="..."/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5 className={"bg-dark"}>Will help you find goal-oriented people</h5>
                                <p>______________________________________</p>
                            </div>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
                <br/>
            </div>
        )
    }
}

export default Advantage