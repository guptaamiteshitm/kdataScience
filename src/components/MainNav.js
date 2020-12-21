import React, { Component } from 'react'
import './Navbar.css'
class MainNav extends Component {

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg  navbar-dark py-3 Nav-color"
                    id='navTop'>
                    <a class="navbar-brand anchotLeft" >
                        <img src='assets/bluRxWhite.png' width='80px' alt='logo' /></a>
                    <ul className="navbar-nav py-2" id='mainNavLeft'>
                        <li class="nav-item dropdown pl-2">

                            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                Help
                            </a>
                            <div class="dropdown-menu">
                                <a class="dropdown-item" >Help?</a>
                                <a class="dropdown-item" >Help?</a>
                                <a class="dropdown-item" >Help?</a>
                            </div>
                        </li>

                        <li class="nav-item dropdown pl-2">

                            <a class="nav-link dropdown-toggle" id="navbardrop" data-toggle="dropdown">
                                Account
                            </a>
                            <div className="dropdown">

                                <div className="dropdown-menu" aria-labelledby="dropdown_user">
                                    <form className="px-5 py-5 formWidth" >
                                        <div className='row'>
                                            <div className='col-sm-6'>
                                                <button className='btn btn-default form-rounded btn-sm       signUpButton' >
                                                    SIGN UP
                                                 </button>
                                            </div>
                                            <div className='col-sm-6'>
                                                <button className='btn btn-default form-rounded btn-sm  singInButton ' >
                                                    SIGN IN
                                             </button>
                                            </div>
                                        </div>
                                    </form>
                                    <ul style={{ listStyle: 'none' }}>
                                        <li>
                                            <i class="far fa-user"></i>  Account
                                       </li>
                                        <hr />
                                        <li>
                                            <a > <i class="fas fa-border-all"></i>  Orders</a>
                                        </li>
                                        <hr />
                                        <li>
                                            <i class="far fa-hospital"></i>  Saved Medications
                                       </li>
                                        <hr />
                                        <li>
                                            <i class="far fa-bell"></i>  Notifications
                                       </li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li class="nav-item py-3 pl-3">
                            <div className="dropdown">
                                <button className="btn btn-sm btn-primary  form-rounded bgColor" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i class="fa fa-search"></i>
                                    PRESCRIPTIONS
                              </button>
                                <div className="dropdown-menu" aria-labelledby="dropdown_user">
                                    <form className="px-4 py-2">
                                        <input type="search" className="form-control search" placeholder="Type your drug name" autofocus="autofocus" />
                                    </form>
                                    <div className="menuItems">
                                        <input type="button" className="dropdown-item" defaultValue="Drugname" />
                                        <input type="button" className="dropdown-item" defaultValue="Drugname" />
                                        <input type="button" className="dropdown-item" defaultValue="Drugname" />
                                        <input type="button" className="dropdown-item" defaultValue="Drugname" />
                                        <input type="button" className="dropdown-item"
                                            defaultValue="Saved Medications"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div >
        )
    }

}


export default MainNav
