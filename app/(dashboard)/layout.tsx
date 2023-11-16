import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { Navbar } from "../components/common";

type Props = {
	children: React.ReactNode;
};
const DashboardLayout = async ({ children }: Props) => {
	const supabase = createServerComponentClient({ cookies });
	const { data } = await supabase.auth.getSession();

	if (!data.session) {
		redirect("/signin");
	}

	return (
		<>
			<Navbar user={data.session?.user.email} />
			{children}
		</>
	);
};

export default DashboardLayout;
