const express = require("express");

const app = express();

app.use(express.json());

app.use(myMiddleWare);

// Custom Middleware
function myMiddleWare(req, res, next) {
	console.log("Inside the middleware which I created");
	next();
}

// Stich the routes to the server
require("./routes/idea.routes")(app);

app.listen(8080, () => {
	console.log("Server started on PORT 8080");
});
