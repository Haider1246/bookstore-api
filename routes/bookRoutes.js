const express = require('express');
const router = express.Router();
const bookController = require('../controllers/bookController');

//Endpoints
router.post('/', bookController.createBook); // POST
router.get('/', bookController.getAllBooks); // GET

module.exports = router;

router.get('/:id', bookController.getBookById);   // GET
router.put('/:id', bookController.updateBook);   // PUT
router.delete('/:id', bookController.deleteBook); // DELETE

