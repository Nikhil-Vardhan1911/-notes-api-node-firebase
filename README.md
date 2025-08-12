# Notes API with Node.js and Firebase Firestore

## Project Overview
This is a simple Notes API backend built using Node.js, Express.js, and Firebase Firestore with the Firebase Admin SDK.  
It provides CRUD operations for notes with `title` and `content`, including basic validation and timestamps (`createdAt` and `updatedAt`).

## Tech Stack
- Backend: Node.js + Express.js  
- Database: Firebase Firestore (via Firebase Admin SDK)  

## API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|--------------------------|
| POST   | `/notes`       | Create a new note        |
| GET    | `/notes`       | Retrieve all notes       |
| GET    | `/notes/:id`   | Retrieve a note by ID    |
| PUT    | `/notes/:id`   | Update a note by ID      |
| DELETE | `/notes/:id`   | Delete a note by ID      |

## Setup Instructions

1. **Clone the repository**  
   ```bash
   git clone https://github.com/Nikhil-Vardhan1911/-notes-api-node-firebase.git
   cd -notes-api-node-firebase
2 Install Dependencies
    npm install

3. Setup Firebase Service Account
  1. Go to your Firebase Console → Project Settings → Service Accounts
  2. Click Generate new private key to download the serviceAccountKey.json file
  3. Place this file in the root directory of the project

4. Run the application
     npm run dev

5. Test the API
Use Postman or any API client to test the endpoints at http://localhost:3000

Notes
   The project uses Nodemon for automatic server restarts during development.
   Basic validation ensures that both title and content are required when creating or updating notes.
   Each note document contains createdAt and updatedAt timestamps for tracking.
