import express from 'express';
import { addNote, getUserNotes } from './note.controller.js';
import { verifyToken } from '../../Middleware/verifyToken.js';
import { validation } from '../../Middleware/validation.js';
import { noteSchema } from './note.validation.js';

const noteRouter = express.Router();


noteRouter.post("/", verifyToken, validation(noteSchema), addNote); 
noteRouter.get("/", verifyToken, getUserNotes);

export default noteRouter;