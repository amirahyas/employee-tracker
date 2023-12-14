# employee-tracker

This command-line application, built with Node.js, enables users to manage employee data stored in a MySQL database. It provides functionalities to view all departments, roles, and employees, and allows users to add new departments, roles, and employees. Additionally, it facilitates the update of an employee's role.

Installation
Clone the repository:

bash
Copy code
git clone 
Navigate to the project directory:

bash
Copy code
cd employee-management-cli
Install dependencies:

bash
Copy code
npm install
Set up MySQL:

Ensure a MySQL server is running.
Create a database and tables using the provided SQL schema file (schema.sql).
Configure database connection:

Open index.js.
Modify the MySQL connection settings:
javascript
Copy code
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});
Usage
Run the application:

bash
Copy code
node index.js
Once the application starts, follow the prompts to perform various actions:

View all departments, roles, or employees.
Add a department, role, or employee.
Update an employee's role.
Features
View all departments, roles, and employees.
Add new departments, roles, and employees.
Update an employee's role.
Database Schema
The application assumes the following database schema:

departments table with columns: department_id, department_name.
roles table with columns: role_id, title, salary, department_id.
employees table with columns: employee_id, first_name, last_name, role_id, manager_id.
Dependencies
Node.js
MySQL
Inquirer.js
Contributions
Contributions are welcome! Fork the repository, make improvements, and submit a pull request.