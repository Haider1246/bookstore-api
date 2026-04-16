const Book = require('../models/Book');

// 1. Nayi Book add karne ka logic
exports.createBook = async (req, res) => {
    try {
        const newBook = new Book(req.body);
        const savedBook = await newBook.save();
        res.status(201).json(savedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// 2. Saari Books dekhne ka logic
exports.getAllBooks = async (req, res) => {
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Pehle wale code ke niche ye add karein:

// 3. Kisi ek book ko ID se dhoondna
exports.getBookById = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) return res.status(404).json({ message: "Book nahi mili" });
        res.status(200).json(book);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// 4. Book update karna
exports.updateBook = async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedBook);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

// 5. Book delete karna
exports.deleteBook = async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "Book delete ho gayi!" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

