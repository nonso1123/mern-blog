import React, { useState } from "react";
import Login from "../components/Login";
import CreateUser from "../components/CreateUser";
import { Button } from "@/components/ui/button";

const Landing = () => {
	const [view, setView] = useState(0);

	return (
		<div className="flex justify-center items-center w-screen h-screen">
			{!view ? (
				<div className="flex flex-col w-96">
					<Login />
					<Button onClick={() => setView(!view)}>Create an Account</Button>
				</div>
			) : (
				<div className="flex flex-col w-96">
					<CreateUser setView={setView} view={view} />
					<Button onClick={() => setView(!view)}>Login existing Account</Button>
				</div>
			)}
		</div>
	);
};

export default Landing;
