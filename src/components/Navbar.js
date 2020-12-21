import React, { Component } from 'react'
import MainNav from './MainNav'
import './Navbar.css'
class Navbar extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg bg-dark navbar-dark justify-content-center py-0 " >
                    <ul className="navbar-nav ulLeft" >
                        <li className="nav-item">
                            <a class="navbar-brand" >
                                <i class="fa fa-fw fa-envelope" id='iconColor' ></i>hello@blurx.com</a>
                        </li>
                        <li className="nav-item">
                            <a class="navbar-brand" >
                                <i class="fa fa-phone" id='iconColor' aria-hidden="true"></i>+1(630)473-5206</a>
                        </li>
                        <li className="nav-item">
                            <a class="navbar-brand" >
                                <i class="fa fa-key" aria-hidden="true" id='iconColor'></i>Questions & Answers</a>
                        </li>
                    </ul>
                </nav>
                <MainNav />
            </div>
        )
    }

}


export default Navbar
