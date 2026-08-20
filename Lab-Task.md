Day 3 requirements

- Create the Express project.
- Create the project structure.
- Connect MongoDB using Mongoose.
- Create the User schema.
- Create the Task schema.
- Create a test route: GET /api/health
- Verify the MongoDB connection.
- Test the server using Postman.

Day 4 requirements:

- add mongoose validation
- add express-validator validation
- link tasks with users
- upgrade global error handling

Day 5 requirements:

- add authentication and authorization to project

Task schema:

- Field Type Purpose
- title String Task name (unique)
- description String Details about the task
- status String Current task state ["created", "in progress", "done"]
- priority Number Task importance [1->10]
- dueDate Date Deadline
- assignedTo ObjectId User responsible for the task
- collaborators array of ObjectId Users to help in task

User schema:

- Field Type Purpose
- name String User's name
- email String Login/account email
- password String User password
- role String Authorization role
