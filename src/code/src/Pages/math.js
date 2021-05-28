import React, { Component } from 'react'
import { Nav} from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import './math.css';
import './st.css';
import background from './11.jpg';

import Tab from 'react-bootstrap/Tab';
import Variant1_m from '../Math_Variants/Variant1_math';
import Variant2_m from '../Math_Variants/Variant2_math';
import Variant3_m from '../Math_Variants/Variant3_math';
import Variant4_m from '../Math_Variants/Variant4_math';
import Variant5_m from '../Math_Variants/Variant5_math';
import Variant6_his from '../His_Variants/Variant6_his';
import Variant7_his from '../His_Variants/Variant7_his';
import Variant8_his from '../His_Variants/Variant8_his';
import Variant9_his from '../His_Variants/Variant9_his';
import Variant10_his from '../His_Variants/Variant10_his';

export default class Math extends Component {
    render() {
        return (
            <body className='bg' style={{ backgroundImage: `url(${background})` }}>
            <Tab.Container >
                <Row>
                    <Col sm={3}>
                        <Nav variant="pills" className="flex-column">
                            <Nav.Item>
                                <Nav.Link eventKey="first_m">Тест 1 </Nav.Link>
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
                            <Tab.Pane eventKey="first_m">
                                <Variant1_m></Variant1_m>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second_his">
                                <Variant2_m></Variant2_m>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third_his">
                                <Variant3_m></Variant3_m>
                            </Tab.Pane>
                            <Tab.Pane eventKey="four_his">
                                <Variant4_m></Variant4_m>
                            </Tab.Pane>
                            <Tab.Pane eventKey="five_his">
                                <Variant5_m></Variant5_m>
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