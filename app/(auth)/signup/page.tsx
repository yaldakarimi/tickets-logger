"use client";

import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";

const SignUp = () => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState("");
	const handleSignUp = async (email: string, password: string) => {
		const supabase = createClientComponentClient();

		const { error } = await supabase.auth.signUp({
			email,
			password,
			options: {
				emailRedirectTo: `${location.origin}/api/auth/callback`,
			},
		});

		if (error) {
			setErrorMessage(error.message);
		} else {
			router.push("/verify");
		}
	};
	return (
		<main>
			<h2 className="text-center">Sign up</h2>
			<AuthForm onSubmit={handleSignUp} text="Sign up" />
			{errorMessage && <div className="error">{errorMessage}</div>}
		</main>
	);
};

export default SignUp;
