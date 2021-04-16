import React, { Component } from "react";
import AboutMe from "../../components/AboutMe";
import Contact from "../../components/Contact";
import Portfolio from "../../components/Portfolio";
import Resume from "../../components/Resume";
import Nav from "../Nav";
import { Route, Redirect, HashRouter } from "react-router-dom";

class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className="row Header" id="header">
                    <Nav />
                </div>


            <div className="content">
                <Route exact path="/" render={() => (<Redirect to="/projects" />)} />
                <Route path="/aboutme" component={AboutMe} />
                <Route path="/contact" component={Portfolio} />
                <Route path="/resume" component={Resume} />
                <Route path="/contact" component={Contact} />
            </div>
            </HashRouter>
        )
    };
};

export default Header;