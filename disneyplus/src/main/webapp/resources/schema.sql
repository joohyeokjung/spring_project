create table member (
email varchar(100) not null,
pwd varchar(1000) not null,
grade tinyint default '10',
reg_at datetime default now(),
last_login datetime default null,
profile_limit tinyint default '4',
primary key (`email`)
);

create table profile (
pno bigint not null auto_increment,
email varchar(100) not null,
profile_name varchar(100) not null,
pin int(10) default null,
icon text not null,
kids int(10) not null,
locked boolean default false,
primary key (`pno`)
);

create table watch_list (
wno bigint not null auto_increment,
mno bigint not null,
email varchar(100) not null,
title varchar(100) not null,
profile_name varchar(100) not null,
primary key (`wno`)
);

create table auth_member (
email varchar(100) not null,
auth varchar(100) default 'ROLE_USER'
);

create table media(
mno bigint not null auto_increment,
title varchar(100) not null,
description text not null,
company varchar(100) not null,
genre varchar(100) not null,
movie boolean not null,
read_count bigint default '0',
opening_year datetime not null,
media text default null,
bg_img text not null,
primary key(`mno`)
);

create table season(
sno bigint not null auto_increment,
mno bigint not null,
media text default null,
title varchar(100) not null,
season int(10) not null,
thumbnail text not null,
primary key (`sno`)
);

create table m_char (
chno bigint not null auto_increment,
mno bigint not null,
character_name varchar(100) not null,
primary key (`chno`)
);

create table review(
rno bigint not null auto_increment,
mno bigint not null,
email varchar(100) not null,
profile_name varchar(100) not null,
content text not null,
score int(10) not null,
mod_at datetime not null,
primary key(`rno`)
);

create table goods (
gno bigint not null auto_increment,
gname varchar(100) not null,
description text not null,
image text not null,
company varchar(100) not null,
kinds varchar(100) not null,
mod_at datetime not null,
primary key (`gno`)
);


create table goods_review(
grno bigint not null auto_increment,
gno bigint not null,
email varchar(100) not null,
profile_name varchar(100) not null,
content text not null,
score int(10) not null,
mod_at datetime not null,
primary key (`grno`)
);

create table cart (
cno bigint not null auto_increment,
email varchar(100) not null,
gno bigint not null,
address text not null,
gname varchar(100) not null,
profile_name varchar(100) not null,
primary key (`cno`)
);