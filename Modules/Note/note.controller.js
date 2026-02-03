import { noteModel } from "../../Database/Models/note.model.js";
import catchError from "../../Middleware/catchError.js";
import { AppError } from "../../utils/AppError.js";


export const addNote = catchError(async (req, res) => {
   
    req.body.createdBy = req.user._id; 
    const note = await noteModel.create(req.body);
    res.status(201).json({ message: "Note Created Successfully", note });
});


export const getUserNotes = catchError(async (req, res) => {
    const notes = await noteModel.find({ createdBy: req.user._id }).populate("createdBy", "name -_id");
    res.status(200).json({ message: "Success", notes });
});