import { Suspense } from "react";
import TicketList from "./TicketList";
import { Loading } from "../../components/common";
import Link from "next/link";

export default function Tickets() {
	return (
		<main>
			<nav>
				<div>
					<h2>Tickets</h2>
					<p>
						<small>Currently open tickets.</small>
					</p>
				</div>
			</nav>
			<Suspense fallback={<Loading />}>
				<TicketList />
			</Suspense>

			<div className="flex justify-end">
				<Link
					href="/tickets/create"
					className="btn-primary px-2 py-1 rounded-md"
				>
					Add a new ticket
				</Link>
			</div>
		</main>
	);
}
