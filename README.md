# FullStack Register and Database with MongoDB

This project is a full-stack application designed to handle user registration and data management. It integrates a front-end interface with a **MongoDB** database to perform CRUD (Create, Read, Update, Delete) operations efficiently.

## Project Overview

The main goal of this repository is to demonstrate a complete flow of data:
1.  **Frontend**: Captures user input through a registration form.
2.  **Backend**: Processes the data and communicates with the database.
3.  **Database**: Stores and manages persistent information using a NoSQL approach.

## Tech Stack

* **Frontend:** HTML5, CSS3, and JavaScript.
* **Backend:** Node.js / Express (or Python/Flask depending on your implementation).
* **Database:** MongoDB (NoSQL).
* **Version Control:** Git & GitHub.

## Prerequisites

To run this project locally, you will need:
* [Node.js](https://nodejs.org/) installed.
* A [MongoDB](https://www.mongodb.com/) instance (Local or Atlas).
* Git for cloning the repository.

## Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/lfzorzetti-eng/FullStack-Register-and-DataBase-with-MongoDB.git](https://github.com/lfzorzetti-eng/FullStack-Register-and-DataBase-with-MongoDB.git)
    ```

2.  **Navigate to the project folder:**
    ```bash
    cd FullStack-Register-and-DataBase-with-MongoDB
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Configure Environment Variables:**
    Create a `.env` file in the root directory and add your connection string:
    ```env
    MONGO_URI=your_mongodb_connection_url
    PORT=3000
    ```

5.  **Run the application:**
    ```bash
    npm  run dev
    ```

## Features

* **User Registration:** Securely saves user details to the database.
* **Data Persistence:** Information remains available even after restarting the server.
* **REST API:** Clean endpoints for managing data.

---
Developed by [lfzorzetti-eng](https://github.com/lfzorzetti-eng)