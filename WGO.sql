create database WGO;

create table Dados_Empresa (
CNPJ int primary key auto_increment,
Nome varchar(100),
Email varchar(100),
Telefone int,
CEP int,
num_endereco int
);

create table Dados_Contato (
id_Contato int primary key auto_increment,
Nome varchar(100),
Email varchar(100),
Telefone int,
Area varchar(100)
);

create table Dados_Prerencia (
id_Preferencia int primary key auto_increment,
Preferencia_contato varchar(100),
Ramo varchar(100)
);