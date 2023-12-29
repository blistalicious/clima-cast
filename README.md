# ClimaCast - Weather App Documentation

## Project Overview

This project is a simple weather app built with HTML, CSS, and JavaScript. It consists of a frontend application and a Node.js backend to fetch weather data from the OpenWeatherMap API.

## Prerequisites

- Node.js: Ensure you have Node.js installed. You can download it from [https://nodejs.org/](https://nodejs.org/).

## Backend Setup

1. Navigate to the `backend` directory:

    ```bash
    cd backend
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add your OpenWeatherMap API key:

    ```env
    API_KEY=your_openweathermap_api_key
    ```

4. Start the backend server:

    ```bash
    node server.js
    ```

## Frontend Setup

1. Navigate to the `frontend` directory:

    ```bash
    cd frontend
    ```

2. Install dependencies:

    ```bash
    npm install -g http-server
    ```

3. Start the frontend server:

    ```bash
    http-server
    ```

## Usage

1. Open your web browser and go to [http://localhost:8080](http://localhost:8080).

2. Enter a city name in the search box and click the search button.

3. The app will display the weather information for the entered city.

## Project Structure

- `backend/`: Contains the backend code for the weather app.
- `frontend/`: Contains the frontend code for the weather app.
- `.gitignore`: Specifies files and directories to be ignored by Git.
- `README.md`: Documentation for the project.

## Git Ignore

To exclude files from version control, add the following lines to your `.gitignore` file:

```plaintext
# .gitignore

# Ignore node_modules folder
node_modules/

# Ignore .env file
.env

