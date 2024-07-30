
# Product Listing

## Overview

This project provides a simple Node.js API for listing products using MongoDB. The backend is built with Express.js, and product data is stored in a MongoDB Atlas database.

## Features

- **Product Listing**: Retrieve a list of products from the database.
- **RESTful API**: Uses standard HTTP methods for interaction.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side development.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing product information.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB and Node.js.

## Prerequisites

- **Node.js**
- **npm** (Node Package Manager)
- **MongoDB Atlas Account**: For hosting the MongoDB database.

## Setup Instructions

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone <your-repository-url>
cd product-listing
```

### 2. Install Dependencies

Navigate to the project directory and install the required dependencies:

```bash
npm install
```

This will install all the necessary packages listed in the `package.json` file.

### 3. Run the Application

Start the server by running:

```bash
node index.js
```

You should see a message indicating that the server is running:

```plaintext
Server running at http://localhost:3000
Connected to MongoDB Atlas
```

### 4. Access the API

You can test the API endpoints using a web browser.

#### Get Product List

- **Endpoint**: `GET /products`
- **Description**: Retrieves a list of all products.
- **URL**: `http://localhost:3000/products`

### 5. Sample Data

To initially populate your database with sample data, you can use MongoDB Atlas's Data Explorer.

## File Structure

```
product-listing/
├── models/
│   └── Product.js          # Mongoose schema for products
├── index.js                # Entry point of the application
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Troubleshooting

- **404 Not Found**: Ensure the server is running and you're accessing the correct URL.
