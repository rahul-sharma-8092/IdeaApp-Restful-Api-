const ideas = require("../models/idea.model");

// Search all ideas
exports.fetchAllIdeas = (req, res) => {
	res.status(200).send(ideas);
};

let idCount = 1;
// Create ideas
exports.createIdeas = (req, res) => {
	// Fetch the idea from body
	const idea = req.body;

	// Increment the id
	idea.id = ++idCount;

	// Save the new idea to model
	ideas[idCount] = idea;

	// send the respond
	res.status(201).send(ideas[idCount]);
};

// Update ideas
exports.updateIdea = (req, res) => {
	// I need to read the id in passed in the path
	// http://localhost:8080/ideaApp/v1/ideas/1
	const ideaId = req.params.id;
	// console.log(ideaId);

	// If the idea is present --> modified else return error;
	if (ideas[ideaId]) {
		ideas[ideaId] = req.body;
		res.status(200).send(ideas[ideaId]);
	} else {
		res.status(400).send({
			message: "Idea id passed was not found",
		});
	}
};

// Delete Idea
exports.deleteIdea = (req, res) => {
	// If the idea is present --> deleted else return error;
	if (ideas[req.params.id]) {
		delete ideas[req.params.id];
		res.status(200).send({
			message: "sucessfully deleted",
		});
	} else {
		res.status(400).send({
			message: "Idea id passed was not found",
		});
	}
};
