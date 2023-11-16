"use client";
import React, { useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import AuthForm from "../AuthForm";

const SignIn = () => {
	const router = useRouter();
	const [errorMessage, setErrorMessage] = useState("");
	const handleSignIn = async (email: string, password: string) => {
		const supabase = createClientComponentClient();

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		});

		if (error) {
			setErrorMessage(error.message);
		} else {
			router.push("/");
		}
	};
	return (
		<main>
			<h2 className="text-center">Sign in</h2>
			<AuthForm onSubmit={handleSignIn} text='Sign in'/>
			{errorMessage && <div className="error">{errorMessage}</div>}
		</main>
	);
};

export default SignIn;
