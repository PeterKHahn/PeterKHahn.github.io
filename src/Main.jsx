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
                            <a className="icon" href={"https://github.com/PeterKHahn/"}><img src="github32.png" /></a>
                            <a className="icon" href={"https://www.linkedin.com/in/peterkhahn/"}><img src="linkedin34.png" /></a>


                            <p>
                                During my time at Brown, I have 
                                participated in a series of software projects, both independent
                                and organized, as well as working with several research groups. 
                                 In addition, I also help out our school community's Computer 
                                Science Department as a Consultant as well as a Teaching Assistant.
                            </p>
                            <p>
                                As someone with both software engineering and research experience, I have practice with the entire 
                                problem solving process, from asking the right questions, to finding the right solutions. If you are 
                                looking for a software developer, I am searching for internships for the Summer of 2019, as well as a position 
                                following the Spring of 2020. 
                            </p>
                            <p>
                                If you are interested, feel free to look around this site, where I go into greater detail of projects I have listed 
                                on my resume, and I look forward to speaking with you in the future. 
                            </p>
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

        const radar = (
            <div> 
                <p>
                    Project R.A.D.A.R. (Really Awesome Design, and Radars), is a multiplayer online real-time game, inspired by the .io genre of games. The project is web based, having a frontend using jQuery/Javascript HTML/CSS as well as a backend in Java. 
                </p>
                <p>
                    As the backend developer, I worked on the game engine, logic, and system architecture of the project. I worked on this project with 3 other team members, so it was very important to keep each of our components modularized, keeping to the principles of encapsulation and object oriented programming. I designed an architecture and API for each section, so that none of our individual components of the project needed to know the individual implementation of the other components. This way, the artificial intelligence portion could be designed without having specific knowledge of the game, and the frontend could render without knowing what was going on in the backend.
                </p>
                <p>
                    My main role was the design of the backend and game engine. Creating the engine was a challenge, because I wanted to construct an engine that would allow for as much creativity and extensibility as possible. If at some point in the future we wanted to add new game features, or even make an entirely different game, I wanted to make sure that the engine would be able to support the changes. The end product had it so that in order to add new features to the game, the only thing that needed to be done was to create a single top-level class, since nearly all the low-level functionality was hidden away in the engine.
                </p>
                <p>
                    To optimize efficiency, there were two things that I did. First off, I created a chunking system, dividing the map into small sections so that any individual players would only receive knowledge of surrounding objects, instead of the whole board. Primarily, this was a decision made because having access to information outside of the player's range of sight (even if we don't render it) can give them an unfair advantage. In addition, chunking would provide an efficiency boost. Having a large game board meant that that the number of entities on the board would increase quadratically with the length of the board. This made if very hard to make the game scalable. However, chunking allowed me to set this essentially to a constant time operation. Secondly, I changed the way we rendered things. Allowing a zoom functionality allowed us to control the amount that was being rendered on the screen. This scaling feature was not only nice for presentations, but also meant that we could control visuals and rendering in the frontend without changing anything in the backend, which of course led to an increased rendering efficiency by 75%.

                </p>
                <p> 
                     Project R.A.D.A.R. was one of my first large scale team projects, and although I was told integration would be difficult, I am very proud of how our modularized model of the software allowed us to cleanly integrate our parts to create our final project.

                </p>
            </div>
        )

        const ividere = (
            <div> 
                <p>
                    iVidere is a Visual Prosthesis, to help people who are blind understand their surroundings using auditory queues, fueled by a neural network, an accelerometer, and 3D cameras. Most importantly, iVidere is cost efficient, and designed to be continuously improved, unlike other more expensive and single purpose devices. I first learned about this project in freshman year, and I have worked with them since. Because it is a project created by students, it is very important in the design to make sure that each component is modularized, so that when the current members of the team graduate, others can still continue to contribute to the project. This is where I came in, as my role was to find a way to model the software so that new components can be easily added, in a way that would work with different programming languages, so that anyone could work on the project.
                </p>
                <p> 
                    ZeroMQ is a distributed messaging system, that uses a publish-subscribe (pubsub) pattern to serially communicate with different components of a piece of software. Protobuf is Google's Protocol Buffer mechanism, allowing for different programs to communicate through serialization. The decision to use these components mirrored exactly our goals. Protobuf is language neutral, so that each component can be written in whichever language the developer most prefers. The project currently contains code in Python, Java, and C++, which all integrate with each other seamlessly. The choice to use ZeroMQ was made because it meant that each component could simply perform its process and publish it completely independently. Any other components who needed data from a published component could then simply subscribe to its messages, without ever needing to understand the workings of any other component.

                </p>
                <p>
                    After this decision was made to convert to a ZeroMQ and Protobuf system, I was then able to integrate the old components. I primarily worked with the 3D camera and hand tracking software as well as accelerometer code to make sure it could integrate with our system. After a short while of dealing with file dependencies, I was able to get my code to work with the preexisting code, successfully implementing the pubsub system. 
                </p>
            </div>
        )

        return(
            <div>                
                <Header active="/experience"/>
                <div></div>
                <div className="content">
                    <div className="section">
                        <div>
                            <Article 
                                title={"Project R.A.D.A.R."} 
                                subtitle={"Backend Developer"}
                                github={"https://github.com/PeterKHahn/ProjectRADAR"}
                                content={radar}/>
                        </div>
                    </div>
                    <div className="section">
                        <div>
                            <Article 
                                title={"iVidere: Visual Neuroprosthesis"} 
                                subtitle={"Software Engineer"}
                                content={ividere}/>
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
                <p>
                    Model finders such as SAT-solvers that are used for optimization purposes often give arbitrary and often misleading models. 
                    Our study aimed to find the effect of minimal, maximal, and arbitrary models on the students' interpretation. After collecting
                     data from an Advanced Formal Methods course, there were many pieces of information that we could study. Primarily, we wanted
                      to see whether the model a student saw affected the way the changed their program. There are of course many ways to pull data 
                      from a model, for example the number of relations or nodes there are, whether there exists cycles in the data or whether a 
                      certain atom exists in the data. It was my job to write software that made it easy for me to easily detect patterns in the data.

                </p>
                <p>
                    The software I built was meant for research purposes, but keeping software principles in mind was more important than ever.
                     Because of how research is done, the data we collect and the things we are looking for in the data change from year to year.
                      The challenge I faced was to make a piece of software that would be extensible enough to work for any dataset of any format,
                       so that someone a few years down the line could also use my software without having to rewrite most of it.

                </p>
                <p>
                    Since extracting the data from a source was going to be different every year, I made an interface that could convert a dataset
                     into an internal model. Writing a class that implements this interface is easy, and usually doesn't require more than a bit 
                     of string parsing. Once the model is in place, I made many different functions that allow the user to query any arbitrary predicate
                      in formal logic over the dataset. For example, if someone wanted to how many graph models had all blue nodes, where some of 
                      them formed a cycle, my program could go through and run the predicate on each model and return which ones fit their description.

                </p>
                <p>
                    Writing this software took a lot more thought than most of the other software I write because while my other software needed 
                    to be extensible, this one in particular is useful only because it is extensible. Being able to write software for research has 
                    allowed me to think ahead about future problems, so that anyone else will be able to fit the program to their own needs, in whatever 
                    way they would like. 

                </p>
            </div>
        )

        const bootstrap = (
            <div>
                <p>
                    Bootstrap is a Computer Science Education program, that works to integrate Computer Science curriculum into High School.
                     They tackle the biggest challenges facing computer science education in high schools: lack of resources, and lack of 
                     participation by certain groups. By integrating into a preexisting class such as Algebra, Bootstrap brings Computer 
                     Science to all students, completely free of charge.
                
                </p>
                <p>
                     My role as a researcher was to show using the data we collected that the Bootstrap curriculum proved 
                     to improve students' understanding of not only computer science, but of algebra as well. Students have 
                     many misconceptions about Algebraic concepts that carry on throughout their lives, and Bootstrap aims to 
                     get rid of these misconceptions. Students were given a test composed of algebra word problems as well as questions
                      about equality. I first coded the responses students gave to classify each response's correctness,
                       and then using Google Apps Script for the lighter calculations and R for statistical analysis, I was 
                       able to show a significant increase in student's understanding of Algebra through Bootstrap.

                </p>
                <p> 
                    In addition to the statistical analysis, I helped with improving upon many of the scripts that were used
                     to collect the data, as well as general improvements on the pedagogy of Bootstrap. In research, it was 
                     all about being able to make the right hypothesis on what was going on inside of a student's head, and being
                      able to formulate an experiment that could test that hypothesis. I joined Bootstrap because I was very impressed
                       with the direction they took CS education, and I was glad I was able to help with their mission. 

                </p>
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
                            <Article 
                                title={"Formal Methods Researcher"} 
                                subtitle={"Software/Data Analysis"}
                                content={formalMethods}/>
                        </div>
                    </div>
                    <div className="section">
                         <div>
                            <Article 
                                title={"Bootstrap World"} 
                                subtitle={"Data Analysis and Research"}
                                content={bootstrap}/>
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
                                subtitle={"Full Stack Developer"} 
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
                <p>
                    I was a computer science Teaching assistant for 2 semesters, once for CS17, Introduction to Computer Science,
                     and then again for CS22, Discrete Structures and Probability. I became a TA because I wanted to give back
                      to the CS Department, as the majority of the course is run by the TAs. Although I had many responsibilities, 
                      grading, holding lab, organizing design checks, I always kept the student first. Every interaction I had 
                      with course material or students was about what I felt was best for each student.

                </p>
                <p>
                    I drew from my experience from taking the course to make changes to the assignments when I became a TA. 
                    I redesigned several assignments to better fit the format on how I felt a student would best understand 
                    it. The week before classes start, I attended TA camp, where we went through each assignment and made these
                     changes, and I made it my top priority to make sure everything was in good shape for when we presented it
                      to the students.

                </p>
                <p>
                    Probably the best part of being a TA was holding hours, because it's the time when you have the ability
                     to help students directly. Although I've held both group and individual hours, I prefer working with 
                     students one on one to help them understand concepts. I believe that in order to solve problems, you must 
                     first understand the root of misunderstanding, so being able to talk to someone one on one gives me the 
                     opportunity to understand. 
                </p>
            </div>
        )

        const sunlab = (
            <div>
                <p>
                    Being a SunLab consultant gives me a chance to help with some of the more technical aspects that students encounter,
                     that unlike TAing, isn't tied to a specific course. One of the biggest barriers to Computer Science or any department 
                     that uses technology is getting used to the different frameworks that the course uses. For many students, it will be 
                     their first time using an IDE or a terminal, and even simple shell commands will take a while to be completely comfortable
                      with. As a SunLab consultant, I make myself readily accessible to any student having technical difficulties with 
                      any of the tools they are using, making sure they feel comfortable with making the transition into Computer Science. 
                </p>  
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