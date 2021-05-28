import React from 'react'
import  Table from 'react-bootstrap/Table';
import './res_geo.css';
import score1_geo from'../Geo_Variants/Variant1_geo';
console.log(score1_geo)
const Geo = () => {
    const scr1_geo = score1_geo
    return (
        <Table striped bordered hover variant="dark" size="sm" className='tbl_geo'>
            <thead>
                <tr>
                <th>Номер тесту</th>
                <th>Максимальний бал</th>
                <th>Балів отримано</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>1</td>
                <td>10</td>
                <td>{scr1_geo}</td>
                </tr>
                <tr>
                <td>2</td>
                <td>10</td>
                <td></td>
                </tr>
                <tr>
                <td>3</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>4</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>5</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>6</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>7</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>8</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>9</td>
                <td >10</td>
                <td></td>
                </tr>
                <tr>
                <td>10</td>
                <td >10</td>
                <td></td>
                </tr>
            </tbody>
        </Table>
    )
}

export default Geo;