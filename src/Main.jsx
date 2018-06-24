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

                <div className='content'>
                    <div>Peter Hahn</div>
                    <div>Computer Science, Aritifical Intelligence, Software Engineering</div>
                    <div>Brown University Class of 2020</div>
                    
                    <div>During my time at Brown, I have 
                    participated in a series of software projects, both independent
                    and organized, as well as working with several research groups. 
                    In addition, I also help out our school community's Computer 
                    Science Department as a Consultant as well as a Teaching Assistant.
                    </div>

                    <div className="section">
                        <div>Programming Languages, Frameworks, Tools, Skills</div>
                        <div className="subsection">
                            <div>Programming Languages</div>
                            <div>
                                Java, Kotlin, Scala, Python, Node, C, Racket, OCaml
                            </div>
                            <div>
                                BASH, C++, R
                            </div>
                        </div>
                        <div className="subsection">
                            <div>Front End Development</div>
                            <div>
                                React, HTML, CSS, Javascript, jQuery
                            </div>
                        </div>
                        <div className="subsection">
                            <div>Back End Frameworks</div>
                            <div>
                                Flask, Ktor, Spark
                            </div>
                        </div>
                        <div className="subsection">
                            <div>Modeling and Logic</div>
                            <div>
                                TLA+, Alloy, Prolog
                            </div>
                        </div>
                        <div className="subsection">
                            <div>Other Tools</div>
                            <div>
                                Operating Systems: Windows, Linux, Unix
                            </div>
                            <div>
                                LaTeX, Google Apps Script, Google API
                            </div>
                        </div>

                    </div>

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
                <div></div>
                <div className="section">
                        <div>IVidiere: Visual Neuroprosthesis</div>
                        <div>
                            
                        </div>
                </div>
                <div className="section">
                        <div>Project R.A.D.A.R.</div>
                        <div>
                            
                        </div>
                </div>
            </div>
        )
    }
}

class ResearchContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/research"/>
                <div className="content">
                    <div>
                        At Brown, I've always found time to contribute
                        to research projects. I worked with Brown's Programming 
                        Language Team under multiple professors. I have designed software 
                        ranging from databasing, scripting, and statistical analysis, aimed to 
                        aid research in a variety of topics, including model finders, 
                        programming languages, and computer science education. 
                    </div>
                    <div className="section">
                        <div>Minimal Model Finders Research</div>
                        <div>
                        </div>
                    </div>
                    <div className="section">
                        <div>Bootstrap World</div>
                        <div>
                        </div>
                    </div>
                    <div className="section">
                        <div>Pyret Programming Language</div>
                        <div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

class ProjectContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/projects"/>
                <div className="content">
                    <div>
                        I have worked on a variety of projects, both my own and on teams. 
                        Although working on a team allows for very large scale projects, 
                        I am proud of the work I have done independently, because of the 
                        skills necessary to understand the workings of my program at all levels. 
                    </div>
                    <div className="section">
                        <div>NeoEducation: Flash</div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="section">
                        <div>Ratty or Not: The Hub</div>
                        <div>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class OtherContent extends Component {
    render() {
        return(
            <div>                
                <Header active="/other"/>
                <div className="content">
                    <div>
                    </div>
                    <div className="section">
                        <div>Computer Science Teaching Assistant</div>
                        <div>
                            
                        </div>
                    </div>
                    <div className="section">
                        <div>Sunlab Consultant</div>
                        <div>
                            
                        </div>
                    </div>
                </div>
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