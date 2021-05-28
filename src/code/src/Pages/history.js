import React, { Component } from 'react'
import {Nav} from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import './his.css';
import './st.css';
import background from './11.jpg';

import Tab from 'react-bootstrap/Tab';
import Variant1_his from '../His_Variants/Variant1_his';
import Variant2_his from '../His_Variants/Variant2_his';
import Variant3_his from '../His_Variants/Variant3_his';
import Variant4_his from '../His_Variants/Variant4_his';
import Variant5_his from '../His_Variants/Variant5_his';
import Variant6_his from '../His_Variants/Variant6_his';
import Variant7_his from '../His_Variants/Variant7_his';
import Variant8_his from '../His_Variants/Variant8_his';
import Variant9_his from '../His_Variants/Variant9_his';
import Variant10_his from '../His_Variants/Variant10_his';

export default class history extends Component {
    render() {
        return (
            <body className='bg' style={{ backgroundImage: `url(${background})` }}>
            <Tab.Container >
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first_his">Тест 1 </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second_his">Тест 2</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third_his">Тест 3</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="four_his">Тест 4</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="five_his" >Тест 5</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="six_his">Тест 6</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="seven_his">Тест 7</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="eight_his">Тест 8</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="nine_his">Тест 9</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="ten_his">Тест 10</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Col>
                    <Col sm={9}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first_his">
                                <Variant1_his></Variant1_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second_his">
                                <Variant2_his></Variant2_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third_his">
                                <Variant3_his></Variant3_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four_his">
                                <Variant4_his></Variant4_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five_his">
                                <Variant5_his></Variant5_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="six_his">
                                <Variant6_his></Variant6_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="seven_his">
                                <Variant7_his></Variant7_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight_his">
                                <Variant8_his></Variant8_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="nine_his">
                                <Variant9_his></Variant9_his>
                            </Tab.Pane>
                            <Tab.Pane eventKey="ten_his">
                                <Variant10_his></Variant10_his>
                            </Tab.Pane>
                        </Tab.Content>
                    </Col>
                </Row>
            </Tab.Container>
        </body>
        )
    }
}
