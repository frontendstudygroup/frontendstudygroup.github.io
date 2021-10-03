import React, { Component } from 'react';
import { Card } from 'react-bootstrap';

export default class Home extends Component {
    render() {
        return (

            <div>

                <Card style={{ width: '81rem' }}>
                    <Card.Body>
                        <Card.Title>Introduction</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Who we are</Card.Subtitle>
                        <Card.Text>
                            Some quick example text to build on the card title and make up the bulk of
                            the card's content.
                        </Card.Text>
                        <Card.Link href="#">Stories</Card.Link>
                        <Card.Link href="#">Other Resources</Card.Link>
                    </Card.Body>
                </Card>


                
            </div>

        )
    }
}