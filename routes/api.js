/*
Tutorial from: https://www.digitalocean.com/community/tutorials/getting-started-with-the-mern-stack
Routes
There are three things that the app needs to do: create a task; view all tasks; and delete a completed task. For each task, we need to create routes that will define various endpoints that the todo app will depend on.
*/

const express = require("express");
const router = express.Router();
const ToDo = require("../models/todo");

//This route will: return all the data, exposing only the id and action field to the client
router.get("/todos", (req, res, next) => {

        ToDo.find({}, "action")
        .then(data => res.json(data))
        .catch(next)
});

router.post("/todos",(req, res, next) => {
    
    if (req.body.action){
        ToDo.create(req.body)
        .then(data => res.json(data))
        .catch(next)
    } 
    else
    {
        res.json({error: "The input field is empty."})
    };

});

router.delete("/todos/:id", (req, res, next) =>{
    ToDo.findOneAndDelete({"_id": req.params.id})
    .then(data => res.json(data))
    .catch(next)
});

module.exports = router;