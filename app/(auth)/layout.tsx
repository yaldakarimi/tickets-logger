import Link from "next/link";
import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

type Props = {
	children: React.ReactNode;
};

const AuthLayout = async ({ children }: Props) => {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (data.session) {
		redirect("/");
	}
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
};

export default AuthLayout;
