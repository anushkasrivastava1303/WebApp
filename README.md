#  Web Application

This web application uses Flask for the backend and React.js for the frontend.

## Overview

The Devzery web app offers user registration, authentication, and profile management. The backend, powered by Flask, handles server-side tasks, while the React.js frontend provides a dynamic user interface.

## Prerequisites

Ensure you have Python (>=3.6), Node.js, and npm (Node Package Manager) installed.

## Backend Installation

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

2. Install Python dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Set up the Flask app:
   ```bash
   export FLASK_APP=app
   export FLASK_ENV=development
   flask run
   ```

## Frontend Installation

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install Node.js dependencies:
   ```bash
   npm install
   ```

3. Start the React development server:
   ```bash
   npm start
   ```

## Usage

1. Open your browser and go to `http://localhost:3000` to access the Devzery web app.

2. Register a new account or log in if you already have one.

3. Explore the user dashboard, update your profile, and navigate through the app.

## Folder Structure

The project has the following structure:

```plaintext
devzery_web_app/
├── backend/                # Flask backend
│   ├── app/
│   ├── static/
│   ├── templates/
│   ├── .env
│   ├── config.py
│   └── other_backend_files/
├── frontend/               # React.js frontend
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── README.md
│   └── other_frontend_files/
├── .gitignore
├── README.md
└── other_project_files/
```
