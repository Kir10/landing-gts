import React, {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'

class Footer extends Component {

    render() {
        return (

            <div className={"container badge-dark col-xl-12"}>
            <br/>
            <footer>
                <div className={"text-center"}>
                    <h6 className={"display-6"}>© 2019-2020 Kirill Vasilev
                    {/*__________*/}</h6>
                    <br/>

                </div>
            </footer>
            </div>
        )
    }
}

export default Footer