# Todo List Application 📝

A simple and intuitive Todo List application built using React.js for the frontend and Node.js for the backend, with user authentication and Google Sign-In integration.

## Features 🚀
- Add, edit, and delete tasks
- Mark tasks as completed
- User authentication (Sign Up, Login)
- Google Sign-In integration with Passport.js
- Responsive design using Tailwind CSS

## Technologies Used 💻
### Frontend:
- React.js
- Tailwind CSS
- React Router

### Backend:
- Node.js
- Express.js
- MongoDB
- Passport.js

### Authentication:
- Google OAuth 2.0

## Installation 🛠️
### Clone the Repository
```bash
git clone https://github.com/MuneebMughal12/assement-TodoList.git
cd Todo-Listassement

Backend Setup***
cd server
npm install
npm start

Create a .env file and add your environment variables:
PORT=5000
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret

Frontend Setup
cd client
npm install
npm start




Todo-Listassement/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── config/
│   ├── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.js
│   │   ├── index.js
├── README.md

