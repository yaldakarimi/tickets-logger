import CreateFrom from "./CreateFrom";

const CreateTicket = async () => {
  // this function has to be async otherwise the newly added ticket won't render before a manual refresh of the page
	return (
		<main>
			<h2 className="text-center">Open a New Ticket</h2>
			<CreateFrom />
		</main>
	);
};

export default CreateTicket;
