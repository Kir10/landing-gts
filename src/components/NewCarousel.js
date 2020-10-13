import React, {Component} from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"
import { Carousel } from 'react-responsive-carousel';

class NewCarousel extends Component {
    render() {
        return (

            <div className={"container badge-dark col-xl-12"}>
            <div>
                <Carousel>
                    <div>
                        <img src="img/time.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className={"legend bg-dark"}>Will help you organize your time</h5>
                            <p>______________________________________</p>
                        </div>
                    </div>
                    <div>
                        <img src="img/success.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className={"bg-dark"}>Will guide you to your success</h5>
                            <p>______________________________________.</p>
                        </div>
                    </div>
                    <div>
                        <img src="img/goal-oriented.jpg" className="d-block w-100" alt="..."/>
                        <div className="carousel-caption d-none d-md-block">
                            <h5 className={"bg-dark"}>Will help you find goal-oriented people</h5>
                            <p>______________________________________</p>
                        </div>
                    </div>
                </Carousel>
            </div>
            </div>

            )
    }
}

export default NewCarousel
