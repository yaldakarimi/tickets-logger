import { NextResponse } from "next/server";

type Params = { params: { id: string } };

export async function GET(_request: Request, { params }: Params) {
	const id = params.id;
	const res = await fetch(`http://localhost:4000/tickets/${id}`);
	const ticket = await res.json();

	if (!res.ok) {
		return NextResponse.json(
			{ error: "Ticket cannot be found" },
			{ status: 404 }
		);
	}

	return NextResponse.json(ticket, { status: 200 });
}
