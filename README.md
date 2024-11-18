# Haven of Pages - Online Bookstore

Haven of Pages is a full-stack e-commerce application for a bookstore. It allows users to browse books, add them to a cart or wishlist, and manage their selections. The application is built with React on the frontend and Node.js/Express with MongoDB as the backend database. Docker is used to containerize MongoDB.

---

## Features

- User authentication (registration and login) using JWT
- Browse a list of books
- View detailed information about each book
- Add books to cart or wishlist
- Manage cart (update quantities, remove items)
- Search and sort functionality

---

## Prerequisites

Ensure you have the following installed:

- **Node.js**: v16.x.x
- **NPM**: Comes with Node.js
- **Docker**: Latest version
- **MongoDB**: Installed locally or running through Docker (port `27017`)

---

## Setup Instructions

### Cloning the Repository

1. **Clone the repository**:
   ```bash
   git clone https://github.com/YourUsername/assignment4-ShelleyMassinga.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd assignment4-ShelleyMassinga
   ```

---

### MongoDB Setup

1. **Using Docker for MongoDB**:
   Ensure MongoDB is set up with the following Docker Compose configuration:
   ```yaml
   version: '3.8'

   services:
     mongodb:
       image: mongo:6
       ports:
         - "27017:27017"
       volumes:
         - mongodb_data:/data/db
       networks:
         - app-network
       restart: unless-stopped

   networks:
     app-network:
       driver: bridge

   volumes:
     mongodb_data:
   ```

2. **Start MongoDB**:
   ```bash
   docker-compose up -d
   ```

3. **Seed the Database**:
   To populate the MongoDB with sample data:
   ```bash
   cd server
   node seed.js
   ```

---

### Backend Setup (Server)

1. **Navigate to the server directory**:
   ```bash
   cd server
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `server` directory with the following content:
   ```plaintext
   # Server Configuration
   PORT=8080
   NODE_ENV=development

   # MongoDB Connection
   MONGO_URI=mongodb://0.0.0.0:27017/bookstore

   # JWT Configuration 
   JWT_SECRET=5c7915917b7a2f71bc32b1b0f1f376e9303d58637e9a99e7625ae1250ec03f78612835f6c00163a7a368d6071339867c155188cf71dca42d1d95c0b70dff68fe

   # Domain Configuration
   DOMAIN=localhost
   ```

4. **Run the server locally**:
   ```bash
   npm start
   ```

---

### Frontend Setup (Client)

1. **Navigate to the client directory**:
   ```bash
   cd ../client
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up environment variables**:
   Create a `.env` file in the `client` directory with the following content:
   ```plaintext
   REACT_APP_API_URL=http://localhost:3000
   ```

4. **Run the React application locally**:
   ```bash
   npm start
   ```

   This will start the application on [http://localhost:3000](http://localhost:3000).

---

### Running the Application

1. **Start the backend**:
   ```bash
   cd server
   npm start
   ```

2. **Start the frontend**:
   ```bash
   cd client
   npm start
   ```

---

## Troubleshooting

- Ensure MongoDB is running locally on port `27017`. Use Docker Compose as provided above or run MongoDB manually.
- Check that the `.env` files are correctly configured for both the client and server directories.
- If Docker fails, check the logs:
  ```bash
  docker-compose logs
  ```

---

## GitHub Repository

- **Repository**: [https://github.com/YourUsername/assignment4-ShelleyMassinga](https://github.com/YourUsername/assignment4-ShelleyMassinga)