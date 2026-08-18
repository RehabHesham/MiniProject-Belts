Today's requirements

* Create the Express project.
* Create the project structure.
* Connect MongoDB using Mongoose.
* Create the User schema.
* Create the Task schema.
* Create a test route: GET /api/health
* Verify the MongoDB connection.
* Test the server using Postman.





Task schema:

* Field	Type	Purpose
* title	String	Task name
* description	String	Details about the task
* status	String	Current task state
* priority	String	Task importance
* dueDate	Date	Deadline
* assignedTo	ObjectId	User responsible for the task



User schema:

* Field	Type	Purpose
* name	String	User's name
* email	String	Login/account email
* password	String	User password
* role	String	Authorization role

