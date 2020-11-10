import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from './Home';
import Dank from './Dank';
import Submit from './Submit';
import Vote from './Vote';
import Openc from './Openc';
import Resolvec from './Resolvec';
import Leaderboard from './Leaderboard';
import About from './About';
import {Switch,Route, Redirect} from 'react-router-dom'
import Navbar from './Navbar';
import Challenge from './Challenge';
//import Web3 from 'web3';

const App= () =>{
    return(
        <>  
        <Navbar/>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/dank" component={Dank} />
            <Route exact path="/submit" component={Submit} />
            <Route exact path="/vote" component={Vote} />
            <Route exact path="/openc" component={Openc} />
            <Route exact path="/resolvec" component={Resolvec} />
            <Route exact path="/challenge" component={Challenge} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/about" component={About} />
            <Redirect to="/" />
          </Switch>
        </>
    );
};


export default App;