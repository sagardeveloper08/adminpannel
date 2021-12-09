import React, { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import { useHistory } from "react-router-dom";


const Protected = (props) => {
    let Cmp = props.Cmp
    const history = useHistory();
    useEffect(() => {
       const localStorageItems = localStorage.getItem('token')
        console.log(localStorageItems)
        if (!localStorage.getItem('token')) {
            history.push('/')
        }
    }, [])
    return (
        <>
            <Cmp />
        </>
    )
}

export default Protected