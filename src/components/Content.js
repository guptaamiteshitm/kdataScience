import React, { Component } from 'react'
import Footer from './Footer'
import './Navbar.css'

class Content extends Component {

    render() {
        return (
            <div>
                <div className='colorBg'>
                    <div className='container'>
                        <div className='row justify-content-center py-5'>
                            <div className='col-2'></div>
                            <div className='col-10'>
                                <div style={{ fontSize: 42 }}>Save Time.Save Money.Stay Healthy.</div>
                                <div style={{ fontSize: 17 }}>FREE TO USE & EASY TO SAVE -NO Contracts, NO  Membership Fees,No Hidden Fess.</div>
                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-6'>

                                <input type="text" class="form-control form-rounded " id="inputSuccess4"
                                    placeholder="Type your drug name" />
                            </div>
                            <div className='col-sm-2'>
                                <button className='btn bt-primary btn-sm form-rounded searchButton ' >
                                    <i class="fa fa-search"></i> Search</button>
                            </div>
                            <div className='col-sm-2'></div>
                        </div>
                        <div className='row py-4'>
                            <div className='col-sm-2'></div>
                            <div className='col-sm-8'>Common Drugs:</div>
                            <div className='col-sm-2'></div>
                        </div>
                        <div >
                            <div className='row py-3'>
                                <div className='col-sm-2'>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Lipitor
                                 </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Sildenafil
                                 </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn btn-default form-rounded inputColor ' >
                                        Norvasc
                                 </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Lexapro
                                 </button>
                                </div>
                                <div className='col-sm-2'></div>
                            </div>
                            <div className='row py-3' >
                                <div className='col-sm-2'>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Methyplrednisolone
                                 </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Duloxetine
                                 </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Finasteride
                                 </button>
                                </div>
                                <div className='col-sm-2'>
                                    <button className='btn bt-default form-rounded inputColor ' >
                                        Todalafil
                                 </button>
                                </div>
                                <div className='col-sm-2'></div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer /> */}
            </div>
        )
    }
}

export default Content