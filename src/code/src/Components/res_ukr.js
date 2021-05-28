import React  from 'react'
import  Table from 'react-bootstrap/Table';
import './res_geo.css';
const Ukr = () => {
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
                <td></td>
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

export default Ukr;