

TeamFlow — API Contract
Backend
Python and Django REST Framework

Frontend
React

Database
MySQL

Planned API Endpoints
Authentication
POST /api/register/ — Register a new user

POST /api/login/ — Log in a user

POST /api/logout/ — Log out a user

Projects
GET /api/projects/ — Get all accessible projects

POST /api/projects/ — Create a project

GET /api/projects/{id}/ — Get project details

PUT /api/projects/{id}/ — Update a project

DELETE /api/projects/{id}/ — Delete a project

Tasks
GET /api/tasks/ — Get tasks

POST /api/tasks/ — Create a task

GET /api/tasks/{id}/ — Get task details

PUT /api/tasks/{id}/ — Update a task

DELETE /api/tasks/{id}/ — Delete a task

Note
These endpoints are planned. The frontend and backend teams must agree on request fields, response formats, authentication, and permissions before implementation.
