import React, { Fragment } from 'react'
import { Link,useHistory } from 'react-router-dom'
const Sidebar = () => {
    const history = useHistory()
    const logout = (e) => {
        // console.log('onClick')
        localStorage.clear('token')
        history.push('/')
    }
    return (
        <Fragment>
            <aside className="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
                <div className="sidenav-header">
                    <i className="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav" />
                    <a className="navbar-brand m-0"  >
                        <img src="../assets/img/logo-ct.png" className="navbar-brand-img h-100" alt="main_logo" />
                        <span className="ms-1 font-weight-bold text-white"> Dashboard </span>
                    </a>
                </div>
                <hr className="horizontal light mt-0 mb-2" />
                <div className="collapse navbar-collapse  w-auto  max-height-vh-100" id="sidenav-collapse-main">
                    <ul className="navbar-nav">
                        <Link to="/home">
                            <li className="nav-item">
                                <a className="nav-link text-white active bg-gradient-primary">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">dashboard</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Dashboard</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/add">
                            <li className="nav-item">
                                <a className="nav-link text-white " >
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">person</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Add Clients</span>
                                </a>
                            </li>
                        </Link>
                        <Link to="/get">
                            <li className="nav-item">
                                <a className="nav-link text-white ">
                                    <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                        <i className="material-icons opacity-10">timeline</i>
                                    </div>
                                    <span className="nav-link-text ms-1">Clients</span>
                                </a>
                            </li>
                        </Link>
                        <li className="nav-item" onClick={logout} style={{cursor:'pointer'}}>
                            <a className="nav-link text-white " >
                                <div className="text-white text-center me-2 d-flex align-items-center justify-content-center">
                                    <i className="material-icons opacity-10">logout</i>
                                </div>
                                <span className="nav-link-text ms-1" >logout</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </aside>
        </Fragment>
    )
}

export default Sidebar