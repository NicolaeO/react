import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {useFormik, Formik, ErrorMessage, Field, Form} from 'formik';
import * as yup from 'yup';
import video from "../src/assets/Abigail.MOV";


/*** Creating an element in React ***/

// const element = React.createElement("h1", null, "Welcome to REACT");
// ReactDOM.render(element, document.getElementById("root"));


// const element = React.createElement("div", {className:"testclass"},
// React.createElement("h1", null, "Welcome to React Programming"),
// React.createElement("h1", null, "Understanding the createion of elements"));
// ReactDOM.render(element, document.getElementById("root"));


// const element = <h1 classNamme="testClass">Welcome to react Programming...</h1>;
// ReactDOM.render(element, document.getElementById("root"));


// const newElement = <h1 classNamme="testClass">Understandig the creation of the elements in React</h1>;
// ReactDOM.render(newElement, document.getElementById("app"));


// const element = (
// 	<div className = "testClass">
// 		<h1>Welcome to first React app</h1>
// 		<h1>Understanding React</h1>
// 	</div>
// );
// ReactDOM.render(element, document.getElementById("root"))


/*** Creat React Components ***/
/** Always start a react component with CAPITAL letters */

// function DisplayEmployeeInfo(employee){
// 	return <div>
// 		<p>
// 			<label>Employee ID: <b>{employee.Id}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Name: <b>{employee.Name}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Location: <b>{employee.Location}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Salary: <b>{employee.Salary}</b></label>
// 		</p>
// 	</div>;
// }
// const element = <DisplayEmployeeInfo Id="101" Name="Nick" Location="Chicago" Salary="1234"></DisplayEmployeeInfo>
// ReactDOM.render(element, document.getElementById("root"));


		// Using a arrow function
// var DisplayEmployeeInfo = (employee) => {
// 	return <div>
// 		<h1>Employee details...</h1>
// 		<p>
// 			<label>Employee ID: <b>{employee.Id}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Name: <b>{employee.Name}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Location: <b>{employee.Location}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Salary: <b>{employee.Salary}</b></label>
// 		</p>
// 	</div>;
// }
// const element = <DisplayEmployeeInfo Id="101" Name="Nick" Location="Chicago" Salary="1234"></DisplayEmployeeInfo>
// ReactDOM.render(element, document.getElementById("root"));


// var DisplayEmployeeInfo = (employee) => {
// 	return <div>
// 		<h1>Employee details...</h1>
// 		<p>
// 			<label>Employee ID: <b>{employee.Id}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Name: <b>{employee.Name}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Location: <b>{employee.Location}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Salary: <b>{employee.Salary}</b></label>
// 		</p>
// 		<Department deptName={employee.deptName} headName={employee.headName}></Departmen>
// 	</div>;
// }
	
// const Department = (deptInfo) => {
// 	return <div>
// 	<p>Dept Name is: <b>{deptInfo.deptName}</b></p>
// 	<p>Dept Head is: <b>{deptInfo.headName}</b></p>
// </div>;
// }

// const element = <DisplayEmployeeInfo Id="101" Name="Nick" Location="Chicago" Salary="1234" deptName="QTST" headName="HERE"></DisplayEmployeeInfo>
// ReactDOM.render(element,document.getElementById("root"));



/***  Creating React Class Component  ***/

// class Employee extends React.Component{
// 	render(){
// 		return <div>
// 			<h2>Employee Details...</h2>
// 			<p><label>Employee ID: <b>{this.props.Id}</b></label></p>
// 			<p><label>Employee ID: <b>{this.props.Name}</b></label></p>
// 			<p><label>Employee ID: <b>{this.props.Location}</b></label></p>
// 			<p><label>Employee ID: <b>{this.props.Salary}</b></label></p>
// 			<Department deptName={this.props.deptName} headName={this.props.headName}></Department>
// 		</div>;
// 	}
// }
// class Department extends React.Component{
// 	render(){
// 		return <div>
// 			<h2>Department Details...</h2>
// 			<p>Dept Name is: <b>{this.props.deptName}</b></p>
// 			<p>Dept Head is: <b>{this.props.headName}</b></p>
// 		</div>;
// 	}
// }

// const element = <Employee Id="101" Name="Nick" Location="Chicago" Salary="1234" deptName="QTST" headName="HERE"></Employee>
// ReactDOM.render(element,document.getElementById("root"));


/** using a constructor */
// class Employee extends React.Component{
// 	constructor(props){
// 		super(props);
// 		console.log(this.props);
// 	}
// 	render(){
// 		return <div>
// 			<h2>Employee Details...</h2>
// 			<p><label>Employee ID: <b>{this.props.Id}</b></label></p>
// 			<p><label>Employee ID: <b>{this.props.Name}</b></label></p>
// 			<p><label>Employee ID: <b>{this.props.Location}</b></label></p>
// 			<p><label>Employee ID: <b>{this.props.Salary}</b></label></p>
// 			<Department deptName={this.props.deptName} headName={this.props.headName}></Department>
// 		</div>;
// 	}
// }
// class Department extends React.Component{
// 	render(){
// 		return <div>
// 			<h2>Department Details...</h2>
// 			<p>Dept Name is: <b>{this.props.deptName}</b></p>
// 			<p>Dept Head is: <b>{this.props.headName}</b></p>
// 		</div>;
// 	}
// }

// const element = <Employee Id="101" Name="Nick" Location="Chicago" Salary="1234" deptName="QTST" headName="HERE"></Employee>
// ReactDOM.render(element,document.getElementById("root"));



/***  Introduction to State in React Components  Lesson 6***/

// class Employee extends React.Component{
// 	state = {counter : 0};
// 	addEmployee = ()=>{
// 		this.setState({counter : this.state.counter + 1});
// 		// alert("Adding a new Employee");
// 		// alert(`button is clicked ${this.counter} times`)
// 	}
// 	render(){
// 		return <div>
// 			<h2>Welcome to Employee Component...</h2>
// 			<p>
// 				<button onClick={this.addEmployee}>Add Employee</button>
// 			</p>
// 			<p>
// 				<label>{this.state.counter}</label>
// 			</p>
// 		</div>;
// 	}
// }
// const element = <Employee></Employee>;
// ReactDOM.render(element, document.getElementById("root"));


// class CountCharacters extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			message:""
// 		};
// 	}

// 	onMessageChange = (message)=>{
// 		this.setState({message:message});
// 	}

// 	render(){
// 		return <div>
// 			<h2>Welcome to Count Characters Component...</h2>
// 			<p>
// 				<label>Enter Message:</label>
// 				<input type="text" onChange={e=>this.onMessageChange(e.target.value)}></input>
// 			</p>
// 			<p>
// 				<label>{this.state.message}</label>
// 			</p>
// 		</div>
// 	}
// }

// const element = <CountCharacters></CountCharacters>
// ReactDOM.render(element, document.getElementById("root"));



/***  Interaction between Components  Lesson 7***/

// class Employee extends React.Component{
// 	constructor(props){
// 		super(props);

// 	}

// 	render(){
// 		return <div>
// 			<h2>Welcome to Employee Component...</h2>
// 			<p>
// 				<label>Id: {this.props.id}</label>
// 			</p>
// 			<p>
// 				<label>Name: {this.props.name}</label>
// 			</p>
// 			<p>
// 				<label>Location: {this.props.location}</label>
// 			</p>
// 			<p>
// 				<label>Salary: {this.props.salary}</label>
// 			</p>
// 			<Salary basic_sarary={this.props.basic_sarary} hra={this.props.hra} special_allowance={this.props.special_allowance}></Salary>
// 		</div>
// 	}
// }

// class Salary extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		return <div>
// 			<h2>Salary Details...</h2>
// 			<p>
// 				<label>Basic Salary: <b>{this.props.basic_sarary}</b></label>
// 			</p>
// 			<p>
// 				<label>HRA: <b>{this.props.hra}</b></label>
// 			</p>
// 			<p>
// 				<label>Special Allowance: <b>{this.props.special_allowance}</b></label>
// 			</p>
// 		</div>
// 	}
// }

// const element = <Employee id="202" name="Nick" location="Chicago" salary="1234" basic_sarary="1234" hra="1234" special_allowance="1234"></Employee>;
// ReactDOM.render(element,  document.getElementById("root"));


	/*** pass data from child component to parent component ***/
// class Employee extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			updatedSalary: null
// 		};
// 	}
// 	getUpdatedSalary = (salary) =>{
// 		this.setState({updatedSalary:salary});
// 	}
// 	render(){
// 		return <div>
// 			<h2>Welcome to Employee Component...</h2>
// 			<p>
// 				<label>Id: {this.props.id}</label>
// 			</p>
// 			<p>
// 				<label>Name: {this.props.name}</label>
// 			</p>
// 			<p>
// 				<label>Location: {this.props.location}</label>
// 			</p>
// 			<p>
// 				<label>Salary: {this.props.salary}</label>
// 			</p>
// 			<p>
// 				<label>Updated Salary: {this.state.updatedSalary}</label>
// 			</p>
// 			<Salary basic_sarary={this.props.basic_sarary} hra={this.props.hra} special_allowance={this.props.special_allowance} onSalaryChange={this.getUpdatedSalary}></Salary>
// 		</div>
// 	}
// }

// class Salary extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			basic_salary: this.props.basic_sarary,
// 			hra: this.props.hra,
// 			special_allowance: this.props.special_allowance
// 		};
// 	}

// 	updateSalary = () => {
// 		let salary = parseInt(this.refs.basic.value) + parseInt(this.refs.hra.value) + parseInt(this.refs.special.value);
// 		this.props.onSalaryChange(salary);
// 	}

// 	render(){
// 		return <div>
// 			<h2>Salary Details...</h2>
// 			<p>
// 				<label>Basic Salary: <input defaultValue={this.props.basic_sarary} ref="basic"></input></label>
// 			</p>
// 			<p>
// 				<label>HRA: <input defaultValue={this.props.hra} ref="hra"></input></label>
// 			</p>
// 			<p>
// 				<label>Special Allowance: <input defaultValue={this.props.special_allowance} ref="special"></input></label>
// 			</p>
// 			<button onClick={this.updateSalary}>Update</button>
// 		</div>
// 	}
// }

// const element = <Employee id="202" name="Nick" location="Chicago" salary="1234" basic_sarary="1234" hra="1234" special_allowance="1234"></Employee>;
// ReactDOM.render(element,  document.getElementById("root"));



/****  React Component communication using context  Lesson 8****/
// const employeeContext = React.createContext();

// class App extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			Id: 101,
// 			Name: "Nicolae",
// 			Location: "Chicago",
// 			Salary: 1234
// 		};
// 	}
// 	changeEmployeeData = () => {
// 		this.setState({Id:202});
// 	}
// 	render(){
// 		return <div>
// 			<h2>Welcome to App Component</h2>
// 			<p>
// 				<label>Employee Id: <b>{this.state.Id}</b></label>
// 			</p>
// 			<p>
// 				<employeeContext.Provider value={this.state}>
// 					<Employee></Employee>
// 				</employeeContext.Provider>
// 			</p>
// 			<button onClick={this.changeEmployeeData}>Update</button>
// 		</div>
// 	}
// }

// class Employee extends React.Component{
// 	static contextType = employeeContext;
// 	render(){
// 		return <div>
// 			<h2>Welcome to Employee Component...</h2>
// 			<p>
// 			<label>Employee ID: <b>{this.context.Name}</b></label>
// 			</p>
// 			<Salary></Salary>
// 		</div>
// 	}
// }

// class Salary extends React.Component{
// 	static contextType = employeeContext;
// 	render(){
// 		return <div>
// 			<h2>Welcome to Salary Component...</h2>
// 			<p>
// 				<label>Employee Salary: <b>{this.context.Salary}</b></label>
// 			</p>
// 		</div>
// 	}
// }

// const element = <App></App>
// ReactDOM.render(element, document.getElementById("root"));



/****  Interaction between React Components   Lesson 9****/ 

/** Transfering data from child component to parent component **/
// const employeeContext = React.createContext({
// 	data:"",
// 	changeEmployeeInfo:()=>{}
// });

// class App extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			data: {
// 				Id: 101,
// 				Name: "Nicolae",
// 				Location: "Chicago",
// 				Salary: 1234
// 			},
// 			changeEmployeeInfo: this.updateEmployeeDetails
// 		};
// 	}
// 	updateEmployeeDetails = () => {
// 		this.setState({data:{Id:202}});
// 	}
// 	render(){
// 		return <div>
// 			<h2>Welcome to App Component</h2>
// 			<p>
// 				<label>Employee Id: <b>{this.state.data.Id}</b></label>
// 			</p>
// 			<p>
// 				<employeeContext.Provider value={this.state}>
// 					<Employee></Employee>
// 				</employeeContext.Provider>
// 			</p>
// 		</div>
// 	}
// }

// class Employee extends React.Component{
// 	static contextType = employeeContext;
// 	render(){
// 		return <div>
// 			<h2>Welcome to Employee Component...</h2>
// 			<p>
// 			<label>Employee ID: <b>{this.context.data.Name}</b></label>
// 			</p>
// 			<button onClick={this.context.changeEmployeeInfo}>Update</button>
// 			<Salary></Salary>
// 		</div>
// 	}
// }

// class Salary extends React.Component{
// 	static contextType = employeeContext;
// 	render(){
// 		return <div>
// 			<h2>Welcome to Salary Component...</h2>
// 			<p>
// 				<label>Employee Salary: <b>{this.context.data.Salary}</b></label>
// 			</p>
// 		</div>
// 	}
// }

// const element = <App></App>
// ReactDOM.render(element, document.getElementById("root"));



/*****  Iterating through lists in react   Lesson 10*****/
// function Employee(props){
// 	return <div style={{border:"3px solid red"}}>
// 		<p>
// 			<label>Employee Id: <b>{props.data.Id}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Name: <b>{props.data.Name}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Location: <b>{props.data.Location}</b></label>
// 		</p>
// 		<p>
// 			<label>Employee Salary: <b>{props.data.Salary}</b></label>
// 		</p>
// 	</div>
// }

// function DisplayEmployees(props){
// 	const empList = props.employeeList;

// 	const listElements = empList.map( (emp) => {
// 		return <Employee key={emp.Id} data={emp}></Employee>
// 	});

// 	return (
// 		<div>
// 			{listElements}
// 		</div>
// 	)
// }

// const employees = [
// 	{Id:101, Name:"Dumitru", Location:"Chicago", Salary:123},
// 	{Id:102, Name:"Dorina", Location:"Chisinau", Salary:123},
// 	{Id:103, Name:"Nicolae", Location:"Chicago", Salary:123}
// ];

// const element = <DisplayEmployees employeeList={employees}></DisplayEmployees>
// ReactDOM.render(element, document.getElementById("root"));




/****  How to call REST API from React   Lesson 11 ****/
// class EmployeeComponent extends React.Component{
// 	constructor(props){
// 		super(props);

// 		this.state = {
// 			employees:[]
// 		};
// 	}

// 	componentDidMount(){
// 		fetch("http://127.0.0.1:5000/").then(res=>res.json()).then(result=>this.setState({employees:result}))
// 	}

// 	render(){
// 		return <div>
// 			<h2>Employee Details...</h2>
// 			<table>
// 				<thead>
// 					<tr>
// 						<th>ID</th>
// 						<th>Name</th>
// 						<th>Location</th>
// 						<th>Salary</th>
// 					</tr>
// 				</thead>
// 				<tbody>
// 					{this.state.employees.map((emp) => {
// 						return (<tr key={emp.Id}>
// 							<td>{emp.Id}</td>
// 							<td>{emp.Name}</td>
// 							<td>{emp.Location}</td>
// 							<td>{emp.Salary}</td>
// 						</tr>)
// 					})}
// 				</tbody>
// 			</table>
// 		</div>
// 	}
// }

// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element, document.getElementById("root"));




/****  How to Send POST Request from React Application to REST API  Lesson 12 ****/
// class EmployeeComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			message:""
// 		};
// 	}

// 	onCreateEmployee = () => {
// 		let empInfo = {
// 			Id: this.refs.Id.value,
// 			Name: this.refs.Name.value,
// 			Location: this.refs.Location.value,
// 			Salary: this.refs.Salary.value
// 		};
// 		console.log(JSON.stringify(empInfo));

// 		fetch("http://localhost:5000/api/user", { 
// 			method: "POST",
// 			headers: {'Content-Type': 'application/json;charset=UTF-8'},
// 			body: JSON.stringify(empInfo)
// 		}).then(r=>r.json()).then(res=>{
// 			if(res){
// 				this.setState({message:"New employee created succesfulley"});
// 			}
// 		});
// 	}

// 	render(){
// 		return <div>
// 			<h2>Please Enter Employee Details...</h2>
// 			<p>
// 				<label>Employee Id: <input type="text" ref="Id"></input></label>
// 			</p>
// 			<p>
// 				<label>Employee Name: <input type="text" ref="Name"></input></label>
// 			</p>
// 			<p>
// 				<label>Employee Location: <input type="text" ref="Location"></input></label>
// 			</p>
// 			<p>
// 				<label>Employee Salary: <input type="text" ref="Salary"></input></label>
// 			</p>
// 				<button onClick={this.onCreateEmployee}>Create</button>
// 			<p>{this.state.message}</p>
// 		</div>
// 	}
// }

// const element = <EmployeeComponent></EmployeeComponent>;
// ReactDOM.render(element, document.getElementById("root"));



/****  How to build forms in react   Lesson 13 ****/
// class EmployeeComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			employee :{
// 				Id: "",
// 				Name: "",
// 				Location: "",
// 				Salary: "",
// 			}
// 		};
// 	}

// 	changeHandler = (e) => {
// 		const name = e.target.name;
// 		const value = e.target.value;
// 		this.setState({employee:{
// 			...this.state.employee,
// 			[name]:value
// 		}});
// 	}

// 	onCreateEmployee = () =>{
// 		console.log(this.state.employee);
// 	}

// 	render(){
// 		return <div>
// 			<h2>New Employee Form...</h2>
// 			<form>
// 				<p>
// 					<label>Employee Id: <input type="text" name="Id" value={this.state.employee.Id} onChange={this.changeHandler}></input></label>
// 				</p>
// 				<p>
// 					<label>Employee Name: <input type="text" name="Name" value={this.state.employee.Name} onChange={this.changeHandler}></input></label>
// 				</p>
// 				<p>
// 					<label>Employee Location: <input type="text" name="Location" value={this.state.employee.Location} onChange={this.changeHandler}></input></label>
// 				</p>
// 				<p>
// 					<label>Employee Salary: <input type="text" name="Salary" value={this.state.employee.Salary} onChange={this.changeHandler}></input></label>
// 				</p>
// 			</form>
// 			<button onClick={this.onCreateEmployee}>Create</button>
// 		</div>
// 	}
// }

// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element, document.getElementById("root"));


/****  CONTINUE LESSON 13 using Formik library to validate inputs */
//to import formik : import {useFormik} from 'formik';
// const EmployeeComponent = () => {
// 	const formik = useFormik({
// 		initialValues: {
// 			Id: "",
// 			Name: "",
// 			Location: "",
// 			Salary: ""
// 		},
// 		onSubmit: values =>{
// 			alert(JSON.stringify(values));
// 		}
// 	});

// 	return (
// 		<div>
// 			<h2>New Employee Form...</h2>
// 			<form onSubmit={formik.handleSubmit}>
// 				<p>
// 					<label htmlFor="Id">Employee Id:</label>
// 					<input type="text" name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Name">Employee Name:</label>
// 					<input type="text" name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Location">Employee Location:</label>
// 					<input type="text" name="Location" id="Location" value={formik.values.Location} onChange={formik.handleChange}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Salary">Employee Salary:</label>
// 					<input type="text" name="Salary" id="Salary" value={formik.values.Salary} onChange={formik.handleChange}></input>
// 				</p>
// 				<button type="submit">Create</button>
// 			</form>
// 		</div>
// 	)
// }

// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element, document.getElementById("root"));



/**** How to validate Forms in React  Lesson 14 --CONTINUE LESSON 13-- using Formik library to validate inputs */
// const ValidateEmployee = empData => {
// 	const errors = {};

// 	if(!empData.Name){
// 		errors.Name = "Please enter employee name";
// 	}
// 	else if(!empData.Name.length > 20){
// 		errors.Name = "Employee name should not exceed 20 characters";
// 	}
// 	if(!empData.Location){
// 		errors.Location = "Please enter employee location";
// 	}
// 	if(!empData.Email){
// 		errors.Email = "Please enter employee email";
// 	}
// 	else if(!/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/i.test(empData.Email)){
// 		errors.Email = "Invalid email address";
// 	}
// 	return errors;
// }

// const EmployeeComponent = () => {
// 	const formik = useFormik({
// 		initialValues: {
// 			Id: "",
// 			Name: "",
// 			Location: "",
// 			Salary: "",
// 			Email: ""
// 		},
// 		validate: ValidateEmployee,
// 		onSubmit: values =>{
// 			alert(JSON.stringify(values));
// 		}
// 	});

// 	return (
// 		<div>
// 			<h2>New Employee Form...</h2>
// 			<form onSubmit={formik.handleSubmit}>
// 				<p>
// 					<label htmlFor="Id">Employee Id:</label>
// 					<input type="text" name="Id" id="Id" value={formik.values.Id} onChange={formik.handleChange}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Name">Employee Name:</label>
// 					<input type="text" name="Name" id="Name" value={formik.values.Name} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
// 					{formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
// 				</p>
// 				<p>
// 					<label htmlFor="Location">Employee Location:</label>
// 					<input type="text" name="Location" id="Location" value={formik.values.Location} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
// 					{formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> : null}
// 				</p>
// 				<p>
// 					<label htmlFor="Salary">Employee Salary:</label>
// 					<input type="text" name="Salary" id="Salary" value={formik.values.Salary} onChange={formik.handleChange}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Email">Employee Email:</label>
// 					<input type="text" name="Email" id="Email" value={formik.values.Email} onChange={formik.handleChange} onBlur={formik.handleBlur}></input>
// 					{formik.touched.Email && formik.errors.Email ? <span style={{color:'red'}}>{formik.errors.Email}</span> : null}
// 				</p>
// 				<button type="submit">Create</button>
// 			</form>
// 		</div>
// 	)
// }

// const element = <EmployeeComponent></EmployeeComponent>
//  ReactDOM.render(element, document.getElementById("root"));



/*** Validation using YUP library  ***/
// to import yup library: import * as yup from 'yup';
// const EmployeeComponent = () => {
// 	const formik = useFormik({
// 		initialValues: {
// 			Id: "",
// 			Name: "",
// 			Location: "",
// 			Salary: "",
// 			Email: ""
// 		},
// 		validationSchema: yup.object({
// 			Name: yup.string().max(20, 'Name should not exceed 20 chars').required("Please Enter Employee Name"),
// 			Location: yup.string().required("Please Enter Employee Location"),
// 			Email: yup.string().email("Invalid email address").required("Please Enter Employee Name"),
// 		}),
// 		onSubmit: values =>{
// 			alert(JSON.stringify(values));
// 		}
// 	});

// 	return (
// 		<div>
// 			<h2>New Employee Form...</h2>
// 			<form onSubmit={formik.handleSubmit}>
// 				<p>
// 					<label htmlFor="Id">Employee Id:</label>
// 					<input name="Id" {...formik.getFieldProps("Id")}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Name">Employee Name:</label>
// 					<input name="Name" {...formik.getFieldProps("Name")}></input>
// 					{formik.touched.Name && formik.errors.Name ? <span style={{color:'red'}}>{formik.errors.Name}</span> : null}
// 				</p>
// 				<p>
// 					<label htmlFor="Location">Employee Location:</label>
// 					<input name="Location" {...formik.getFieldProps("Location")}></input>
// 					{formik.touched.Location && formik.errors.Location ? <span style={{color:'red'}}>{formik.errors.Location}</span> : null}
// 				</p>
// 				<p>
// 					<label htmlFor="Salary">Employee Salary:</label>
// 					<input name="Salary" {...formik.getFieldProps("Salary")} onChange={formik.handleChange}></input>
// 				</p>
// 				<p>
// 					<label htmlFor="Email">Employee Email:</label>
// 					<input name="Email" {...formik.getFieldProps("Email")}></input>
// 					{formik.touched.Email && formik.errors.Email ? <span style={{color:'red'}}>{formik.errors.Email}</span> : null}
// 				</p>
// 				<button type="submit">Create</button>
// 			</form>
// 		</div>
// 	)
// }

// const element = <EmployeeComponent></EmployeeComponent>
//  ReactDOM.render(element, document.getElementById("root"));



/***  Understanding Forms in React  Lesson 15 ***/
// Cleaning up code with formik
// const EmployeeComponent = () => {
// 	return (
// 		<Formik initialValues={{
// 			Id: "",
// 			Name: "",
// 			Location: "",
// 			Salary: "",
// 			Email: "",
// 			Designation: ""
// 		}} validationSchema={yup.object({
// 			Name: yup.string().max(20, 'Name should not exceed 20 chars').required("Please Enter Employee Name"),
// 			Location: yup.string().required("Please Enter Employee Location"),
// 			Email: yup.string().email("Invalid email address").required("Please Enter Employee Name")
// 		})}
// 		onSubmit={values =>{
// 			alert(JSON.stringify(values));
// 		}}>
// 			{
// 				props =>(
// 					<div>
// 						<h2>New Employee Form...</h2>
// 						<Form>
// 							<p>
// 								<label htmlFor="Id">Employee Id:</label>
// 								<Field name="Id" type="text"></Field>
// 							</p>
// 							<p>
// 								<label htmlFor="Name">Employee Name:</label>
// 								<Field name="Name" type="text"></Field>
// 								<ErrorMessage name="Name"></ErrorMessage>
// 							</p>
// 							<p>
// 								<label htmlFor="Location">Employee Location:</label>
// 								<Field name="Location" type="text"></Field>
// 								<ErrorMessage name="Location"></ErrorMessage>
// 							</p>
// 							<p>
// 								<label htmlFor="Salary">Employee Salary:</label>
// 								<Field name="Salary" type="text"></Field>
// 							</p>
// 							<p>
// 								<label htmlFor="Email">Employee Email:</label>
// 								<Field name="Email" type="text"></Field>
// 								<ErrorMessage name="Email"></ErrorMessage>
// 							</p>
// 							<p>
// 								<label htmlFor="Designation">Employee Designation:</label>
// 								<Field name="Designation" as="select">
// 									<option value="SoftwareEngineer">Software Engineer</option>
// 									<option value="SeniorSoftwareEngineer">Senior Software Engineer</option>
// 									<option value="Lead">Lead</option>
// 								</Field>
// 							</p>
// 							<button type="submit" disabled={!props.isValid}>Create</button>
// 						</Form>
// 					</div>
// 				)
// 			}
// 		</Formik>
// 	);
// }

// const element = <EmployeeComponent></EmployeeComponent>
// ReactDOM.render(element, document.getElementById("root"));




/***  Lifting State Up in React   Lesson 16 ***/
// class OrderComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			quantity:"",
// 			address:""
// 		};
// 	}

// 	orderInfoChanged = (val) => {
// 		this.setState({quantity: val});
// 	}

// 	addressChanged = (val) => {
// 		this.setState({address: val});
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h1>Product Order Screen...</h1>
// 				<ProductInformationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductInformationComponent>
// 				<AddressComponent address={this.state.address} onAddressChange={this.addressChanged}></AddressComponent>
// 				<SummaryComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged} address={this.state.address}></SummaryComponent>
// 			</div>
// 		);
// 	}
// }

// class ProductInformationComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	handleChange = (e) =>{
// 		this.props.onQuantityChange(e.target.value)
// 	}

// 	render(){
// 		return(
// 			<div style={{border:"3px solid red"}}>
// 				<h2>Product Information...</h2>
// 				<p>
// 					<label>Product Name:</label>
// 					<select>
// 						<option value="Product-1">Product-1</option>
// 						<option value="Product-2">Product-2</option>
// 						<option value="Product-3">Product-3</option>
// 						<option value="Product-4">Product-4</option>
// 					</select>
// 				</p>
// 				<p>
// 					<label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
// 				</p>
// 			</div>
// 		);
// 	}
// }

// class AddressComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	handleChange = (e) => {
// 		this.props.onAddressChange(e.target.value);
// 	}

// 	render(){
// 		return(
// 			<div style={{border:"3px solid red"}}>
// 				<h2>Adderss information...</h2>
// 				<p>
// 					<lable>Address:</lable>
// 					<textarea value={this.props.address} onChange={this.handleChange}></textarea>
// 				</p>
// 			</div>
// 		);
// 	}
// }

// class SummaryComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	handleChange = (e) =>{
// 		this.props.onQuantityChange(e.target.value);
// 	}

// 	render(){
// 		return(
// 			<div style={{border:"3px solid red"}}>
// 				<h2>Summary Information...</h2>
// 				<p>
// 					<label>Product Name</label>

// 				</p>
// 				<p>
// 					<label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
// 				</p>
// 				<p>
// 					<lable>Address:</lable>
// 					<b>{this.props.address}</b>
// 				</p>
// 				<button>Place Order</button>
// 			</div>
// 		);
// 	}
// }

// const element = <OrderComponent></OrderComponent>
// ReactDOM.render(element, document.getElementById("root"));




/***  Error Boundaries in React   Lesson 17 ***/
// class CustomErrorBoundary extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			hasError: false
// 		};
// 	}
	
// 	static getDerivedStateFromError(error) {
// 		return { hasError: true };
// 	}

// 	componentDidCatch(error, errorInfo) {
// 		console.log(error);
// 		console.log(errorInfo);
// 	}

// 	render(){
// 		if (this.state.hasError){
// 			return <h2>We are having Problems to Load your Preferrences now.</h2>;
// 		}
// 		return this.props.children;
// 	}
// }

// class OrderComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.state = {
// 			quantity:"",
// 			address:""
// 		};
// 	}

// 	orderInfoChanged = (val) => {
// 		this.setState({quantity: val});
// 	}

// 	addressChanged = (val) => {
// 		this.setState({address: val});
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h1>Product Order Screen...</h1>
// 				<ProductInformationComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged}></ProductInformationComponent>
// 				<AddressComponent address={this.state.address} onAddressChange={this.addressChanged}></AddressComponent>
// 				<SummaryComponent quantity={this.state.quantity} onQuantityChange={this.orderInfoChanged} address={this.state.address}></SummaryComponent>
// 			</div>
// 		);
// 	}
// }

// class ProductInformationComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	handleChange = (e) =>{
// 		this.props.onQuantityChange(e.target.value)
// 	}

// 	render(){
// 		return(
// 			<div style={{border:"3px solid red"}}>
// 				<h2>Product Information...</h2>
// 				<p>
// 					<label>Product Name:</label>
// 					<select>
// 						<option value="Product-1">Product-1</option>
// 						<option value="Product-2">Product-2</option>
// 						<option value="Product-3">Product-3</option>
// 						<option value="Product-4">Product-4</option>
// 					</select>
// 				</p>
// 				<p>
// 					<label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
// 				</p>
// 			</div>
// 		);
// 	}
// }

// class AddressComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	handleChange = (e) => {
// 		this.props.onAddressChange(e.target.value);
// 	}

// 	render(){
// 		return(
// 			<div style={{border:"3px solid red"}}>
// 				<h2>Adderss information...</h2>
// 				<p>
// 					<lable>Address:</lable>
// 					<textarea value={this.props.address} onChange={this.handleChange}></textarea>
// 				</p>
// 				<CustomErrorBoundary>
// 					<UserPreferredAddressList></UserPreferredAddressList>
// 				</CustomErrorBoundary>
// 			</div>
// 		);
// 	}
// }

// class UserPreferredAddressList extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	render(){
// 		throw new Error("Not able to load address list");
// 		return(
// 			<div>
// 				<h2>Your Existing Addresses...</h2>
// 				<p>
// 					Office<br></br>
// 					Home<br></br>
// 				</p>
// 			</div>
// 		);
// 	}
// }

// class SummaryComponent extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	handleChange = (e) =>{
// 		this.props.onQuantityChange(e.target.value);
// 	}

// 	render(){
// 		return(
// 			<div style={{border:"3px solid red"}}>
// 				<h2>Summary Information...</h2>
// 				<p>
// 					<label>Product Name</label>

// 				</p>
// 				<p>
// 					<label>Enter Quantity: <input type="text" value={this.props.quantity} onChange={this.handleChange}></input></label>
// 				</p>
// 				<p>
// 					<lable>Address:</lable>
// 					<b>{this.props.address}</b>
// 				</p>
// 				<button>Place Order</button>
// 			</div>
// 		);
// 	}
// }

// const element = <OrderComponent></OrderComponent>
// ReactDOM.render(element, document.getElementById("root"));




/***  Fragments in React  Lesson 18 ***/
// If we want to return multiple containers from a react component react will throw an error so
// in order to avoid that React introduced FRAGMENTS: <React.Fragment> <!-- Here we can place multiple div containers to be returned --></React.Fragment> or React EMPTY tags: <></>



/****  Refs in React  Lesson 19 ****/
// class QuantityIncrement extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.quantityRef = React.createRef();
// 	}

// 	incrementQuantity = () => {
// 		this.quantityRef.current.value++;
// 	}

// 	render(){
// 		return <div>
// 			<p>
// 				<label>Enter quantity</label>
// 				<input type="text" ref={this.quantityRef}></input>
// 				<button onClick={this.incrementQuantity}>+</button>
// 			</p>
// 		</div>
// 	}
// }

// class LogIn extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.userNameRef = React.createRef();
// 	}

// 	componentDidMount(){
// 		this.userNameRef.current.focus();
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h2>Login Screen...</h2>
// 				<p>
// 					<label>User Name:</label>
// 					<input type="text" ref={this.userNameRef}></input>
// 				</p>
// 				<p>
// 					<label>User Password:</label>
// 					<input type="text"></input>
// 				</p>
// 				<button>LogIn</button>
// 			</div>
// 		);
// 	}
// }


// class VideoPlayer extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.videoRef = React.createRef();
// 	}

// 	playVideo = () => {
// 		this.videoRef.current.play();
// 	}
// 	pauseVideo = () => {
// 		this.videoRef.current.pause();
// 	}
// 	render(){
// 		return(
// 			<div>
// 				<video ref={this.videoRef} width="300" height="200" controls>
// 					<source src={video} type="video/mp4"></source>
// 				</video>
// 				<div>
// 					<button onClick={this.playVideo}>Play</button>
// 					<button onClick={this.pauseVideo}>Pause</button>
// 				</div>
// 			</div>
// 		)
// 	}
// }

// // only one component at a time
// const element = <QuantityIncrement></QuantityIncrement>
// const element = <LogIn></LogIn>
// const element = <VideoPlayer></VideoPlayer>
// ReactDOM.render(element, document.getElementById("root"));




/****  Refs in React Continued  Lesson 20 ****/
// const DemoComponent = React.forwardRef((props, ref) => {
// 	function testClick(){
// 		ref.current.focus();
// 	}
// 	return(
// 		<button onClick={testClick}>Focus!</button>
// 	)
// });

// class Elevator extends React.Component{
// 	constructor(props){
// 		super(props);
// 		this.elevatorRef = React.createRef();
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h2>welcome to Elevator ordering Screen...</h2>
// 				<p>
// 					<label>Elevator Name:</label>
// 					<input ref={this.elevatorRef} type="text"></input>
// 				</p>
// 				<p>
// 					<label>Elevator Speed:</label>
// 					<input type="text"></input>
// 				</p>
// 				<p>
// 					<label>Elevator Load:</label>
// 					<input type="text"></input>
// 				</p>
// 				<Summary innerRef={this.elevatorRef}></Summary>
// 				<DemoComponent ref={this.elevatorRef}></DemoComponent>
// 			</div>
// 		);
// 	}
// }

// class Summary extends React.Component{
// 	constructor(props){
// 		super(props);
// 	}

// 	focusInput = () => {
// 		this.props.innerRef.current.focus();
// 	}

// 	render(){
// 		return(
// 			<div>
// 				<h2>Summary Details...</h2>
// 				<p onClick={this.focusInput}>
// 					<label>Elevator Name: <b>Name - 1</b></label>
// 				</p>
// 				<p>
// 					<label>Elevator Speed: <b>10 m/s</b></label>
// 				</p>
// 				<p>
// 					<label>Elevator Load: <b>550 Kg</b></label>
// 				</p>
// 			</div>
// 		);
// 	}
// }

// function testComponent(){
// 	let testRef = null;
// 	function handleClick(){
// 		testRef.focus()
// 	}

// 	return(
// 		<div>
// 			<input type="text" ref={e=>testRef=e} />
// 			<input type="button" value="Focus the text input" onClick={handleClick} />
// 		</div>
// 	)
// }

// const element = <Elevator></Elevator>
// // const element = testComponent();
// ReactDOM.render(element, document.getElementById("root"));




/****  Higher Order Components in React  Lesson 21 ****/
