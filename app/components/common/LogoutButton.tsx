"use client";

import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";

const LogoutButton = () => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState("");
	const handleOnClick = async () => {
		const supabase = createClientComponentClient();
		const { error } = await supabase.auth.signOut();
		if (error) {
			setErrorMessage(error.message);
		} else {
			router.push("/signin");
		}
	};
	return (
		<>
			<button onClick={handleOnClick} className="btn-primary">
				Log out
			</button>
			{!!errorMessage && <div className="error">{errorMessage}</div>}
		</>
	);
};

export default LogoutButton;
