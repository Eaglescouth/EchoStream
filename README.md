# EchoStream

A full-stack web application designed for seamless data streaming and interaction.

## Overview

EchoStream is a split-architecture project containing both a robust Python backend and a dynamic JavaScript-based frontend. This repository structure keeps the client-side presentation and server-side logic cleanly separated for easier development, testing, and deployment.

## Project Structure

The repository is divided into two main directories:

* **`echo-stream-frontend/`**: Contains the client-side code (JavaScript, HTML, CSS). This directory handles the user interface, component rendering, and direct interactions with the backend APIs.
* **`echostream/`**: Contains the server-side code (Python). This directory manages the core application logic, database integrations, API endpoints, and data processing.

## Prerequisites

To run both sides of this application, you will need:
* **Backend:** Python 3.8+ 
* **Frontend:** Node.js and npm (Node Package Manager)

## Installation & Setup

### 1. Clone the Repository
```bash
git clone [https://github.com/Eaglescouth/EchoStream.git](https://github.com/Eaglescouth/EchoStream.git)
cd EchoStream











Backend Setup
Navigate to the backend folder and isolate your environment:



cd echostream

# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies (assuming a requirements.txt exists)
pip install -r requirements.txt






Frontend Setup
Open a new terminal window, navigate to the frontend folder, and install the necessary packages:

Bash
cd echo-stream-frontend

# Install node modules
npm install



Usage
You will need to run both the frontend and backend servers simultaneously during development.

Running the Backend:
Ensure your virtual environment is active, then start your Python server (adjust the command based on your specific framework, e.g., Flask or Django):



