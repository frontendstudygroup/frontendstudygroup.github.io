import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Carousel variant="dark">
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="holder.js/800x400?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>Website Title</h5>
                            <p>Motto of the website</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>

            </div>
        )
    }
}