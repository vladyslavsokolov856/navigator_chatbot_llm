# Chat UI Prototype

## Table of Contents

- [Prerequisites](#prerequisites)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Setup](#setup)
- [Usage](#usage)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## Prerequisites

- Node.js >= 14
- An [OpenAI API Key](https://platform.openai.com/account/api-keys)
- A [MongoDB database](https://www.mongodb.com/)
- A [Redis instance](https://redis.io/)

## Technologies Used

- [Next.js](https://nextjs.org/) - A React-based framework for building server-side rendered and statically exported web applications
- [OpenAI LLMs](https://platform.openai.com/docs/models/overview) - Large language models developed by OpenAI
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom user interfaces
- [Axios](https://github.com/axios/axios) - A popular library for making HTTP requests in JavaScript
- [NextAuth.js](https://next-auth.js.org/) - A complete authentication solution for Next.js applications
- [MongoDB](https://www.mongodb.com/) - A popular NoSQL database used for storing user information
- [Mongoose](https://mongoosejs.com/) - An Object Data Modeling (ODM) library for MongoDB and Node.js
- [Redis](https://redis.io/) - An in-memory data structure store, used as a database, cache, and message broker
- [Crypto](https://nodejs.org/api/crypto.html) - A built-in Node.js module for handling cryptographic operations

## Setup

### MongoDB Setup

We use MongoDB for storing user information and session data. You can set up a MongoDB instance in several ways:

- Download and install MongoDB directly on your local machine.
- Use a Docker container to run MongoDB.
- Use a managed MongoDB service, like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas), which offers a free tier.

Once you have a running MongoDB instance, you'll need to obtain the connection string. If you're using MongoDB Atlas, you can find the connection string in your cluster's connection settings.

Add the MongoDB connection string to your `.env.local` file like so:

### Redis Setup

We use Redis for rate limiting in our API routes. You can set up a Redis instance in several ways, including:

- Download and install Redis directly on your local machine (not recommended for Windows users).
- Use a Docker container to run Redis.
- Use a managed Redis service, like [RedisLabs](https://redislabs.com/), which offers a free tier.

Once you have a running Redis instance, you'll need to obtain the connection string. If you're using RedisLabs, you can find the connection string in your database's configuration page.

## Installation

1. Navigate to the project directory:

   ```
   cd gpt-ui
   ```

2. Install the dependencies:

   ```
   npm install
   ```

3. Create a `.env.local` file in the project root and add the necessary environment variables:

   ```
   touch .env.local
   ```

   Add the following to the `.env.local` file:

   ```
   NEXTAUTH_URL=http://localhost:3000
   MONGODB_URI=yourURI
   NEXTAUTH_SECRET=yourSecret
   ENCRYPTION_KEY: a 32-digit hexadecimal string for AES-128 encryption (for users' API key)
   REDIS_URL=yourRedisConnectionString
   ```

Replace `http://localhost:3000` with whatever port your application is running on, `yourURI` with your MongoDB connection string, `yourSecret` with a secure random string, `your32HexDigitString` with a 32-digit hexadecimal string for AES-128 encryption, and `yourRedisConnectionString` with your Redis connection string.

...

## Usage

- To run the development server:

  ```
  npm run dev
  ```

- To build the application for production:

  ```
  npm run build
  ```

- To start the production server:

  ```
  npm run start
  ```
