import React, { Component } from 'react'


class Footer extends Component {

    render() {
        return (

            <div>
                <div className='container'>
                    <div className='row justifity-content-center py-5'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-5'>
                            <p className='paraGraph'>Get Started with BLURX*, a Better Way to Get Your Prescription Drugs:
                            </p>
                        </div>
                        <div className='col-sm-2 ' >
                            <button className='btn btn-default form-rounded btn-sm signUpButton' >
                                SIGN UP
                            </button>
                        </div>
                        <div className='col-sm-2 ' >
                            <button className='btn btn-default form-rounded btn-sm  singInButton ' >
                                SIGN IN
                            </button>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <h3>How it Works?</h3>
                    </div>
                    <div className='row py-3'>
                        <div className='col-sm-2'></div>
                        <div className='col-sm-3'>
                            <div > <i class="fa fa-search" id='footerIconColor'></i></div>
                            <h5>Search Prescription Drugs</h5>
                        </div>
                        <div className='col-sm-3'>
                            <i class="fa fa-file-invoice-dollar" id='footerIconColor'></i>
                            <h5>Purchase Prescription Drugs </h5>
                        </div>
                        <div className='col-sm-3'>
                            <div><i class="fas fa-pills" id='footerIconColor'></i></div>
                            <h5>Get Your Medication </h5>
                        </div>
                        <div className='col-sm-1'></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer