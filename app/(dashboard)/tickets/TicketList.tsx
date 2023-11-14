import Link from "next/link";
import { Ticket } from "../../types";

async function getTickets(): Promise<Ticket[]> {
	const res = await fetch("http://localhost:4000/tickets", {
		next: { revalidate: 0 },
	});
	return await res.json();
}

const TicketList = async () => {
	const tickets = await getTickets();
	return (
		<>
			{!!tickets?.length &&
				tickets.map((ticket) => (
					<Link href={`/tickets/${ticket.id}`} key={ticket.id}>
						<div className="card my-5">
							<h3>{ticket.title}</h3>
							<p>{ticket.body.slice(0, 200)}...</p>
							<div className={`pill ${ticket.priority}`}>
								{ticket.priority} priority
							</div>
						</div>
					</Link>
				))}

			{!tickets ||
				(tickets?.length === 0 && (
					<p className="text-center">There are no open tickets, yay!</p>
				))}
		</>
	);
};

export default TicketList;
