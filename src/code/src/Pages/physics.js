import React, { Component } from 'react'
import  {Nav} from 'react-bootstrap';
import { Row, Col } from "react-bootstrap";
import './phy.css';
import './st.css';
import background from './11.jpg';
import Tab from 'react-bootstrap/Tab';
import Variant1_phy from '../Phy_Variants/Variant1_phy';
import Variant2_phy from '../Phy_Variants/Variant2_phy';
import Variant3_phy from '../Phy_Variants/Variant3_phy';
import Variant4_phy from '../Phy_Variants/Variant4_phy';
import Variant5_phy from '../Phy_Variants/Variant5_phy';
import Variant6_phy from '../Phy_Variants/Variant6_phy';
import Variant7_phy from '../Phy_Variants/Variant7_phy';
import Variant8_phy from '../Phy_Variants/Variant8_phy';
import Variant9_phy from '../Phy_Variants/Variant9_phy';
import Variant10_phy from '../Phy_Variants/Variant10_phy';
export default class Physics extends Component {
    render() {
        return (
            <body className='bg' style={{ backgroundImage: `url(${background})` }}>
                <Tab.Container >
                    <Row>
                        <Col sm={3}>
                            <Nav variant="pills" className="flex-column">
                                <Nav.Item>
                                    <Nav.Link eventKey="first_phy">Тест 1 </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second_phy">Тест 2</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third_phy">Тест 3</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="four_phy">Тест 4</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="five_phy" >Тест 5</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="six_phy">Тест 6</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="seven_phy">Тест 7</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="eight_phy">Тест 8</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="nine_phy">Тест 9</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="ten_phy">Тест 10</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col sm={9}>
                            <Tab.Content>
                                <Tab.Pane eventKey="first_phy">
                                    <Variant1_phy></Variant1_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second_phy">
                                    <Variant2_phy></Variant2_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third_phy">
                                    <Variant3_phy></Variant3_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="four_phy">
                                    <Variant4_phy></Variant4_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="five_phy">
                                    <Variant5_phy></Variant5_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="six_phy">
                                    <Variant6_phy></Variant6_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="seven_phy">
                                    <Variant7_phy></Variant7_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="eight_phy">
                                    <Variant8_phy></Variant8_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="nine_phy">
                                    <Variant9_phy></Variant9_phy>
                                </Tab.Pane>
                                <Tab.Pane eventKey="ten_phy">
                                    <Variant10_phy></Variant10_phy>
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </body>
        )
    }
}
