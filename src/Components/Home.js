import React, { Component } from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import './Home.css';

export default class Home extends Component {
    render() {
        return (

            <div>


                <Card>
                    <Card.Body>
                        <Card.Title>Our Vision</Card.Title>
                        <Card.Text>
                            -This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                            <br></br>
                            -This content is a little bit longer.
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. 
                            -This content is a little bit longer.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            -sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, 
                            -quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            Duis aute irure dolor in reprehenderit in voluptate velit esse 
                            -cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, 
                            -sunt in culpa qui officia deserunt mollit anim id est l
                        </Card.Text>
                    </Card.Body>

                </Card>
                <br />

                <Card>
                    <Card.Body>
                        <Card.Title>Testimonial</Card.Title>
                        <Card.Text>

                            <CardGroup>
                                <Card>
                                    <Card.Img class="rounded-circle" variant="bottom" src="https://picsum.photos/100/100?random=3&bg=373940" />
                                    <Card.Body>
                                        <Card.Title>"Testimonial 1"</Card.Title>
                                        <Card.Text>
                                            This is a wider card with supporting text below as a natural lead-in to
                                            additional content. This content is a little bit longer.
                                        </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                <Card>
                                    <Card.Img class="rounded-circle" variant="bottom" src="https://picsum.photos/100/100?random=2&bg=373940" />
                                    <Card.Body>
                                        <Card.Title>"Testimonial 1"</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                                <Card>
                                    <Card.Img class="rounded-circle" variant="bottom" src="https://picsum.photos/100/100?random=1&bg=373940" />
                                    <Card.Body>
                                        <Card.Title>"Testimonial 1"</Card.Title>
                                        <Card.Text>
                                            This card has supporting text below as a natural lead-in to additional
                                            content.{' '}
                                        </Card.Text>
                                    </Card.Body>
                                    
                                </Card>
                            </CardGroup>

                        </Card.Text>
                    </Card.Body>

                </Card>
                <br />
               



            </div>

        )
    }
}