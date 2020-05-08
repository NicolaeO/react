import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

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



/***  Introduction to State in React Components  ***/

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



/***  Interaction between Components  ***/

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


