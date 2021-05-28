import React, { Component } from 'react';
import './Aabout.css';
import Maks from './Makss.jpg';
import Pasha from './Pasha.jpg';
import Matvei from './Matvei.jpg';
export default class About extends Component {
    render() {
        return (
            <div>
                <body className='Main'></body>
                <body className='Ava1' style={{ backgroundImage: `url(${Maks})` }}>
                  <body className='KAve1'>Це Максим </body>
                  <body className='KAve2'> Це Паша
                    <body className='Ava2' style={{ backgroundImage: `url(${Pasha})` }}></body>
                  </body>
                  <body className='Ava3' style={{ backgroundImage: `url(${Matvei})` }}>
                    <body className='KAve3'>Це Матвій</body>
                  </body>
                </body>
                
            </div>
        )
    }
}

