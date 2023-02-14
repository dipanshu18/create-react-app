import "./index.css";
import Employee from "./components/Employee.js";
import { useState } from "react";

function App() {
	const showEmployees = true;
	const [role, setRole] = useState("dev");
	return (
		<div>
			<header className="bg-red-400 text-center py-8">
				<h1>Hello User!</h1>
			</header>
			<section className="text-center py-8 bg-red-300">
				{showEmployees ? (
					<div>
						Enter role: <input
							className="bg-slate-400 rounded-md"
							type="text"
							onChange={(e) => {
								console.log(e.target.value);
								setRole(e.target.value);
							}}
						/>
						<Employee name="Dipanshu" role="newbie" />
						<Employee name="Vrukshali" role={role} />
						<Employee name="Tony" />
					</div>
				) : (
					<h3 className="bg-red-800 text-white py-10 text-center">You don't have access to the Employees.</h3>
				)}
			</section>
		</div>
	);
}

export default App;
