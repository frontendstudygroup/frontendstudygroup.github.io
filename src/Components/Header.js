import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel';

export default class Header extends Component {
    render() {
        return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        width={800} height={500}
                        className="d-block w-100"
                        src="bg=e5e5e5"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Website Title</h3>
                        <h4>Motto of the website</h4>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>

        )
    }
}