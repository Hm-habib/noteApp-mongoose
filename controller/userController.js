const NoteModel = require('../model/appModel')

// show welcome page/ view/index
const signupBtn = (req, res) => {
    res.render('index')
}

// go to user signup page
const signPage = (req, res) => {
    res.render("user/signup");
}

// notes app mainInterface database collection/ retrieve data from database
const  dbRetrieve = async (_req, res) => {
  const allNotes = await NoteModel.find();
  res.render("notes/index", { items: allNotes });
};

// click signup btn go to home page/ mainInterface
 const homePage = (_req, res) => {
   res.redirect('/mainInterface')
};
 

module.exports = {
    signupBtn,
    signPage,
    dbRetrieve,
    homePage,
    
}