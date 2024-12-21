# Frontend Setup

This document provides instructions for setting up and running the frontend application locally.

## Prerequisites
- A `.env` file configured with the following environment variables:
  ```env
  VITE_BACKEND=<backend_url> //http://localhost:3000
  VITE_BASE_URL=<frontend_url> //http://localhost:5173
  ```

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/thuanphat611/Shopology.git
   cd Frontend
   ```

2. Install dependencies:
   ```bash
   yarn install
   ```

3. Configure the `.env` file:
   - Copy the `.env.example` file to `.env`.
   - Update the values to match your local environment configuration.

## Running the Frontend
1. Start the development server:
   ```bash
   yarn dev
   ```

2. Access the application at the URL provided by the development server (default: `http://localhost:5173`).

## Notes
- Ensure that the backend service is running and accessible at the URL specified in `VITE_BACKEND`.
- If you encounter issues, double-check your `.env` configuration and verify that the backend is operational.

