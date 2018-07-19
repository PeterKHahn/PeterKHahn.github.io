import React, { Component } from 'react';

import Header from './Header.jsx'
import {Link, Route, Switch} from 'react-router-dom'






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

        const neoEducationArticleSnippet = (
            <div className="text-container">
                <p>
                    NeoEducation is an independent project that I am most excited about. 
                    It is an educational tool that was designed with the principle that
                     students should be able to control how they learn as easily as they possibly can. 
                </p>

            </div>
        )


        const projectRadarArticleSnippet = (
            <div className="text-container">
                <p>
                    Project R.A.D.A.R. (Really Awesome Design, and Radars), is a multiplayer online real-time game, 
                    inspired by the .io genre of games. The project is web based, having a frontend using jQuery/Javascript
                     HTML/CSS as well as a backend in Java. 
                </p>

            </div>
        )



        return(
            <div>
                <Header active="/"/>

                <div className='content'>
                    <div className="intro">
   
                        <img src="portrait.jpg" className="portrait-photo" />
                        <div className="intro-text">
                            <div className="peter">Peter Hahn</div>
                            <div className="study">Computer Science | Aritifical Intelligence | Software Engineering</div>
                            <div className="school">Brown University Class of 2020</div>
                            <div>During my time at Brown, I have 
                            participated in a series of software projects, both independent
                            and organized, as well as working with several research groups. 
                            In addition, I also help out our school community's Computer 
                            Science Department as a Consultant as well as a Teaching Assistant.
                            </div>
                        </div>


                    </div>
                   
                    <div className="sub-title">Project Highlights</div>
                    <ArticleSnippet
                        title={"NeoEducation"}
                        subtitle={"Full Stack Software Engineer"}
                        content={neoEducationArticleSnippet}
                        to={"/projects"}
                    />
                    
                    <ArticleSnippet
                        title={"Project R.A.D.A.R."}
                        content={projectRadarArticleSnippet}
                        subtitle={"Backend Software Engineer"}
                        to={"/experience"}

                        
                    />
                    <div className="sub-title">Computer Science and Programming Skills</div>


                    <div className="info-section">
                        <div className="subsection">
                            <div className="subsection-title">Programming Languages</div>
                            <div className="subsection-content">
                                Java, Kotlin, Scala, Python, Node, C, Racket, OCaml
                            </div>
                            <div className="subsection-content">
                                BASH, C++, R
                            </div>
                        </div>
                        <div className="subsection">
                            <div className="subsection-title"> Front End Development</div>
                            <div className="subsection-content">
                                React, HTML, CSS, Javascript, jQuery
                            </div>
                        </div>
                        <div className="subsection">
                            <div className="subsection-title" >Back End Frameworks</div>
                            <div className="subsection-content">
                                Flask, Ktor, Spark
                            </div>
                        </div>
                        <div className="subsection">
                            <div className="subsection-title" >Modeling and Logic</div>
                            <div className="subsection-content">
                                TLA+, Alloy, Prolog
                            </div>
                        </div>
                        <div className="subsection">
                            <div className="subsection-title" >Other Tools</div>
                            <div className="subsection-content">
                                Operating Systems: Windows, Linux, Unix
                            </div>
                            <div className="subsection-content">
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

        const a = (
            <div>
                <p>
                    NeoEducation is an independent project that I am most excited about. 
                    It is an educational tool that was designed with the principle that
                     students should be able to control how they learn as easily as they possibly can. 
                </p>
                <p>
                    Currently, I am working on a component called NeoEducation Flash, which is modeled 
                    after Quizlet Flash cards, but has several differences. The project is based in a 
                    React-App with Redux, as well as a Kotlin backend API that communicates with an SQL 
                    database. Working on this project by myself gave me the opportunity to understand and 
                    design every component to best fit the philosophy of NeoEducation. Many of the software 
                    design decisions was made keeping this in mind.

                </p>
                <p>
                    Primarily is the backend server that stores what I call Note Cards. Note Cards differ from Flash cards in that they aren't specific towards a term in a chapter in the textbook as much as it is general notes of a given topic. This is important because 5 chapters down the road, a note card will still be relevant and needed for studies. This led to a very important design decision in the databasing. I needed to find a way to allow for note cards to be used in many different settings, going between study sets and sometimes even between subjects. I accomplished this using Join Tables in SQL, making sure that I could maintain a many to many relation between study sets and note cards. This way, reusing note cards for future sets because very easy for users, as the software can simply add a preexisting card into a new card set. This also makes sharing cards and collaborating with others much easier.
                </p>
                <p>
                    In the frontend, I have a multi-page React App that uses Redux to store user information. One of the features I implemented into NeoEducation is prioritizing cards. When studying, not all terms are equally important, so it was very important for me to implement a feature so that users can control how they study. To do this, I gave the ability for a user to set the priority of any given card. The user can then filter out a range of cards that they wish to study from. For example, if they only want to study cards that are priority 3 or higher, they can specify that using a slider bar.
                </p>
                <p>
                    NeoEducation is still in development. Currently, users are able to create, save, and load study sets, as well as optimize their study time using the prioritization feature. However, I have many big plans for NeoEducation in the future. One of the things I will continue to work on is the linking of cards to each other. The note card about the Cold War will almost certainly mention the Cuban Missile Crisis, so students should be able to jump to this topic with a click of a button. The way I've structured the database should make it very easy to do, since each card is treated as an independent component. I look forward to continuing development of NeoEducation, as well as sharing it.
                </p>
            </div>
        )
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
                        <div>
                            <Article title={"NeoEducation"}content={a}/>
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

class ArticleSnippet extends Component {
    render() {
        return(
            <div className="article">
                <div className="article-inner">
                    <Link className="link" to={this.props.to}>
                        <div className="article-header-snippet">
                            <div className="article-title">{this.props.title}</div>
                            <div className="article-subtitle">{this.props.subtitle}</div>
                        </div>
                    </Link>
                    <div className="article-content">{this.props.content}</div>
                </div>

            </div>
            
            
        )
    }
}

class Article extends Component {
    render() {
        return(
            <div className="article">
                <div className="article-inner">
                    <div className="article-header">
                        <div className="article-title">{this.props.title}</div>
                        <div className="article-subtitle">{this.props.subtitle}</div>
                    </div>
                    <div className="article-content">{this.props.content}</div>
                </div>

            </div>
            
            
        )
    }
}



export default Main;