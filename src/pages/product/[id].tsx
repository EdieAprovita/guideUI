import { useRouter } from "next/router";
const Id = () => {
	const {
		query: { id },
	} = useRouter();

	return (
		<div>
			<h1>El id del producto: {id}</h1>
		</div>
	);
};

export default Id;
