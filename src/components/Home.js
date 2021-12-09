import axios from "axios";
import React, { Fragment, useState } from "react";
import Navbar from "./Layouts/Navbar";
import Sidebar from "./Layouts/Sidebar";

const Home = () => {
    return (

        <Fragment>

            <div className="g-sidenav-show  ">
                <Sidebar />
                <main className="main-content position-relative max-height-vh-100 h-100 border-radius-lg ">

                    {/* Navbar */}
                    <Navbar />
                    {/* End Navbar */}
                    <div className="container-fluid py-4">
                        <div className="row">
                            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                <div className="card">
                                    <div className="card-header p-3 pt-2">
                                        <div className="icon icon-lg icon-shape bg-gradient-dark shadow-dark text-center border-radius-xl mt-n4 position-absolute">
                                            <i className="material-icons opacity-10">weekend</i>
                                        </div>
                                        <div className="text-end pt-1">
                                            <p className="text-sm mb-0 text-capitalize">Today's Money</p>
                                            <h4 className="mb-0">$53k</h4>
                                        </div>
                                    </div>
                                    <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+55% </span>than lask week</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                <div className="card">
                                    <div className="card-header p-3 pt-2">
                                        <div className="icon icon-lg icon-shape bg-gradient-primary shadow-primary text-center border-radius-xl mt-n4 position-absolute">
                                            <i className="material-icons opacity-10">person</i>
                                        </div>
                                        <div className="text-end pt-1">
                                            <p className="text-sm mb-0 text-capitalize">Today's Users</p>
                                            <h4 className="mb-0">2,300</h4>
                                        </div>
                                    </div>
                                    <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+3% </span>than lask month</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 mb-xl-0 mb-4">
                                <div className="card">
                                    <div className="card-header p-3 pt-2">
                                        <div className="icon icon-lg icon-shape bg-gradient-success shadow-success text-center border-radius-xl mt-n4 position-absolute">
                                            <i className="material-icons opacity-10">person</i>
                                        </div>
                                        <div className="text-end pt-1">
                                            <p className="text-sm mb-0 text-capitalize">New Clients</p>
                                            <h4 className="mb-0">3,462</h4>
                                        </div>
                                    </div>
                                    <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-danger text-sm font-weight-bolder">-2%</span> than yesterday</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6">
                                <div className="card">
                                    <div className="card-header p-3 pt-2">
                                        <div className="icon icon-lg icon-shape bg-gradient-info shadow-info text-center border-radius-xl mt-n4 position-absolute">
                                            <i className="material-icons opacity-10">weekend</i>
                                        </div>
                                        <div className="text-end pt-1">
                                            <p className="text-sm mb-0 text-capitalize">Sales</p>
                                            <h4 className="mb-0">$103,430</h4>
                                        </div>
                                    </div>
                                    <hr className="dark horizontal my-0" />
                                    <div className="card-footer p-3">
                                        <p className="mb-0"><span className="text-success text-sm font-weight-bolder">+5% </span>than yesterday</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <footer className="footer py-4  ">
                            <div className="container-fluid">
                                <div className="row align-items-center justify-content-lg-between">
                                    <div className="col-lg-6 mb-lg-0 mb-4">
                                        <div className="copyright text-center text-sm text-muted text-lg-start">
                                            ©
                                            made with <i className="fa fa-heart" /> by
                                            <a href="https://www.SagarSingh.tech/" className="font-weight-bold" target="_blank"> Sagar Singh</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </footer> */}
                    </div>
                </main>
            </div>
        </Fragment>
    )
}

export default Home