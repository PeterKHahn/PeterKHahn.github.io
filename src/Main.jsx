import React, { Component } from 'react';

import Header from './Header.jsx'
import {Route, Switch} from 'react-router-dom'


class Main extends Component {
    
    render() {
        return(
            <div>
                <Header/>
                <Body/>
            </div>
        )
    }
}



class Body extends Component {
    render() {
        return(
            <div className="body">
                <Switch>
                    <Route exact path="/" component={TempOne}/>
                    <Route exact path="/hey" component={TempTwo}/>
                </Switch>
            </div>
        )
    }
}

class TempOne extends Component {
    render() {
        return(
            <div>TempOne</div>
        )
    }
}

class TempTwo extends Component {
    render() {
        return(
            <div>TempTwo</div>
        )
    }
}

export default Main;