import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const app = express();

app.use(
	express.static(
		path.resolve(path.dirname(fileURLToPath(import.meta.url)), "dist/client"),
		{ index: false }
	)
);

app.use("*", async (_, res) => {
	try {
		const template = fs.readFileSync("./dist/client/index.html", "utf-8");
		const { render } = await import("./dist/server/entry-server.js");

		const { getServerData } = await import("./dist/function/function.js");
		const data = await getServerData();
		const script = `<script>window.__data__=${JSON.stringify(data)}</script>`;

		const html = template.replace(`<!--outlet-->`, `${render(data)} ${script}`);
		res.status(200).set({ "Content-Type": "text/html" }).end(html);
	} catch (error) {
		// res.send vs res.end https://stackoverflow.com/a/49242271/6127580 (res.send is better always)
		res.status(500).send({ error });
	}
});

app.listen(5173, () => {
	console.log("http://localhost:5173.");
});
