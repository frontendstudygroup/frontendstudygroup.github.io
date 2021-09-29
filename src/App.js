import React, {Component}  from 'react';
import {Container, Row,Col} from 'react-bootstrap';
import Header from './Components/Header';
import Menubar from './Components/Menubar'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

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
                    <Row >
                       <Col>
                           <Menubar></Menubar>
                        </Col>
                    </Row>
                </Container>
            </React.Fragment>
            </div>
        )
    }
}

export default App;
