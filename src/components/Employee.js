function Employee(props) {
	return (
		<div>
			<h3>Employee {props.name}</h3>
			{props.role ? <p>{props.role}</p> : <p>No role assigned</p>}
		</div>
	);
}

export default Employee;
