import React, { Component } from 'react'
import {Tab, Tabs} from 'react-bootstrap';
import './results.css';
import Geo from './res_geo';
import His from './res_his';
import Bio from './res_bio';
import Math from './res_math';
import Ukr from './res_ukr';
import Phy from './res_phy';
export default class results extends Component {
    render() {
        return (
            <Tabs defaultActiveKey="profile" className="Сolumn" >
                <Tab eventKey="Geo" title="Географія">
                    <Geo/>
                </Tab>
                <Tab eventKey="his" title="Історія">
                    <His/>
                </Tab>
                <Tab eventKey="bio" title="Біологія">
                    <Bio/>
                </Tab>
                <Tab eventKey="math" title="Математика">
                    <Math/>
                </Tab>
                <Tab eventKey="ukr" title="Українська мова">
                    <Ukr/>
                </Tab>
                <Tab eventKey="phy" title="Фізика">
                    <Phy/>
                </Tab>
            </Tabs>
        )
    }
}
