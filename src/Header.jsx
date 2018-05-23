import React, { Component } from 'react';

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div>Peter Hahn</div>
                <div className="buttons">
                    <HeaderButton text={"Home"}/>
                    <HeaderButton text={"Experience"}/>
                    <HeaderButton text={"University Research"}/>
                    <HeaderButton text={"Independent Projects"}/>
                    <HeaderButton text={"Other"}/>
                </div>
            </div>
        )
    }
}

class HeaderButton extends Component {
    render() {
        return(
            <div className="header-button">
                <div className="header-button-inner">
                    {this.props.text}
                </div>
            </div>
        )
    }
}

export default Header; 