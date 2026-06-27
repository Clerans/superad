# SuperAds Portfolio Management System Setup Guide

This guide describes how to configure, initialize, and run the backend server and frontend application.

---

## 🔍 Prerequisites

Make sure you have the following installed on your machine:
* **Node.js:** version 18 or higher
* **PostgreSQL:** version 14 or higher
* **Cloudinary Account:** For storage of project showcase images.

---

## 🗄️ Database Initialization

1. Open your PostgreSQL console or client (e.g. pgAdmin, DBeaver) and create a database named `superad_db`:
   ```sql
   CREATE DATABASE superad_db;
   ```
2. Connect to the newly created database and execute the schema definitions found at:
   [schema.sql](file:///c:/Users/micha/Desktop/superad/server/src/db/schema.sql)
   This creates:
   * The `service_category` enum
   * The `projects` and `project_images` tables (with triggers to auto-update modification timestamps)
   * The `admin_users` table
   * Spatial indexes for optimal performance

---

## ☁️ Cloudinary Configuration

1. Create a free account at [Cloudinary](https://cloudinary.com/).
2. Navigate to your Cloudinary Console / Dashboard.
3. Retrieve your **Cloud Name**, **API Key**, and **API Secret**. You will need to add these to the server `.env` file.

---

## 🔧 Server Setup (Express Backend)

1. Open a terminal and navigate to the `server/` directory:
   ```bash
   cd server
   ```
2. Create your `.env` file by copying the template:
   ```bash
   cp .env.example .env
   ```
3. Edit the `.env` file and replace the credentials with your database url, JWT secret, and Cloudinary keys:
   ```env
   PORT=3001
   DATABASE_URL=postgresql://postgres:your_password@localhost:5432/superad_db
   JWT_SECRET=any_strong_random_jwt_secret_key
   FRONTEND_URL=http://localhost:5173
   CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
   CLOUDINARY_API_KEY=your_cloudinary_api_key
   CLOUDINARY_API_SECRET=your_cloudinary_api_secret
   ADMIN_USERNAME=admin
   ADMIN_PASSWORD=your_secure_password
   NODE_ENV=development
   ```
4. Install server dependencies:
   ```bash
   npm install --legacy-peer-deps
   ```
5. Build and run the server in development mode:
   ```bash
   npm run dev
   ```
   The backend API will start running at `http://localhost:3001`.

---

## 🔑 Seeding the First Admin Account

To make setup as seamless as possible, we have provided an automated setup endpoint. 

1. Ensure the server is running.
2. Send a `POST` request to `http://localhost:3001/api/auth/setup` using curl, Postman, or PowerShell:
   ```powershell
   # PowerShell command
   Invoke-RestMethod -Method Post -Uri "http://localhost:3001/api/auth/setup"
   ```
   This endpoint automatically reads `ADMIN_USERNAME` and `ADMIN_PASSWORD` from your `.env` file, hashes the password using `bcryptjs`, inserts the record into the database, and disables itself if an admin already exists.

---

## 🌐 Frontend Setup (React Application)

1. Open a new terminal and navigate to the `Front-end/` directory:
   ```bash
   cd Front-end
   ```
2. Make sure the `.env.local` contains the `VITE_API_URL` pointing to the Express server:
   ```env
   VITE_API_URL=http://localhost:3001/api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the frontend dev server:
   ```bash
   npm run dev
   ```
   The client application will start running at `http://localhost:5173`.

---

## 🚀 Accessing the System

* **Public website:** Navigate to `http://localhost:5173/`
* **Admin Login page:** Navigate to `http://localhost:5173/admin/login`
* Sign in using the credentials defined in your server `.env` (seeded via `/api/auth/setup`).
