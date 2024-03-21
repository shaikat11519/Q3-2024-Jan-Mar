const express = require("express");
const cors = require("cors");
const connectDB = require("./db");
const routes = require("./routes/index");

const app = express();
app.use(cors());

app.use(express.json());

app.use(routes);

app.get("/", (req, res) => {
	return res.send("hello world")
})

app.use((err, _req, res, _next) => {
  const message = err.message ? err.message : "Server Error Occurred";
  const status = err.status ? err.status : 500;
  console.log(err);
  res.status(status).json({ message });
});

connectDB('mongodb://database:27017/movies_db')
	.then(() => {
		console.log('Database Connected');
		app.listen(4000, () => {
			console.log("I'm listening on port 4000");
		});
	})
	.catch((e) => console.log(e));
