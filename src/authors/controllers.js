const Author = require("./model");
const Book = require("../books/model");

//add a author
const addAuthor = async (req, res) => {
  try {
    const author = await Author.create({
      authorName: req.body.authorName,
    });
    res.status(201).json({ message: "success", newAuthor: author });
  } catch (error) {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

//get a book with author title
const getAuthorAndBooks = async (req, res) => {
  try {
    const author = await Author.findOne({
      where: {
        authorName: req.params["author"],
      },
      include: Book,
    });
    res.status(200).json({ message: "Success", author: author });
  } catch {
    console.log(error);
    res.status(501).json({ errorMessage: error.message, error: error });
  }
};

module.exports = {
  addAuthor,
  getAuthorAndBooks,
};
