import React from "react";
import {useState, useEffect} from "react";


function Department(){
    const [departments, setEmployees] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/department")
        .then(res => res.json())
        .then(
            (result) => {
                setEmployees(result)
            }
        );
    });

	return(
		<div>
			<h2>Welcome to Department Component</h2>
			<table>
				<thead>
					<tr>
						<th>Id</th>
						<th>Name</th>
						<th>Revenue</th>
					</tr>
				</thead>
				<tbody>
					{departments.map( dept => (
						<tr key={dept.Id}>
							<td>{dept.Id}</td>
							<td>{dept.Name}</td>
							<td>{dept.Revenue}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}

export default Department;