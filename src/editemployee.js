import React from "react";
import {useState, useEffect} from "react";


function EditEmployee(props){
    const [employee, setEmployee] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/api/userid?id=${props.match.params.id}`)
        .then(res => res.json())
        .then(
            (result) => {
                setEmployee(result);
            }
        )
    }, {});


    function changeEmployeeData(e){

    }

    return(
        <div>
            <p>
                <label>Name</label>
                <input value={employee.name} onChange={changeEmployeeData}></input>
            </p>
            <p>
                <label>Location</label>
                <input value={employee.location} onChange={changeEmployeeData}></input>
            </p>
            <p>
                <label>Salary</label>
                <input value={employee.salary} onChange={changeEmployeeData}></input>
            </p>
        </div>
    );
}

export default EditEmployee;