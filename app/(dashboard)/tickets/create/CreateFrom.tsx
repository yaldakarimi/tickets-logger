"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateFrom = () => {
	const router = useRouter();
	const values = {
		title: "",
		body: "",
		priority: "low",
	};

	const [formValues, setFormValues] = useState(values);
	const [isLoading, setIsLoading] = useState(false);
	const handleOnChange = (
		e: React.ChangeEvent<
			HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
		>
	) => {
		const { name, value } = e.target;
		setFormValues((prevValue) => {
			return { ...prevValue, [name]: value };
		});
	};

	const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsLoading(true);
		const newTicket = {
			title: formValues.title,
			body: formValues.body,
			priority: formValues.priority,
			user_email: "test@gamil.com",
		};

		const res = await fetch("http://localhost:4000/tickets", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newTicket),
		});

		setIsLoading(false);

		if (res.status === 201) {
			router.refresh();
			router.push("/tickets");
		}
	};

	return (
		<form className="w-full" onSubmit={handleFormSubmit}>
			<label htmlFor="title">Title:</label>
			<input
				required
				type="text"
				name="title"
				id="title"
				value={formValues.title}
				onChange={handleOnChange}
			/>

			<label htmlFor="body">Body:</label>
			<textarea
				required
				name="body"
				id="body"
				value={formValues.body}
				onChange={handleOnChange}
			/>

			<label htmlFor="priority">Priority:</label>
			<select
				name="priority"
				id="priority"
				value={formValues.priority}
				onChange={handleOnChange}
			>
				<option value="low">Low Priority</option>
				<option value="medium">Medium Priority</option>
				<option value="high">High Priority</option>
			</select>
			<button className="btn-primary" disabled={isLoading} type="submit">
				{isLoading ? "Adding..." : "Add Ticket"}
			</button>
		</form>
	);
};

export default CreateFrom;
