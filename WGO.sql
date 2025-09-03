create database WGO;




CREATE TABLE Dados_Empresa (
   Id_Dados_Empresa INT AUTO_INCREMENT PRIMARY KEY,
   CNPJ VARCHAR(20) NOT NULL,
   Nome_Social VARCHAR(100) NOT NULL,
   Nome_Fantasia VARCHAR(100),
   Email VARCHAR(100),
   Telefone VARCHAR(20),
   CEP VARCHAR(15)
);


INSERT INTO Dados_Empresa (CNPJ, Nome_Social, Nome_Fantasia, Email, Telefone, CEP) VALUES
 (‘22.520.649/0004-19’, ‘DBOA COMERCIO DE ALIMENTOS LTDA’, ‘Dboa Mexicano’,’contato@dboaemcasa.com.br’, ‘13996566854’,’11025002’); 

(Dados coletatos por consultacnpj.redesim.gov.br)



CREATE TABLE Dados_Contato (
   Id_Dados_Contato INT AUTO_INCREMENT PRIMARY KEY,
   Nome VARCHAR(100) NOT NULL,
   Email VARCHAR(100),
   Telefone VARCHAR(20),
   Area VARCHAR(50)
);


INSERT INTO Dados_Contato (Nome, Email, Telefone, Area) VALUES (); 



CREATE TABLE Dados_Preferencia (
   Id_Preferencia INT AUTO_INCREMENT PRIMARY KEY,
   Descricao VARCHAR(255)
);


INSERT INTO Dados_Preferencia (Descricao) VALUES (); 



CREATE TABLE Eventos (
   Id_Evento INT AUTO_INCREMENT PRIMARY KEY,
   Nome_Evento VARCHAR(100) NOT NULL,
   Categoria VARCHAR(50),
   Endereco VARCHAR(150),
   Tipo VARCHAR(50),
   Horario varchar(30),
   Descricao TEXT,
   Img1 text,
   Img2 text,
   Img3 text,
   Img4 text
);



INSERT INTO Eventos (Nome_Evento, Categoria, Endereco, Tipo, Horario, Descricao, Img1, Img2, Img3) VALUES
 (‘Restaurante Dboa Mexicano’, ‘Restaurante’, ‘Av. Pedro Lessa,2234 (Santos/SP)’, ‘Mexicano’, ’11:30-00:30’, ‘Dboa Mexicano é um restaurante de comida mexicana localizado na Avenida Pedro Lessa, 2324, em Santos. Com um ambiente acolhedor e vibrante, O Dboa Mexicano oferece uma experiência gastronômica autêntica e deliciosa, destacando-se pela variedade de pratos tradicionais mexicanos e latino-americanos No Dboa Mexicano, Mexicano, você encontrará desde tacos e burritos recheados com ingredientes frescos e saborosos, até ceviches e pokes que trazem um toque contemporâneo à culinária latina. Além disso, o restaurante é conhecido por suas opções vegetarianas e pratos à la carte, garantindo que todos os clientes encontrem algo que agrada ao paladar.’); 



CREATE TABLE Usuarios (
   Id_Usuario INT AUTO_INCREMENT PRIMARY KEY,
   Nome VARCHAR(100),
   Username VARCHAR(50),
   Data_Nasc VARCHAR(30),
   Email VARCHAR(100),
  Telefone VARCHAR(30),
   Senha VARCHAR(255,
   Foto VARCHAR(255),
   Descricao TEXT
);
