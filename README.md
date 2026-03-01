# ASTU Digital Lost & Found System

## Overview
A full-stack application for students to report lost and found items, submit claim requests, and allow admins to approve/reject claims.

## Features
- Student Registration & Login
- Report Lost/Found Items with Image Upload
- Search & Filter Items
- Submit Claim Requests
- Profile Page: My Items & My Claims
- Admin Panel: Approve/Reject Claims + Dashboard Statistics
- Toast Notifications & Responsive Design

## Tech Stack
- Backend: Node.js, Express, MongoDB, Mongoose
- Frontend: HTML, CSS, JavaScript
- Authentication: JWT, bcryptjs
- File Upload: Multer

## How to Run
1. Clone repo
2. `cd backend` → `npm install` → `npm run dev`
3. Serve frontend via VS Code Live Server or local HTTP server
4. Test features

## Security
- Password hashing with bcryptjs
- Role-based access control
- Secure file upload
- Input validation to prevent injection attacks
ASTU Digital Lost & Found System

A full-stack web application for managing lost and found items at ASTU.

🚀 Features
👤 Authentication

Student and Admin roles

JWT-based authentication

Role-based route protection

📦 Item Management

Report lost items

Report found items

Upload item images

Filter by category & status

📩 Claim System

Students can claim found items

Admin can approve or reject claims

Students can only view their own claims

📊 Admin Dashboard

Total items count

Lost / Found / Claimed statistics

Total claims count

Animated statistics counters

👤 Student Profile

View own reported items

View own claim requests

🛠️ Tech Stack
Backend

Node.js

Express

MongoDB

Mongoose

JWT Authentication

Multer (Image Upload)

Frontend

HTML

CSS (Glassmorphism UI)

Vanilla JavaScript

Fetch API

📂 Project Structure
backend/
    models/
    routes/
    middleware/
    uploads/
    server.js

frontend/
    css/
    js/
    index.html
    login.html
    register.html
    dashboard.html
    admin.html
    profile.html
    backend/
    models/
    routes/
    middleware/
    uploads/
    server.js
    How To Run
Backend
How To Run
Backend  install nmp nmp run dev 
