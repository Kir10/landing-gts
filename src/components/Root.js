import React, {Component} from 'react'

import Header from "./Header";
import NewCarousel from "./NewCarousel";
import Manual from "./Manual";
import Form from "./Form";
import Footer from "./Footer";



class Root extends Component {

    render() {
        return (
            <div>
                <Header></Header>
                <NewCarousel></NewCarousel>
                <Manual></Manual>
                <Form></Form>
                <Footer></Footer>
            </div>
        )
    }
}

export default Root
