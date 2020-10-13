import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

class Header extends Component {

    render() {
        return (
            <div className={"container badge-dark col-xl-12"}>
                <br/>
                <div className={"text-center"}>
                    <h1 className={"display-1"}>
                        Goals Tracking System
                    </h1>
                    <p className="lead display-9">
                        Achieve your goals and succeed in life
                    </p>
                </div>
                <br/>

            </div>


        )
    }
}

export default Header