const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Create Schema for'ToDo':
const ToDoSchema = new Schema({  
                                action: { type: String, 
                                          required: [true, "The ToDo field is required"]
                                        }
                              });
//Create Model for ToDo:
const ToDo = mongoose.model("ToDo", ToDoSchema);
module.exports = ToDo;                              