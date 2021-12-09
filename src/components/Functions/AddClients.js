import React, { Fragment, useState } from 'react'
import Sidebar from '../Layouts/Sidebar'
import axios from 'axios'
import swal from 'sweetalert'
const AddClients = () => {
    const [data, setdata] = useState({ email: '', name: '', Subject: '', message: '', phone: '' })
    const url = "https://mighty-chamber-40377.herokuapp.com/api/query"
    const Registration = (e) => {
        e.preventDefault();
        const contactData = { email: data.email, Subject: data.Subject, message: data.message, name: data.name,phone:data.phone }
        axios.post(url, contactData).then((res) => {
            if (res.status == 200) {
                // console.log(res)S
                swal('Information Submitted Sucessfully')
                setdata({ email: '', name: '', Subject: '', message: '',phone:'' })
            } else {
                console.log('err')
            }
        })
    }
    const onChange = (e) => {
        e.preventDefault();
        setdata({ ...data, [e.target.name]: e.target.value });
    }
    return (
        <Fragment>

            <Sidebar />
            <div className="main-content position-relative max-height-vh-100 h-100 border-radius-lg">
                <div className="container-fluid py-4">
                    <div className="row">
                        <div className="col-12">
                            <div className="card my-4">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-primary shadow-primary border-radius-lg pt-4 pb-3">
                                        <h6 className="text-white text-capitalize ps-3">Add Data</h6>
                                    </div>
                                </div>
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-4" style={{ overflow: 'hidden' }}>
                                        <form style={{ backgroundColor: '' }} onSubmit={Registration}>
                                            <div className="row">
                                                <div className="col ">
                                                    <label style={{fontSize:"20px"}}>Add Name</label>
                                                    <input type="text" className="form-control" placeholder="First name" 
                                                    value={data.name}
                                                    name="name"
                                                    onChange={onChange}
                                                    />
                                                </div>
                                                <div className="col">
                                                    <label style={{fontSize:"20px"}}>email</label>
                                                    <input type="text"
                                                    value={data.email}
                                                    name="email"
                                                    onChange={onChange}
                                                    className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col ">
                                                    <label style={{fontSize:"20px"}}>subject</label>
                                                    <input type="text"
                                                    value={data.Subject}
                                                    onChange={onChange}
                                                    name="Subject"
                                                    className="form-control" placeholder="Subject" />
                                                </div>
                                                <div className="col">
                                                    <label style={{fontSize:"20px"}}>Phone</label>
                                                    <input type="text"
                                                    value={data.phone}
                                                    onChange={onChange}
                                                    name="phone"
                                                    className="form-control" placeholder="Phone" />
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                    <label style={{fontSize:"20px"}}>Message</label>
                                                    <input type="text" 
                                                    name="message"
                                                    value={data.message}
                                                    onChange={onChange}
                                                    className="form-control" placeholder="Message" />
                                                </div>
                                            </div>
                                            <div className="col">
                                                <button className="bg-success ml-5" style={{ borderRadius: "20px" }}>Submit</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </Fragment>
    )
}

export default AddClients