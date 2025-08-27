const NoteModel = require("../model/appModel");

// notes app root path when run port:7000
const runViewIndex = (_req, res) => {
  res.render("index"); //render view folder index file
};

// notes app mainInterface database collection
const showAllNoteDB = async (_req, res) => {
  const allNotes = await NoteModel.find();
  res.render("notes/index", { items: allNotes });
};

// login button welcome page
const loginBtn = (_req, res) => {
  res.render("user/login");
};

// notes app login form open under user folder
const loginPage = (_req, res) => {
  res.redirect("/mainInterface");
};

// show all notes from notes/index
const showAllNotes = (_req, res) => {
  res.render("notes/index");
};

//  view note
const notesView = async (req, res) => {
  let note = await NoteModel.findById(req.params.id);
  res.render("notes/view", { viewItem: note });
};

// delete note
const deleteNote = async (req, res) => {
  let note = await NoteModel.findById(req.params.id);
  await note.deleteOne({ _id: NoteModel.findById(req.params.id) });
  res.redirect("/mainInterface");
};

//note create button
const createNote = (_req, res) => {
  res.render("notes/create");
};

// note save button
const saveNote = async (req, res) => {
  let note = new NoteModel();
  note.title = req.body.title;
  note.body = req.body.body;
  note.done = false;
  await note.save();
  res.redirect("/mainInterface");
};

//note create cancel button
const noteCancelBtn = (_req, res) => {
  res.redirect("/mainInterface");
};

//notes edit button
const noteEditBtn = async (req, res) => {
  let note = await NoteModel.findById(req.params.id);
  res.render("notes/edit", { editNote: note });
};

//notes save-edit button
const noteSaveEditBtn = async (req, res) => {
  let note = await NoteModel.findByIdAndUpdate(req.params.id);

  note.title = req.body.title;
  note.body = req.body.body;
  note.done = false;

  await note.save();
  res.redirect(`/notes/${req.params.id}/view`);
};

// note edit cancel btn
const editCancel = (req, res) => {
  res.redirect(`/notes/${req.params.id}/view`);
};

// notes mark as done
const markDone = async (req, res) => {
  let note = await NoteModel.findByIdAndUpdate(req.params.id);
  note.done = true;
  await note.save();
  res.redirect(`/notes/${req.params.id}/view`);
};

// back button
const backBtn = (req, res) => {
  res.redirect("/mainInterface");
};

module.exports = {
  runViewIndex,
  showAllNoteDB,
  loginBtn,
  loginPage,
  showAllNotes,
  notesView,
  deleteNote,
  createNote,
  saveNote,
  noteCancelBtn,
  noteEditBtn,
  editCancel,
  noteSaveEditBtn,
  markDone,
  backBtn,
};
