# Backend

This is the backend for the website. It is built with Node.js and Express.

## Setup

1. Install Node.js and npm if you haven't already.
2. Navigate to the `backend` directory.
3. Run `npm install` to install the dependencies.

## Running the Server

To start the server, run `npm start` in the `backend` directory.

## Structure

- `app.js`: Entry point of the application.
- `controllers/`: Contains the `AuthController` for handling Google authentication.
- `middleware/`: Contains the `authenticate` middleware for authenticating requests.
- `models/`: Contains the `User` model for representing users in the database.
- `routes/`: Contains the `authRoutes` for setting up the authentication routes.

## Environment Variables

You need to set the following environment variables:

- `GOOGLE_CLIENT_ID`: Your Google Client ID for OAuth.
- `GOOGLE_CLIENT_SECRET`: Your Google Client Secret for OAuth.
- `ALLOWED_USERS`: A comma-separated list of Google user IDs that are allowed to access the page.

You can set these variables in a `.env` file in the `backend` directory.