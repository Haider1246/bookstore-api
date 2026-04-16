const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

// Raste (Endpoints)
router.post('/', bookController.createBook); // POST /books
router.get('/', bookController.getAllBooks); // GET /books

module.exports = router;
// Pehle wale routes ke niche ye add karein:

router.get('/:id', bookController.getBookById);   // GET /books/ID
router.put('/:id', bookController.updateBook);   // PUT /books/ID
router.delete('/:id', bookController.deleteBook); // DELETE /books/ID

