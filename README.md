A full-stack Kanban board application with user authentication using JWT, built with Node.js, Express, MongoDB, React, and TypeScript.

🚀 Live Demo
Deployed Backend (Note: Free instances may take time to spin up.)

🛠️ Features
User authentication (JWT-based login & signup)
Create, edit, and delete Kanban board tickets
Organized columns for task management
Responsive UI with React & TypeScript
📂 Tech Stack
Frontend: React, TypeScript, Vite
Backend: Node.js, Express, MongoDB (Mongoose), JWT
Deployment: Render

📦 Installation
Clone the repository

bash
Copy
Edit
git clone https://github.com/ashleyxnicolej/r-Kanban-Board-with-JWT-Authentication.git
cd r-Kanban-Board-with-JWT-Authentication
Set up the server

bash
Copy
Edit
cd server
npm install
npm start
Set up the client

bash
Copy
Edit
cd ../client
npm install
npm run dev
🚀 Deployment Steps
Backend Deployment (Render)
Select server directory as root
Runtime: Node.js
Build Command: npm install && npm run build
Start Command: npm start
Set up environment variables
Deploy
Frontend Deployment (Render Static Site)
Select client directory as root
Build Command: npm install && npm run build
Publish Directory: dist
Deploy
🛠️ Troubleshooting
If deployment fails with an error like:

sql
Copy
Edit
Root directory 'server directory' does not exist, please check settings.
Make sure:

The correct root directory is selected (should be server)
The .env file is correctly configured
📜 License
This project is licensed under the MIT License.
