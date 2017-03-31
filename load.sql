insert into book (name) values ('O Guarani');
insert into book (name) values ('O Tronco do Ipê');
insert into book (name) values ('A Moreninha');
insert into book (name) values ('O Alquimista');

insert into book_item (name, book_id) values ('Capitulo 1 - Guarani 1', 1);
insert into book_item (name, book_id) values ('Capitulo 2 - Guarani 2', 1);
insert into book_item (name, book_id) values ('Capitulo 3 - Guarani 3', 1);

insert into book_item (name, book_id) values ('Capitulo 1 - O Tronco do Ipê 1', 2);
insert into book_item (name, book_id) values ('Capitulo 2 - O Tronco do Ipê 2', 2);
insert into book_item (name, book_id) values ('Capitulo 3 - O Tronco do Ipê 3', 2);


insert into role values ('ROLE_ADMIN');
insert into user_app (email, passwd) values ('jrcesar4@gmail.com', '$2a$04$qP517gz1KNVEJUTCkUQCY.JzEoXzHFjLAhPQjrg5iP6Z/UmWjvUhq');
insert into user_app_roles(user_app_id, roles_name) values (1, 'ROLE_ADMIN');

insert into user_app (email, passwd) values ('antonio.cesar@w3sis.com', '$2a$04$qP517gz1KNVEJUTCkUQCY.JzEoXzHFjLAhPQjrg5iP6Z/UmWjvUhq');
