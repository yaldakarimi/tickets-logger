import Link from "next/link";

type Props = {
	children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
	return (
		<>
			<nav>
				<h1>Dojo Helpdesk</h1>
				<Link href="/signup">Sign up</Link>
				<Link href="/signin">Sign in</Link>
			</nav>
			{children}
		</>
	);
}
