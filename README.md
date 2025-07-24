# Live Polling Management API

This project is a Node.js-based backend API to manage live polls, vote casting, and result retrieval.

## Features
- Create polls with options
- Vote on options with optional duplicate vote prevention
- View poll results
- Close polls and list active polls

## Tech Stack
- Node.js + Express
- PostgreSQL + Sequelize ORM
- Optional: Redis for scaling vote counts

## How to Run
1. Install dependencies: `npm install`
2. Add `.env` with your DB credentials
3. Run with: `npm start`
