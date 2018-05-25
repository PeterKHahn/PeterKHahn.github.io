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
                <div>Peter Hahn</div>
                <div className="buttons">
                    <HeaderButton text={"Home"} link="/" active={this.active("/")}/>
                    <HeaderButton text={"Experience"} link="/experience" active={this.active("/experience")}/>
                    <HeaderButton text={"University Research"} link="/research" active={this.active("/research")}/>
                    <HeaderButton text={"Independent Projects"} link="projects" active={this.active("/projects")}/>
                    <HeaderButton text={"Other"} link="/other" active={this.active("/other")}/>
                </div>
            </div>
        )
    }
}

const activeStyle = {
    backgroundColor: `#666666`
}
const inactiveStyle = {
    
}

class HeaderButton extends Component {
    render() {

        const style = this.props.active ? (
            activeStyle
        ) : inactiveStyle
        return(
            <a className="header-link" href={this.props.link}>
                <div className="header-button" style={style}>
                    <div className="header-button-inner">
                        {this.props.text}
                    </div>
                </div>

            </a>
        )
    }
}

export default Header; 