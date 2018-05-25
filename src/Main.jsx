import React, { Component } from 'react';

import Header from './Header.jsx'
import {Route, Switch} from 'react-router-dom'


class Main extends Component {
    
    render() {
        return(
            <div>
                <Switch>
                    <Route exact path="/" component={HomeContent}/>
                    <Route exact path="/experience" component={ExperienceContent}/>
                    <Route exact path="/research" component={ResearchContent}/>
                    <Route exact path="/projects" component={ProjectContent}/>
                    <Route exact path="/other" component={OtherContent}/>

                </Switch>
            </div>
        )
    }
}






class HomeContent extends Component {

    render() {
        return(
            <div>
                <Header active="/"/>

                <div className='text-block'>
                    Peter Hahn, Computer Science BS at Brown University, 
                    specializing in Artificial Intelligence 
                    and Software Engineering. During my time at Brown, I have 
                    participated in a series of software projects, both independent
                    and organized, as well as working with several research groups. 
                    In addition, I also help out our school community's Computer 
                    Science Department as a Consultant as well as a Teaching Assistant. 

                </div>
            </div>
        )
    }
}

class ExperienceContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/experience"/>
            </div>
        )
    }
}

class ResearchContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/research"/>
            </div>
        )
    }
}

class ProjectContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/projects"/>
            </div>
        )
    }
}

class OtherContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/other"/>
            </div>
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