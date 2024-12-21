# Backend Setup

This document provides instructions for setting up and running the backend service locally.

## Prerequisites
- A `.env` file configured with the following environment variables:
  ```env
  PORT=3000

  DATABASE_TYPE=postgres
  DATABASE_CONNECTION_STRING=<your_database_connection_string>

  JWT_SECRET=YOUR_JWT_SECRET
  JWT_REFRESH_SECRET=YOUR_JWT_SECRET_FOR_REFRESH_TOKEN
  JWT_EXPIRATION_TIME=<access_token_expire_time>
  JWT_REFRESH_EXPIRATION_TIME=<refresh_token_expire_time>
  ```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/thuanphat611/Shopology.git
   cd Backend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Configure the `.env` file:
   - Copy the `.env.example` file to `.env`.
   - Update the values to match your local PostgreSQL configuration.

## Running the Backend
1. Run database migrations:
   ```bash
   yarn migrate:up
   ```

2. Start the server:
   ```bash
   yarn start:dev
   ```

3. Access the API at `http://localhost:3000`.

## Notes
- Ensure that your PostgreSQL service is running and accessible.
- If you encounter connection issues, double-check your `.env` configuration and database credentials.


