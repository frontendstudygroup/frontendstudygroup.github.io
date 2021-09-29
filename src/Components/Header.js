
import './Header.css';

import React, { Component } from 'react';
//import { Carousel } from 'react-bootstrap';
import { Carousel } from 'react-bootstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://picsum.photos/800/200?text=First slide&bg=373940"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>FrontEndDesignGroup</h3>
                            <p>Learn and Encourage others to Learn!!!</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    
                </Carousel>
            </div>

        )
    }
}
