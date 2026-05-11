# Full Stack Task Management Application

This project is a full-stack task management application built using:

- Spring Boot (Backend)
- React + TypeScript (Frontend)
- H2 Database
- TailwindCSS

The application allows users to:

- Create tasks
- View tasks
- Update tasks
- Delete tasks
- Mark tasks as completed


# Technologies Used

## Backend
- Java 25
- Spring Boot 4.0
- Spring Data JPA
- Spring Security
- H2 Database

## Frontend
- React
- TypeScript
- Vite
- TailwindCSS
- Axios



# Project Structure

project-root/
│
├── backend/
├── frontend/
└── README.md

---

# HOW TO RUN THE PROJECT

## Run Backend

Open terminal:


```bash
cd backend
mvn spring-boot:run
```

Backend runs on:

```text
http://localhost:8080
```

## Run Frontend

Open another terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```text
http://localhost:5173
```

---

# Features

## Backend

- RESTful CRUD API
- Validation handling
- Spring Security configuration
- H2 database integration

## Frontend

- Responsive UI
- Create task form
- Edit task modal
- Delete confirmation
- Loading states
- Error handling
- Empty states

---

# Security Considerations

## XSS Protection

React automatically escapes HTML content to help mitigate Cross-Site Scripting (XSS) attacks.

## CSRF Protection

CSRF protection is disabled because the backend uses a stateless REST API architecture without session-based authentication.

---

