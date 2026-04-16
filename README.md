# 📚 Bookstore RESTful API - Internship Task

## 🚀 Overview
A professional Backend API built with Node.js, Express, and MongoDB Atlas. This project was developed as part of a Backend Development Internship task to manage a bookstore's inventory.

## 🔗 Live Links
- **Live API:** [Yahan apna Render wala link paste karein]
- **GitHub Repository:** [Yahan apna GitHub link paste karein]

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas (Cloud)
- **Testing:** Postman

## 📡 API Endpoints
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/` | Server status check |
| GET | `/books` | Get all books from database |
| GET | `/books/:id` | Get a specific book by ID |
| POST | `/books` | Add a new book |
| PUT | `/books/:id` | Update book details |
| DELETE| `/books/:id` | Remove a book |

## ⚙️ Setup Instructions
1. Clone the repository: `git clone [your-repo-link]`
2. Install dependencies: `npm install`
3. Create a `.env` file and add your `MONGODB_URI`.
4. Start the server: `node app.js`

## 📂 Postman Collection
The file `bookstore_api_test.json` is included in this repository. You can import it into Postman to test all endpoints easily.
