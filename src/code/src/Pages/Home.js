import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import {Button} from "react-bootstrap";
import './st.css';
import background from './11.jpg';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import geography from './geography';
import history from './history';
import math from './math';
import biology from './biology';
import ukranian from './ukranian';
import physics from './physics';
const Home = () => {
    const { user, isAuthenticated } = useAuth0();
    return (    
        <div className="main">
            <body className='bg1' style={{ backgroundImage: `url(${background})` }}>
                <Button href="/geography" size="lg"  className="btnG" > Географія </Button>
                <Button href='/physics'size="lg" className="btnP"> Фізика </Button>                   
                <Button href='/history' size="lg" className="btnH"> Історія </Button>                    
                <Button href='/ukranian' size="lg" className="btnU"> Українська мова </Button>                   
                <Button href='/biology' size="lg" className="btnB"> Біологія </Button>                   
                <Button href='/math' size="lg" className="btnM"> Математика </Button>
                
            </body>
            <Router>
                <Switch>
                    <Route exact path='/geography' component={geography}></Route>
                    <Route exact path='/history' component={history}></Route>
                    <Route exact path='/math' component={math}></Route>
                    <Route exact path='/biology' component={biology}></Route>
                    <Route exact path='/ukranian' component={ukranian}></Route>
                    <Route exact path='/physics' component={physics}></Route>
                </Switch>
            </Router>
           
                { isAuthenticated  ?
                     <div>
                        <body className='bg2_info1'>
                            <img className='pict_avatar' src={user.picture} alt={user.name} />
                            <h3 className='info'>Ім`я: {user.given_name}</h3>
                            <h3 className='info'>Прізвище: {user.family_name}</h3>
                            <h3 className='info'>Пошта: {user.email}</h3>
                            <h3 className='info'>Нікнейм: {user.nickname}</h3>
                        </body>
                    </div>
                    :
                    <div>
                        <body className='bg2_info2'>
                            <h1 className='info1_1'>Спочатку зайдіть</h1>
                            <h1 className='info1_2'>в акаунт!</h1>
                        </body>
                    </div>
                }   
           
            
        </div>
    )
}
export default Home;
