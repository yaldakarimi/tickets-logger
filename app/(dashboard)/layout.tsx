import React from "react";
import { Navbar } from "../components/common";

type Props = {
	children: React.ReactNode;
};
const DashboardLayout = ({ children }: Props) => {
	return (
		<>
			<Navbar />
			{children}
		</>
	);
};

export default DashboardLayout;
