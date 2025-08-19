# Travlr Getaways — CS 465 Full-Stack Project

Customer site: **Express + Handlebars (HBS)**  
Admin site: **Angular SPA** with secured endpoints (JWT).  
Backend: **Node.js + Express** • DB: **MongoDB (NoSQL)**

---

## Architecture
**Frontend approaches used**
- **Express/HBS** (server-rendered HTML) for the customer site: fast first paint, simple templating on the server.
- **Angular SPA** for the admin: component-based UI, client-side routing, and smoother CRUD workflow.

**Why MongoDB (NoSQL)?**  
Trip data changes shape (pricing, dates, images, descriptions). A document model handles evolving fields without heavy schema migrations and maps naturally to JSON.

---

## Functionality
**JSON vs JavaScript**  
JSON is a **data format**, not code. It’s used as the request/response payload between Angular ↔ Express and Express ↔ MongoDB drivers. This contract ties the frontend and backend cleanly.

**Refactoring & Reuse**  
- Split API logic into `app_api` (controllers, routes, models) for maintainability.  
- Reusable Angular components (trip card/list/form) reduced duplication and made updates faster and safer.

---

## Testing
**Methods & endpoints**  
- `GET /api/trips` (read)  
- `POST /api/trips` (create)  
- `PUT /api/trips/:id` (update)  
- `DELETE /api/trips/:id` (remove)

**Security testing (JWT)**  
- Login to obtain token; include header:


- Verified protected routes in **Postman** and confirmed unauthorized requests fail.

---

## How to Run (local)

1. Install dependencies:
 ```bash
 npm install


MONGODB_URI=mongodb://localhost:27017/travlr
JWT_SECRET=yourSecretKey
PORT=3000

node app.js

cd app_admin
npm install
ng serve
# Open http://localhost:4200 


---
```


---
## Reflection

This module helped me better understand how to apply security to a full-stack application by implementing JSON Web Token (JWT) authentication. I learned how to secure API endpoints, test token-based login with Postman, and refactor both the front-end and back-end to include authentication. While setting this up, I ran into issues with invalid username/password, which reminded me how important clear environment configuration and proper testing are for security features. Overall, I gained valuable experience in applying authentication and testing methods in a real project.

## Author
Omar Obaidi  
Southern New Hampshire University — B.S. Computer Science (Nov 2025)
