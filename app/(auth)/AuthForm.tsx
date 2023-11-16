"use client";
import React, { useState } from "react";

const values = {
	email: "",
	password: "",
};

type Props = {
	onSubmit: (email: string, password: string) => void;
	text: string;
};

const AuthForm = ({ onSubmit, text }: Props) => {
	const [formValues, setFormValues] = useState(values);

	const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormValues((preValues) => {
			return { ...preValues, [name]: value };
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onSubmit(formValues.email, formValues.password);
		setFormValues(values);
	};
	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor="email">Email:</label>
			<input
				type="email"
				value={formValues.email}
				name="email"
				id="email"
				onChange={handleOnChange}
			/>

			<label htmlFor="password">Password:</label>
			<input
				type="password"
				value={formValues.password}
				name="password"
				id="password"
				onChange={handleOnChange}
			/>

			<button type="submit" className="btn-primary">
				{text}
			</button>
		</form>
	);
};

export default AuthForm;
