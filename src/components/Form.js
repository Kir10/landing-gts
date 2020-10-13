import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

class Form extends Component {

    render() {
        return (

            <div>
            <div className={"container bg-dark"}>
                <br/>
                <div className={"text-center white-space col-md-6 float-left"}>
                    <h5 className={"text-light bg-dark"}>Do you want more information about GTS?
                        Fill out the form below and we will send information to your mail
                    </h5>
                    {/*<p></p>*/}
                    <button type="submit" className="btn btn-light btn-lg float-center">Get more information</button>

                </div>


                <div className={"row text-center row-eq-height"}>
                    <form className={"col-md-6 d-flex align-items-stretch"}>
                        <div className="form-group text-light bg-dark">
                            <label htmlFor="exampleInputEmail1">Your name</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone</small>

                        </div>
                    </form>
                    <form className="col-md-6 d-flex align-items-stretch">
                        <div className="form-group text-light bg-dark float-left">
                            <label htmlFor="exampleInputEmail1">Email address</label>
                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone</small>
                        </div>
                    </form>

                </div>

                <p><br/><br/></p>

            </div>
                <br/>
            </div>

        )
    }
}

export default Form