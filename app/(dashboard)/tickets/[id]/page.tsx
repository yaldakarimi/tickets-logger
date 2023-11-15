import { Loading } from "@/app/components/common";
import { Ticket } from "@/app/types";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { Metadata, ResolvingMetadata } from "next";

type TicketId = {
	id: string;
};

type MetadataProps = {
	params: { id: string };
};

export async function generateMetadata({
	params,
}: MetadataProps): Promise<Metadata> {
	const res = await fetch(`http://localhost:4000/tickets/${params.id}`);
	const ticket = await res.json();

	return {
		title: ticket.title,
	};
}

export async function generateStaticParams(): Promise<TicketId[]> {
	const res = await fetch("http://localhost:4000/tickets");
	const tickets = await res.json();
	return tickets.map((ticket: Ticket) => ({
		id: ticket.id,
	}));
}

async function getTicket(id: string): Promise<Ticket> {
	const res = await fetch(`http://localhost:4000/tickets/${id}`, {
		next: { revalidate: 30 },
	});

	if (!res.ok) {
		notFound();
	}
	return await res.json();
}

type Props = {
	params: {
		id: string;
	};
};

const Ticket = async ({ params }: Props) => {
	const ticket = await getTicket(params.id);

	return (
		<>
			{ticket && (
				<main>
					<nav>
						<h2>Ticket Details</h2>
					</nav>
					<Suspense fallback={<Loading />}>
						<div className="card">
							<h3>{ticket.title}</h3>
							<small>Created by {ticket.user_email}</small>
							<p>{ticket.body}</p>
							<div className={`pill ${ticket.priority}`}>
								{ticket.priority} priority
							</div>
						</div>
					</Suspense>
				</main>
			)}
		</>
	);
};

export default Ticket;
