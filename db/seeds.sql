INSERT INTO user (first_name, last_name, email, password)
VALUES
    ("Fernando", 'Almeida', "fernando@fernando.com", "12312132322"),
    ("Fernando", 'Almeida', "fernando1@fernando.com", "12312132322"),
    ("Fernando", 'Almeida', "fernando2@fernando.com", "12312132322"),
    ("Fernando", 'Almeida', "fernando3@fernando.com", "12312132322"),
    ("Fernando", 'Almeida', "fernando4@fernando.com", "12312132322")


INSERT INTO category (name, created_at, updated_at)
VALUES 
    ('rent','2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('internet', '2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('phone','2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('auto','2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('Tuition','2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('Insurance','2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('Renovation','2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('Solar','2022-06-01 20:51:38', '2022-06-01 20:51:38')


INSERT INTO expense (name, value, user_id, category_id, created_at, updated_at)
VALUES
    ('rent', 2300, 1, 1, '2022-06-01 20:51:38', '2022-06-01 20:51:38'),    
    ('movie', 2300, 2, 2, '2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('auto', 2300, 3, 3, '2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('fine', 2300, 4, 4, '2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('concert', 2300, 5, 5, '2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('school', 2300, 1, 4, '2022-06-01 20:51:38', '2022-06-01 20:51:38'),
    ('internet', 2300, 2, 6, '2022-06-01 20:51:38', '2022-06-01 20:51:38')