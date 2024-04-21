import { useState } from "react";
import Products from "./products";
import "./index.css";

const App = ({ data }) => {
	const [count, setCount] = useState(0);

	return (
		<main>
			<h1>SSR App</h1>
			<h3>Counter</h3>
			<div>
				<div>{count}</div>
				<button onClick={() => setCount(count + 1)}>Count</button>
			</div>
			{/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
			<Products data={data.products} />
		</main>
	);
};

export default App;
