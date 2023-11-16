import React from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/dojo-logo.png";
import LogoutButton from "./LogoutButton";

type Props = {
	user: string | undefined;
};
const Navbar = ({ user }: Props) => {
	return (
		<nav className="flex justify-between items-end">
			<div className="flex items-end gap-2 justify-center">
				<Image
					src={Logo}
					alt="logo"
					width={70}
					quality={100}
					placeholder="blur"
				/>

				<Link href="/">Dashboard</Link>
				<Link href="/tickets">Tickets</Link>
			</div>
			<div className="flex items-center gap-2">
				{user && <span>Hello, {user}</span>}
				<LogoutButton />
			</div>
		</nav>
	);
};

export default Navbar;
