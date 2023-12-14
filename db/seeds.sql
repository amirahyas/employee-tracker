-- Insert sample departments
INSERT INTO departments (department_name) VALUES
  ('Sales'),
  ('Human Resources'),
  ('Engineering'),
  ('Finance');

-- Insert sample roles
INSERT INTO roles (title, salary, department_id) VALUES
  ('Sales Manager', 80000, 1),
  ('Sales Representative', 50000, 1),
  ('HR Manager', 75000, 2),
  ('HR Assistant', 40000, 2),
  ('Software Engineer', 90000, 3),
  ('QA Engineer', 85000, 3),
  ('Financial Analyst', 78000, 4);

-- Insert sample employees
INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES
  ('John', 'Doe', 1, NULL), -- Manager
  ('Alice', 'Smith', 2, 1), -- Reports to Sales Manager
  ('Michael', 'Johnson', 3, NULL), -- Manager
  ('Emily', 'Williams', 4, 3), -- Reports to HR Manager
  ('Robert', 'Brown', 5, 3), -- Reports to Software Engineer
  ('Emma', 'Jones', 6, 3), -- Reports to Software Engineer
  ('Olivia', 'Garcia', 7, 4); -- Reports to Financial Analyst

