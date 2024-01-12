INSERT INTO department (dep_name)
VALUES ("Engineering"),
        ("Marketing"),
        ("Project Management"),
        ("Finance");

INSERT INTO role (title, salary, department_id)
VALUES ("Head of Marketing", 250000, 2),
        ("Lead Software Developer", 150000, 4),
        ("Junior Developer", 80000, 4),
        ("Project Manager", 200000, 3),
        ("Lawyer", 200000, 1),
        ("Accountant", 150000, 2);

INSERT INTO employee (last_name, first_name, role_id, manager_id)
VALUES ("Smith", "John", 1, NULL),
        ("Abernathy", "Jack", 1, NULL),
        ("Clayton", "Jennifer", 2, 1),
        ("Rinkum", "Andrew", 1, 3),
        ("Andolina", "Meredith", 1, 4);
