
--insert into book (name) values ('O Guarani');
--insert into book (name) values ('O Tronco do Ipê');
--insert into book (name) values ('A Moreninha');
--insert into book (name) values ('O Alquimista');
--
--insert into book_item (name, book_id) values ('Capitulo 1 - Guarani 1', 1);
--insert into book_item (name, book_id) values ('Capitulo 2 - Guarani 2', 1);
--insert into book_item (name, book_id) values ('Capitulo 3 - Guarani 3', 1);
--
--insert into book_item (name, book_id) values ('Capitulo 1 - O Tronco do Ipê 1', 2);
--insert into book_item (name, book_id) values ('Capitulo 2 - O Tronco do Ipê 2', 2);
--insert into book_item (name, book_id) values ('Capitulo 3 - O Tronco do Ipê 3', 2);
delete from user_app_roles;
delete from role;
delete from user_app;
insert into role (id,name) values('354acf7b-816a-476e-9218-573d326e564f','ROLE_ADMIN');
insert into user_app (id,email, passwd) values ('75d3db32-cccc-413f-96dd-d5f967843270','jrcesar4@gmail.com', '$2a$04$qP517gz1KNVEJUTCkUQCY.JzEoXzHFjLAhPQjrg5iP6Z/UmWjvUhq');
insert into user_app_roles(user_app_id, roles_id) values ('75d3db32-cccc-413f-96dd-d5f967843270', '354acf7b-816a-476e-9218-573d326e564f');
insert into user_app (id,email, passwd) values ('893a78a2-1791-4623-bf53-5c3f2fb7afc5','antonio.cesar@w3sis.com', '$2a$04$qP517gz1KNVEJUTCkUQCY.JzEoXzHFjLAhPQjrg5iP6Z/UmWjvUhq');
