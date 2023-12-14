const mysql = require('mysql');
const inquirer = require('inquirer');

// Create MySQL connection
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_username',
  password: 'your_password',
  database: 'your_database_name',
});

// Connect to the database
connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL database');
  startApp();
});

// Function to start the application
function startApp() {
  inquirer.prompt({
      name: 'action',
      type: 'list',
      message: 'What would you like to do?',
      choices: [
        'View all departments',
        'View all roles',
        'View all employees',
        'Add a department',
        'Add a role',
        'Add an employee',
        'Update an employee role',
        'Update an employee manager' ,
        'Remove employee' ,
        'Remove role' ,
        'Exit',
      ],
    })
    .then((answer) => {
      switch (answer.action) {
        case 'View all departments':
          viewDepartments();
          break;
        case 'View all roles':
          viewRoles();
          break;
        case 'View all employees':
          viewEmployees();
          break;
        case 'Add a department':
          addDepartment();
          break;
        case 'Add a role':
          addRole();
          break;
        case 'Add an employee':
          addEmployee();
          break;
        case 'Update an employee role':
          updateEmployeeRole();
          break;
        case 'Exit':
          connection.end();
          break;
      }
    });
}

function viewRoles() {
    const query = `
      SELECT roles.role_id, roles.title, roles.salary, departments.department_name
      FROM roles
      LEFT JOIN departments ON roles.department_id = departments.department_id
    `;
    connection.query(query, (err, res) => {
      if (err) throw err;
      console.table(res); // Display role details in a formatted table
      startApp(); // Go back to main menu
    });
  }
  
  function viewEmployees() {
    const query = `
      SELECT 
        employees.employee_id, 
        employees.first_name, 
        employees.last_name, 
        roles.title AS job_title, 
        departments.department_name, 
        roles.salary, 
        CONCAT(managers.first_name, ' ', managers.last_name) AS manager_name
      FROM employees
      INNER JOIN roles ON employees.role_id = roles.role_id
      INNER JOIN departments ON roles.department_id = departments.department_id
      LEFT JOIN employees AS managers ON employees.manager_id = managers.employee_id
    `;
    connection.query(query, (err, res) => {
      if (err) throw err;

       // Custom formatting for displaying employee details in a table format
    const formattedEmployees = res.map(employee => ({
        'Employee ID': employee.employee_id,
        'First Name': employee.first_name,
        'Last Name': employee.last_name,
        'Job Title': employee.job_title,
        'Department': employee.department_name,
        'Salary': employee.salary,
        'Manager': employee.manager_name || 'N/A',
      }));
  
      // Print the formatted table
      console.log('Employee Details:');
      formattedEmployees.forEach(employee => {
        console.log('--------------------------------------');
        for (const key in employee) {
          console.log(`${key}: ${employee[key]}`);
        }
      });
  



      console.table(res); // Display employee details in a formatted table
      startApp(); // Go back to main menu
    });
  }
  

// Implement functions for each action: viewDepartments, viewRoles, viewEmployees, addDepartment, addRole, addEmployee, updateEmployeeRole
// Example function (viewDepartments):

function viewDepartments() {
  connection.query('SELECT * FROM departments', (err, res) => {
    if (err) throw err;
    console.table(res); // Display department names and ids in a formatted table
    startApp(); // Go back to main menu
  });
}

// Ensure that the functions for each action handle database queries appropriately based on user input.

// Run the application
startApp();
