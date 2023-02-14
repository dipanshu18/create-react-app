import "./index.css";
import Employee from "./components/Employee.js";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function App() {
	const showEmployees = true;
	const [role, setRole] = useState("dev");
	const [employees, setEmployees] = useState([
		{
			name: "Dipanshu",
			role: "Web Dev",
			img: "https://images.pexels.com/photos/1666779/pexels-photo-1666779.jpeg",
		},
		{
			name: "Vrukshali",
			role: "The devops girl",
			img: "https://images.pexels.com/photos/4355346/pexels-photo-4355346.jpeg",
		},
		{
			name: "Tony",
			role: "PHP guy",
			img: "https://images.pexels.com/photos/3748221/pexels-photo-3748221.jpeg",
		},
		{
			name: "Moin",
			role: "Intern",
			img: "https://images.pexels.com/photos/2741701/pexels-photo-2741701.jpeg",
		},
		{
			name: "Kunal",
			role: "DevRel",
			img: "https://images.pexels.com/photos/4640886/pexels-photo-4640886.jpeg",
		},
		{
			name: "Vijay",
			role: "HR",
			img: "https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg",
		},
	]);
	return (
		<div>
			<header className="bg-red-400 text-center py-8">
				<h1>Hello User!</h1>
			</header>
			<section className="text-center py-8 bg-red-300">
				{showEmployees ? (
					<div className="flex flex-wrap justify-center">
						{/* Enter role: <input
							className="bg-slate-400 rounded-md"
							type="text"
							onChange={(e) => {
								console.log(e.target.value);
								setRole(e.target.value);
							}}
						/> */}
						{employees.map((employee) => {
							return (
								<Employee
									key={uuidv4()}
									name={employee.name}
									role={employee.role}
									img={employee.img}
								/>
							);
						})}
					</div>
				) : (
					<h3 className="bg-red-800 text-white py-10 text-center">
						You don't have access to the Employees.
					</h3>
				)}
			</section>
		</div>
	);
}

export default App;
