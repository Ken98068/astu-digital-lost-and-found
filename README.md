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
