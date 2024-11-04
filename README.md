# Haven of Pages - Online Bookstore

Haven of Pages is a full-stack e-commerce application for a bookstore. It allows users to browse books, add them to a cart or wishlist, and manage their selections. The application is built with React on the frontend and Node.js/Express with MongoDB Atlas on the backend. It is deployed on an AWS EC2 instance.

## Features

- Browse a list of books
- View detailed information about each book
- Add books to cart or wishlist
- Manage cart (update quantities, remove items)
- Move items between cart and wishlist
- Search functionality
- Sort books by price

## Deployed Application

- **Web address:** http://ec2-54-209-203-114.compute-1.amazonaws.com/
- **EC2 Instance IP Address:** `54.209.203.114`

## Prerequisites for having it locally

Ensure you have met the following:

* **Node.js**: v16.x.x
* **NPM**: Comes with Node.js
* **MongoDB Atlas**: Ensure the database is set up and publicly accessible
* **PM2**: For running the server in production
  
## Setup Instructions

### Cloning the Repository

1. **Clone the repository**:
```bash
git clone https://github.com/YourUsername/assignment2-ShelleyMassinga.git
```

2. **Navigate to the project directory**:
```bash
cd assignment2-ShelleyMassinga
```

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
   * Create a `.env` file in the `server` directory with the following content:
```plaintext
MONGO_URI=your_mongodb_atlas_connection_string
PORT=8080
```

4. **Start the server using PM2**:
```bash
pm2 start app.js
```
   * **Note**: Ensure PM2 is installed. If not, install it globally:
```bash
npm install -g pm2
```

### Frontend Setup (Client)

1. **Navigate to the client directory**:
```bash
cd ../client
```

2. **Install dependencies**:
```bash
npm install
```

3. **Build the React application**:
```bash
npm run build
```

4. **Move the build folder to the server**:
```bash
mv build ../server/public/
```

## Running the Application

* The backend server will run on **port 8080**
* Access the deployed application at: http://ec2-54-209-203-114.compute-1.amazonaws.com





**Note**: This is a forked repo from the one used for assignment 2. When I accepted assignment 2 I forgot to fork the repo; since the main repo is private and I don't have all the permissions, I could not connect it to the instance.  I was only able to deploy to EC2 after having a public repo.

