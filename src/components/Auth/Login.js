import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";



const Login = () => {
    const authUrl = "https://mighty-chamber-40377.herokuapp.com/api/login"
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // useEffect(() => {
    //     if (localStorage.getItem('user-info')) {

    //     }
    // }, [])

    const handleSubmit = async () => {
        // let item = { email, password }
        // const res =  await axios.post(url)
        const result = await fetch(authUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email,
                password
            })
        }).then((res) => res.json())
        if (result.message == 'user Authenicated') {
            // everythign went fine
            console.log('Got the token:', result.token);
            localStorage.setItem('token', result.token);
            history.push('/home')
            alert('Success')
        } else {
            alert(result.error)
        }
    }
    return (
        <Fragment>
            <div className="bg-gray-200">
                <div>

                    <main className="main-content  mt-0">
                        <div className="page-header align-items-start min-vh-100" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497294815431-9365093b7331?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80")' }}>
                            <span className="mask bg-gradient-dark opacity-6" />
                            <div className="container my-auto">
                                <div className="row">
                                    <div className="col-lg-4 col-md-8 col-12 mx-auto">
                                        <div className="card z-index-0 fadeIn3 fadeInBottom">
                                            <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                                <div className="bg-gradient-info shadow-primary border-radius-lg py-3 pe-1">
                                                    <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Sign in</h4>
                                                    <div className="row mt-3">
                                                        <div className="col-2 text-center ms-auto">
                                                            <a className="btn btn-link px-3" href="javascript:;">
                                                                <i className="fa fa-facebook text-white text-lg" />
                                                            </a>
                                                        </div>
                                                        <div className="col-2 text-center px-1">
                                                            <a className="btn btn-link px-3" href="javascript:;">
                                                                <i className="fa fa-github text-white text-lg" />
                                                            </a>
                                                        </div>
                                                        <div className="col-2 text-center me-auto">
                                                            <a className="btn btn-link px-3" href="javascript:;">
                                                                <i className="fa fa-google text-white text-lg" />
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-body">
                                                <form role="form" className="text-start">
                                                    <div className="input-group input-group-outline my-3">
                                                        <label className="form-label">Email</label>
                                                        <input type="email" className="form-control" value={email}
                                                            onChange={(e) => setEmail(e.target.value)} />
                                                    </div>
                                                    <div className="input-group input-group-outline mb-3">
                                                        <label className="form-label">Password</label>
                                                        <input type="password" className="form-control" value={password}
                                                            onChange={(e) => setPassword(e.target.value)} />
                                                    </div>

                                                    <div className="text-center">
                                                        <button type="button"
                                                            onClick={handleSubmit}
                                                            className="btn bg-gradient-success w-100 my-4 mb-2">Sign in</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </main></div>

            </div>
        </Fragment>
    )
}

export default Login