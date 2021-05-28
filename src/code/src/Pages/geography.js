import React, { Component } from 'react'
import {Nav} from 'react-bootstrap';
import {Row, Col } from "react-bootstrap";
import './geo.css';
import './st.css';
import background from './11.jpg';
import Tab from 'react-bootstrap/Tab';
import Variant1_geo from '../Geo_Variants/Variant1_geo';
import Variant2_geo from '../Geo_Variants/Variant2_geo';
import Variant3_geo from '../Geo_Variants/Variant3_geo';
import Variant4_geo from '../Geo_Variants/Variant4_geo';
import Variant5_geo from '../Geo_Variants/Variant5_geo';
import Variant6_geo from '../Geo_Variants/Variant6_geo';
import Variant7_geo from '../Geo_Variants/Variant7_geo';
import Variant8_geo from '../Geo_Variants/Variant8_geo';
import Variant9_geo from '../Geo_Variants/Variant9_geo';
import Variant10_geo from '../Geo_Variants/Variant10_geo';
export default class geography extends Component {
    render() {
        return( 
            <body className='bg' style={{ backgroundImage: `url(${background})` }}>
                <Tab.Container >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first_geo">Тест 1 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second_geo">Тест 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third_geo">Тест 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four_geo">Тест 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five_geo" >Тест 5</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six_geo">Тест 6</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven_geo">Тест 7</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eight_geo">Тест 8</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="nine_geo">Тест 9</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ten_geo">Тест 10</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first_geo">
                                    <Variant1_geo></Variant1_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second_geo">
                                    <Variant2_geo></Variant2_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third_geo">
                                    <Variant3_geo></Variant3_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four_geo">
                                    <Variant4_geo></Variant4_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five_geo">
                                    <Variant5_geo></Variant5_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six_geo">
                                    <Variant6_geo></Variant6_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven_geo">
                                    <Variant7_geo></Variant7_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight_geo">
                                    <Variant8_geo></Variant8_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nine_geo">
                                    <Variant9_geo></Variant9_geo>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ten_geo">
                                    <Variant10_geo></Variant10_geo>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </body>
        )
    }
        
}

