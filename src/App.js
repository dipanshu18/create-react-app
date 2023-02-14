import "./App.css";
import Employee from "./components/Employee.js";

function App() {
	const showEmployees = true;
	return (
		<div className="App">
			<header className="App-header">
				<h1>Hello User!</h1>
			</header>
			<section>
				{console.log("Inside the return")}
				{showEmployees ? (
					<div>
						<Employee />
						<Employee />
						<Employee />
						<Employee />
						<Employee />
						<Employee />
					</div>
				) : (
					<h3>You don't have access to the Employees.</h3>
				)}
			</section>
		</div>
	);
}

export default App;
