import React, { Component } from 'react';



class Header extends Component {
    constructor(props){
        super(props)

    }
    active(link) {
        return link === this.props.active
    }

    render() {


        return(
            <div className="header">
                <div className="buttons">
                    <HeaderButton text={"Home"} link="/home" active={this.active("/")}/>
                    <HeaderButton text={"Experience"} link="/experience" active={this.active("/experience")}/>
                    <HeaderButton text={"University Research"} link="/research" active={this.active("/research")}/>
                    <HeaderButton text={"Independent Projects"} link="/projects" active={this.active("/projects")}/>
                    <HeaderButton text={"Other"} link="/other" active={this.active("/other")}/>
                </div>
            </div>
        )
    }
}



class HeaderButton extends Component {
    render() {

        const cl = this.props.active ? (
            "header-button-active"
        ) : "header-button"
        return(
            <a className="header-link" href={process.env.PUBLIC_URL + this.props.link}>
                <div className={cl}>
                    <div className="header-button-inner">
                        {this.props.text}
                    </div>
                </div>

            </a>
        )
    }
}

export default Header; 