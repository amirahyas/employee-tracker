// Validate department name
function validateDepartmentName(input) {
    if (!input || input.trim() === '') {
      return 'Please enter a valid department name.';
    }
    return true;
  }
  
  // Validate role details
  function validateRoleInput(input) {
    if (!input || input.trim() === '') {
      return 'This field cannot be empty.';
    }

    return true;
  }
  
  // Validate employee details
  function validateEmployeeInput(input) {
    if (!input || input.trim() === '') {
      return 'This field cannot be empty.';
    }
    return true;
  }
  
  module.exports = {
    validateDepartmentName,
    validateRoleInput,
    validateEmployeeInput,
  };
  
  const inquirer = require('inquirer');
const validator = require('./validator');

// Example usage of validator functions with Inquirer
inquirer
  .prompt([
    {
      name: 'departmentName',
      type: 'input',
      message: 'Enter the name of the department:',
      validate: validator.validateDepartmentName,
    },
    // Other prompts using validators...
  ])
  .then((answers) => {
    // Handle user inputs here
    console.log('User inputs:', answers);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
