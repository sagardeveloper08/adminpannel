import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../Layouts/Sidebar";
import ReactPaginate from "react-paginate";


const GetData = () => {
    const url = `http://mighty-chamber-40377.herokuapp.com/api/get/page=2&limit=2`
    const [items, setItems] = useState([]);
    const [pageCount, setpageCount] = useState(0);
    const [input, setInput] = useState('')
    const [search1, setSearch] = useState('')
    // const [searchResult, setSearchResult] = useState([])
    let limit = 5;

    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(
                `http://mighty-chamber-40377.herokuapp.com/api/get?page=1&limit=${limit}`
                // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
            );
            const data = await res.json();
            console.log(data.contactUser, 'data')
            const total = res.headers.get("x-total-count");
            setpageCount(Math.ceil(total / limit));
            // console.log(Math.ceil(total/12));
            setItems(data.contactUser);
        };
        getComments();
    }, [limit]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://mighty-chamber-40377.herokuapp.com/api/get?page=${currentPage}&limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        )
        const data = await res.json();
        console.log(data, 'fetc')
        setItems(data.contactUser)
        return setItems
    };

    const handlePageClick = async (data) => {
        console.log(data.selected);

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setItems(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
    };


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
                                        <h6 className="text-white text-capitalize ps-3">Client</h6>
                                    </div>
                                </div>
                                <br />
                                <input type="search" placeholder="search" onChange={(e) => { setSearch(e.target.value) }} value={search1} name="search1" />
                                <div className="card-body px-0 pb-2">
                                    <div className="table-responsive p-0">
                                        <table className="table align-items-center mb-0">
                                            <thead>
                                                {/* <Search/> */}


                                                <tr>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">Name</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">email</th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">Subject
                                                    </th>
                                                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2">
                                                        Actions</th>
                                                </tr>
                                            </thead>
                                            <tbody >
                                                {items && items.filter(item => {
                                                    if (search1 == "") {
                                                        return item
                                                    } else if (item.name.toLowerCase().includes(search1.toLowerCase())) {
                                                        return item
                                                    }
                                                }).map(item => (
                                                    <tr>
                                                        <td>
                                                            <div className="d-flex px-2 py-1">
                                                                <div className="d-flex flex-column justify-content-center">
                                                                    <h6 className="mb-0 text-sm">{item.name}</h6>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            <p className="text-xs font-weight-bold mb-0">{item.email}</p>

                                                        </td>
                                                        <td>
                                                            <p className="text-xs font-weight-bold mb-0">{item.Subject}</p>
                                                        </td>
                                                        <td>
                                                            <i className="material-icons opacity-10">edit</i>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                        <ReactPaginate
                                            previousLabel={'previous'}
                                            breakLabel={'...'}
                                            pageCount={3}
                                            nextLabel={'next'}
                                            onPageChange={handlePageClick} containerClassName={"pagination justify-content-center"}
                                            pageClassName={"page-item"}
                                            pageLinkClassName={"page-link"}
                                            previousClassName={"page-item"}
                                            previousLinkClassName={"page-link"}
                                            nextClassName={"page-item"}
                                            nextLinkClassName={"page-link"}
                                            breakClassName={"page-item"}
                                            breakLinkClassName={"page-link"}
                                            activeClassName={"active"}
                                        />
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

export default GetData