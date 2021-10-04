import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from './Components/Header';
import Menubar from './Components/Menubar';
import Home from './Components/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//import Timeline from './components/timeline'

class App extends Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Container>
                        <Row >
                            <Col>
                                <Header></Header>
                            </Col>
                        </Row>
                        <br />
                        <Row >

                            <Col>
                                <Router>
                                    <Menubar></Menubar>
                                    <br></br>
                                             <Route exact path="/home" component={Home}></Route>

                                </Router>
                            </Col>
                        </Row>
                       

                    </Container>
                </React.Fragment>
            </div>
        )
    }
}

export default App;
