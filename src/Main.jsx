import React, { Component } from 'react';

import Header from './Header.jsx'
import {Link, Route, Switch} from 'react-router-dom'

class Main extends Component {
    
    render() {
        return(
            <div>
                
                <Switch>
                    <Route exact path={process.env.PUBLIC_URL + "/home"} component={HomeContent}/>
                    <Route exact path={process.env.PUBLIC_URL + "/experience"} component={ExperienceContent}/>
                    <Route exact path={process.env.PUBLIC_URL + "/research"} component={ResearchContent}/>
                    <Route exact path={process.env.PUBLIC_URL + "/projects"} component={ProjectContent}/>
                    <Route exact path={process.env.PUBLIC_URL + "/other"} component={OtherContent}/>

                </Switch>
            </div>
        )
    }
}




class HomeContent extends Component {

    

    render() {

        const neoEducationArticleSnippet = (
            <div className="text-container">
                <div>
                    NeoEducation is an independent project that I am most excited about. 
                    It is an educational tool that was designed with the principle that
                     students should be able to control how they learn as easily as they possibly can. 
                </div>

            </div>
        )


        const projectRadarArticleSnippet = (
            <div className="text-container">
                <div>
                    Project R.A.D.A.R. (Really Awesome Design, and Radars), is a multiplayer online real-time game, 
                    inspired by the .io genre of games. The project is web based, having a frontend using jQuery/Javascript
                     HTML/CSS as well as a backend in Java. 
                </div>

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
                        github={"https://github.com/PeterKHahn/NeoEducation"}
                    />
                    
                    <ArticleSnippet
                        title={"Project R.A.D.A.R."}
                        content={projectRadarArticleSnippet}
                        subtitle={"Backend Software Engineer"}
                        to={"/experience"}
                        github={"https://github.com/PeterKHahn/ProjectRADAR"}

                        
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
                <div className="content">
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
            </div>
        )
    }
}

class ResearchContent extends Component {
    render() {

        const formalMethods = (
            <div>
                FORMAL methods
            </div>
        )

        const bootstrap = (
            <div>
                bootstrap :D
            </div>
        )

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
                        <div>
                            <Article title={"Formal Methods Researcher"} content={formalMethods}/>
                        </div>
                    </div>
                    <div className="section">
                         <div>
                            <Article title={"Bootstrap: Computer Science Education"} content={bootstrap}/>
                        </div>
                    </div>


                </div>
            </div>
        )
    }
}

class ProjectContent extends Component {

    
    render() {

        const neoed = (
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
                    Primarily is the backend server that stores what I call Note Cards.
                     Note Cards differ from Flash cards in that they aren't specific 
                     towards a term in a chapter in the textbook as much as it is general 
                     notes of a given topic. This is important because 5 chapters down the road,
                      a note card will still be relevant and needed for studies. This led to a very 
                      important design decision in the databasing. I needed to find a way to allow for note 
                      cards to be used in many different settings, going between study sets and sometimes even
                       between subjects. I accomplished this using Join Tables in SQL, making sure that I could 
                       maintain a many to many relation between study sets and note cards. This way, reusing note 
                       cards for future sets because very easy for users, as the software can simply add a preexisting
                        card into a new card set. This also makes sharing cards and collaborating with others much easier.
                </p>
                <p>
                    In the frontend, I have a multi-page React App that uses Redux to store user information. One of the 
                    features I implemented into NeoEducation is prioritizing cards. When studying, not all terms are equally
                     important, so it was very important for me to implement a feature so that users can control how they 
                     study. To do this, I gave the ability for a user to set the priority of any given card. The user can 
                     then filter out a range of cards that they wish to study from. For example, if they only want to study 
                     cards that are priority 3 or higher, they can specify that using a slider bar.
                </p>
                <p>
                    NeoEducation is still in development. Currently, users are able to create, save, and load study sets,
                     as well as optimize their study time using the prioritization feature. However, I have many big plans 
                     for NeoEducation in the future. One of the things I will continue to work on is the linking of cards
                      to each other. The note card about the Cold War will almost certainly mention the Cuban Missile Crisis,
                       so students should be able to jump to this topic with a click of a button. The way I've structured 
                       the database should make it very easy to do, since each card is treated as an independent component. 
                       I look forward to continuing development of NeoEducation, as well as sharing it.
                </p>
            </div>
        )

        const hub = (
            <div>
                <p>
                    Ratty Or Not was originally meant to be a way to create a pleasant user interface 
                    for the Brown Dining API. Named after our largest dining hall, known to students as
                    the Ratty, the idea started at a Hack at Brown event. As time went on, I wanted to do
                    more with the project, creating a one stop page that I could visit to view all the information 
                    I needed for the day. This brought about The Hub, where I could go to one stop to check what I was
                    going to eat that day, and what I was going to do that day. I did this by integrating the Brown Dining 
                    API with Google's Calednar API and other APIs to create a convenient one-stop interface.
                </p>
                <p>
                    The Hub is based in a Flask server in Python, which primarily queries the Brown Dining API and Google Calendar
                     API to retrieve information to send up to the frontend, which renders all of these components using jQuery.
                      One of the small things that bothered me about Brown's dining web interface was that I had to click through
                       multiple pages to see what I could eat, so having everything served efficiently and immediately was a huge
                        concern. By retrieving the information from the API in the early hours of the morning, I could preprocess 
                        the data to send to the frontend nearly instantaneously, as opposed to processing it every time I visited the page.

                </p>
                <p>
                    I also wanted to integrate my Google Calendar with what I'm going to eat, so I can record what I wanted to eat 
                    and when. Doing this securely was a concern for me. Originally I had a password that could be entered on the 
                    start of the server that would query a Google Apps Script that I wrote. This of course is impossible to scale, 
                    still very insecure, and on top of that very slow, taking minutes to process the query. The solution here was
                     Google API, where I used OAuthentication to verify tokens to allow me to access my calendar directly. As a 
                     software engineering, even though this was a project engineered specifically for me, the idea of scalability 
                     and distribution was always in my mind, so using OAuthentication was a good choice if I ever decided to share 
                     this program with others.
                </p>
                <p>
                     Again, since user interface was very important to me, I made sure that I could do very quick insertions into 
                     my Calendar. Using tools such as key bindings and automatic selection, I could insert something into my calendar
                      with the press of a key or a single click. Google's Natural Language Parsing allowed me to also remove
                       the hassle of meeting very specific and verbose queries, so I could just type "Dinner with Michael at 6",
                        instead of selecting the two fields individually.

                </p>
                <p>
                    There were a few other components I had in the project (it is the Hub after all). Not only could I add events 
                    to my Google Calendar, I could also see what my events were for the next week. In addition, as a TA I needed 
                    to see announcements from the class. Using the GMail API, I was able to find announcements posts in my email 
                    to see if there was anything important I missed. I also had a small notes section, modeled after Google Keep, 
                    but it's a bit of a work in progress. Overall, I was successful in creating a program that would help me in my 
                    everyday life, and I've used it everyday since then to quickly check what my day will be like!

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
                            <Article 
                                title={"NeoEducation"}
                                content={neoed}
                                subtitle={"Full Stack Developer"}
                                github={"https://github.com/PeterKHahn/NeoEducation"}/>
                        </div>
                    </div>
                    <div className="section">
                        <div>
                            <Article 
                                title={"Ratty or Not: The Hub"} 
                                content={hub}
                                github={"https://github.com/PeterKHahn/TheHub"}/>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}

class OtherContent extends Component {
    render() {

        const ta = (
            <div>
                TAing is for cool kids
            </div>
        )

        const sunlab = (
            <div>
                SUNAS
            </div>
        )

        return(
            <div>                
                <Header active="/other"/>
                <div className="content">

                    <div className="section">
                        <div>
                            <Article title={"Computer Science Teaching Assistant"} content={ta}/>
                        </div>
                    </div>
                    <div className="section">
                        <div>
                            <Article title={"Sunlab Consultant"} content={sunlab}/>
                        </div>
                            
                    </div>
                </div>
            </div>
        )
    }
}

class ArticleSnippet extends Component {
    render() {
        const github = this.props.github ? <a href={this.props.github}><img src="github32.png" /></a> : <div></div>

        return(
            <div className="article-snippit">
                <div className="article-inner">
                        <div className="article-header-snippet">
                            <Link className="link" to={process.env.PUBLIC_URL + this.props.to}>

                                <div className="article-title">{this.props.title}</div>
                            </Link>

                            <div className="article-subtitle">{this.props.subtitle}</div>
                            {github}
                        </div>
                    <div className="article-snippit-content">{this.props.content}</div>
                </div>

            </div>
            
            
        )
    }
}

class Article extends Component {
    render() {

        const github = this.props.github ? <a href={this.props.github}><img src="github32.png" /></a> : <div></div>

        return(
            <div className="article">
                <div className="article-inner">
                    <div className="article-header">
                        <div className="article-title">{this.props.title}</div>
                        <div className="article-subtitle">{this.props.subtitle}</div>
                        {github}
                    </div>
                    <div className="article-content">{this.props.content}</div>
                </div>

            </div>
            
            
        )
    }
}



export default Main;