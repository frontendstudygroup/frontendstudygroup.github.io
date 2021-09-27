import React, {Component}  from 'react';
import {Container, Row, Col} from 'react-bootstrap';
import Header from './Components/Header';

//import Timeline from './components/timeline'

class App extends Component {
    render() {
        return (
            <div>
            <React.Fragment>
                <Container>
                    <Row>
                        <Col>
                           <Header></Header>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
            </div>
        )
    }
}

export default App;
