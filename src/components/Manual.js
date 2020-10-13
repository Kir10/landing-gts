import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

class Manual extends Component {

    render() {
        return (

            <div className={"container"}>
                <h1 className={"text-center my-5 display-3 badge-dark"}>GTS Flow</h1>
                <div className={"row text-center row-eq-height"}>
                    <div className={"col-md-4 d-flex align-items-stretch"}>
                        <div className="card mx-auto mb-3 max-width: 300px ">
                            <img src="img/b1.jpg" className={"card-img-top"} alt=""/>
                            <div className="card-header bg-dark text-white h2 text-center">
                                Set a goal
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Life Manager will guide you quickly</h4>
                                <a href="#" className="btn btn-dark btn-lg margin-bottom: 10px">Start GTS</a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-4 d-flex align-items-stretch"}>
                        <div className="card mx-auto mb-3 max-width: 300px">
                            <img src="img/b2.jpg" className={"card-img-top"} alt=""/>
                            <div className="card-header bg-dark text-white h2 text-center">
                                Find a way
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Seek for solution and tell your ideas on meetings</h4>
                                <a href="#" className="btn btn-dark btn-lg">Start GTS</a>
                            </div>
                        </div>
                    </div>
                    <div className={"col-md-4 d-flex align-items-stretch"}>
                        <div className="card mx-auto mb-3 max-width: 300px">
                            <img src="img/b3.jpg" className={"card-img-top"} alt=""/>
                            <div className="card-header bg-dark text-white h2 text-center">
                                Achieve it
                            </div>
                            <div className="card-body">
                                <h4 className="card-title">Be proud and repeat the cycle</h4>
                                <a href="#" className="btn btn-dark btn-lg">Start GTS</a>
                            </div>
                        </div>
                    </div>
                </div>
                <p></p>
            </div>
        )
    }
}

export default Manual