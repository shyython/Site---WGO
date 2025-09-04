create database wgo;

create table Dados_Empresa (
CNPJ int primary key auto_increment,
Nome varchar(100),
emailEmpresa varchar(100),
Telefone int,
CEP int,
num_endereco int
);


CREATE TABLE usuarios (
    id_usuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(100) NOT NULL,
    nomeUsuario VARCHAR(50) NOT NULL,
    emailUsuario VARCHAR(100) NOT NULL UNIQUE,
    senhaUsuario VARCHAR(100) NOT NULL			
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
INSERT INTO Eventos (Nome_Evento, Categoria, Endereco, Tipo, Horario, Descricao, Img1, Img2, Img3, Img4)
VALUES 
('Restaurante Dboa Mexicano', 'Restaurante', 'Av. Pedro Lessa,2234 (Santos/SP)', 'Mexicano', '11:30-00:30', 'Dboa Mexicano é um restaurante de comida mexicana localizado na Avenida Pedro Lessa, 2324, em Santos. Com um ambiente acolhedor e vibrante, O Dboa Mexicano oferece uma experiência gastronômica autêntica e deliciosa, destacando-se pela variedade de pratos tradicionais mexicanos e latino-americanos No Dboa Mexicano, Mexicano, você encontrará desde tacos e burritos recheados com ingredientes frescos e saborosos, até ceviches e pokes que trazem um toque contemporâneo à culinária latina. Além disso, o restaurante é conhecido por suas opções vegetarianas e pratos à la carte, garantindo que todos os clientes encontrem algo que agrada ao paladar.', 'https://media-cdn.tripadvisor.com/media/photo-m/1280/19/ca/cb/0d/photo2jpg.jpg', 'https://scontent-gru1-2.cdninstagram.com/v/t39.30808-6/480503868_661643609777031_8311981747630123228_n.jpg?stp=c0.0.1638.2048a_dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE2Mzl4MjA0OC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QH3mItNUcSiB9fTEIDw2gv1dh-4SsOAi2vSKi2V6MjT6mHee7JUdU6rhJR1iAjZUOj0oCGgYkZL2qF1zEdxYuMN&_nc_ohc=u_kmOOYSfIcQ7kNvwGi9dl_&_nc_gid=awlipsbj44ZhbwIAJWdWQQ&edm=AP4sbd4AAAAA&ccb=7-5&ig_cache_key=MzU5MTA3OTczNDE4NDAwNjA1Ng%3D%3D.3-ccb7-5&oh=00_AfUzcF1LFPxYrf4UpyAqgT0hENV43AEhL86sk0b5xgrvsw&oe=68AECF39&_nc_sid=7a9f4b', 'https://scontent-gru2-2.cdninstagram.com/v/t39.30808-6/525339285_766435515964506_3531436152382137862_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE2Mzh4MjA0OC5zZHIuZjMwODA4LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=106&_nc_oc=Q6cZ2QFlvpaW4b5edGBYuoVNC6U-QHOY22bYYVWwDZqZ_4Rp73Vv2fQnAmqIiapwW8dW72RqJDXAGV6OHEt4KkfV27Zs&_nc_ohc=FAjfB7-nBT4Q7kNvwF9wRtT&_nc_gid=G4H_2tVv_VArnaVkar9KWQ&edm=APoiHPcAAAAA&ccb=7-5&ig_cache_key=MzY5Mzk4MjE0Mjg0Njg1NTQ3OQ%3D%3D.3-ccb7-5&oh=00_AfV7ZR3xyIelXFzNYDPLeCAAXMrPJnYKN2nKu4DNLRFndQ&oe=68AEA2AB&_nc_sid=22de04', 'https://tassioricardo.wordpress.com/wp-content/uploads/2012/11/20121103-205611.jpg' ),
('Bistro Calixto', 'Restaurante', 'Av. Bartholomeu de Gusmão, 15 Santos/Sp', 'Café', '09:30 – 22:30', 'A criação de um bistrô, nos moldes europeus, foi amplamente incentivada pelos clientes frequentadores do Catalina que sempre elogiaram a Chef Vera e sua equipe pelos pratos criados, pelo carinho e, especialmente, pela forma de atendimento. O início foi avassalador. Apenas no primeiro mês foram atendidas mais de 4.000 pessoas. Através das críticas e sugestões percebemos a necessidade da ampliar o quadro de colaboradores e a criar cardápios que atendessem às exigências de nossos clientes.', 'https://www.turismosantos.com.br/static/files_turismosantos/styles/lateral/public/Bistro%20Calixto%203.jpg?itok=x6SwXMmH', 'https://www.turismosantos.com.br/static/files_turismosantos/styles/large/public/Bistro%20Calixto.jpg?itok=IrH_qlZl', 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-15/518881723_17873163006390087_8054775563399609915_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTgwMC5zZHIuZjgyNzg3LmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QHXPuqE3qRhlKu-kpxQEs5XQG20K3lzxsH2vBDPFWOzmueZakFj1MXzMPksaqdKTaFbwNFCng4sEWuaVhrbvGEZ&_nc_ohc=sWq8iHwBbQYQ7kNvwFz9ayc&_nc_gid=FRCLg2jCuIUQHw6H605bMw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzY3NTI2Mzg2NjQ5NDc2NDk3MQ%3D%3D.3-ccb7-5&oh=00_AfUwOkhVPbnVnEd3RhA6GSjqv3iWCc6HkMxfike-qZTd2A&oe=68B3CB2D&_nc_sid=22de04', 'https://scontent-gru2-2.cdninstagram.com/v/t51.2885-15/469111793_18361043137137185_5039058827457363136_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkNBUk9VU0VMX0lURU0uaW1hZ2VfdXJsZ2VuLjE0NDB4MTc4OS5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru2-2.cdninstagram.com&_nc_cat=105&_nc_oc=Q6cZ2QGWDHtqsVLd2ju1YVwMnlSOLsl8ucJkrLBtEhXHemcjMXv-k286aq4q_VF94wQ7poRgNv5MdL6XJCcC1cfGCQ7M&_nc_ohc=S14WBZqpoSMQ7kNvwEIyGEy&_nc_gid=vqf1rKsJKZqiLYu8GUaWtg&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzUxMzYzNDEwMjk2MjQ3ODk4OQ%3D%3D.3-ccb7-5&oh=00_AfVMOIeJxsCnRwTrXCTuplLWvauy-IXk4gxkN9-Zh36nfQ&oe=68B3DA0E&_nc_sid=22de04'),
('Jhonny Rockets', 'Restaurante', 'Av. Ana Costa, 555 -  Gonzaga, Santos/SP', 'Americano', '12:00 – 00:00', 'QUEM SOMOS Johnny Rockets é uma franquia internacional de restaurantes que oferece itens de cardápio inovadores e de alta qualidade, incluindo hambúrgueres, batatas fritas feitas à mão, ambos sempre frescos. Apresentamos um toque moderno no conceito clássico de american dining – com assentos confortáveis e áreas perfeitas para se reunir com amigos e família, serviço acessível e música que combina clássicos icônicos com a cultura pop. Fundado em 1986, Johnny Rockets opera mais de 380 restaurantes entre lojas próprias e franquias em 33 países ao redor do mundo.', 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-15/483162873_17870518662315495_4668107610418706415_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QHyKSU1IwMXM_LDgW5Wg57lb6On0R2GcYX3TY92PfNwydOA1pPx3LAWUz6mOq0HR57X_KvVoLvlBzDQS0jueryQ&_nc_ohc=6skghMMfiMIQ7kNvwGMhBaR&_nc_gid=H0tkM1j8zLg4f_k9dErZcw&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU4MzM0NjM2MTE5MTc5NjUxMg%3D%3D.3-ccb7-5&oh=00_AfU6-FdTfzca_BcHxjfibn2uKIT5xO5SqBEAxGtJRt5mJw&oe=68B3C499&_nc_sid=22de0', 'https://scontent-gru1-2.cdninstagram.com/v/t51.2885-15/490687258_17875825962315495_2326863426608959518_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QF8fKsaB61MiG2uEUM4ws4hBim7wKTjya_XKYGkgsfnvKxAQm6E4X2uVXGTHZlXSu_bNWsGDKkWuDPx0wLgaBQB&_nc_ohc=zkCTo8IKfpwQ7kNvwE8StOU&_nc_gid=ogrGPO7VA5zc6qSdx6vavQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzYxNDk0NDAxODI2Njc0NTA3Mg%3D%3D.3-ccb7-5&oh=00_AfUSbviviS-FuPp87ZaEeS0TR3uVLa7mkv3a7ikRNPJ5Bw&oe=68B3ECE0&_nc_sid=22de04%201080w,https://scontent-gru1-2.cdninstagram.com/v/t51.2885-15/490687258_17875825962315495_2326863426608959518_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6IkZFRUQuaW1hZ2VfdXJsZ2VuLjEwODB4MTM1MC5zZHIuZjc1NzYxLmRlZmF1bHRfaW1hZ2UuYzIifQ&_nc_ht=scontent-gru1-2.cdninstagram.com&_nc_cat=103&_nc_oc=Q6cZ2QF8fKsaB61MiG2uEUM4ws4hBim7wKTjya_XKYGkgsfnvKxAQm6E4X2uVXGTHZlXSu_bNWsGDKkWuDPx0wLgaBQB&_nc_ohc=zkCTo8IKfpwQ7kNvwE8StOU&_nc_gid=ogrGPO7VA5zc6qSdx6vavQ&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzYxNDk0NDAxODI2Njc0NTA3Mg%3D%3D.3-ccb7-5&oh=00_AfUSbviviS-FuPp87ZaEeS0TR3uVLa7mkv3a7ikRNPJ5Bw&oe=68B3ECE0&_nc_sid=22de04%201080w', 'https://johnnyrockets.com.br/wp-content/uploads/2025/01/santos2.jpg', 'https://johnnyrockets.com.br/wp-content/uploads/2020/10/paulista.jpg'),  
('Baraçai – Unidade Tolentino', 'Restaurante', 'R. Tolentino Filgueiras, 75 - Gonzaga, Santos/SP', 'Havaiana', '12:00 – 23:30', 'Um espaço que combina descontração, boa gastronomia e um ambiente acolhedor. Com decoração rústica e toques vibrantes, o Baraçaí oferece muito mais do que um simples jantar: é uma experiência. A atmosfera é animada, com música que embala a noite e cria o cenário perfeito para encontros descontraídos, celebrações especiais ou até mesmo um jantar casual. Seja para apreciar um bom prato ou apenas relaxar com uma bebida, o Baraçaí é uma ótima escolha para quem deseja vivenciar a vida noturna da cidade com estilo e sabor.', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdLz-ZGKcruqrCY8BzrGbURSOEqUK59F7rYA&s', 'https://lh3.googleusercontent.com/gps-cs-s/AC9h4npBO3IE2kFAnqtX6cZvxX8nKMua6GtWCXTyPVut2yTCDgxZM8Q4jCYYVJDGIhqem8D_94UJLHSv_Dsj07u9_EN7sCvWrQmVhJLBa98GXwj3Fj2HMn2fCHAF7gg2xIsHrr-_bu_RCg=s1360-w1360-h1020-rw', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmG00TxOcVQczJSciM26thu6DNEr6ZXTyx5g&s', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWQfss3A_vgpvv087McSa3M23AFHIy_fgDLA&s'),  
('Bolsa do café', 'Cultural', 'R. Quinze de Novembro, 95 - Centro, Santos/SP', 'Museu', '09:00 – 18:00', 'Bolsa de Café, ou o Palácio da Bolsa Oficial de Café, foi um centro de negociação de café e atualmente é um museu localizado na rua XV de Novembro, no centro histórico do município de Santos, estado de São Paulo, Brasil. Após um restauro realizado em 1998, o palácio foi reinaugurado como o Museu do Café', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlgeAF-2xUZZsWtQE_7l7OMwO8hJefqyp_kA&s', 'https://www.santos.sp.gov.br/static/files_www/styles/newspagesimples/public/field/image/isabela_carrari_5275_0.jpg?itok=GceDOB4p', 'https://marcozero.blog.br/wp-content/uploads/2020/03/francisco_arrais_0992-800x400.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFlFQeyAs79RWzJ_qaj1O584b5zuoBUkg7NqWjqRrSBZk8Q26Ph2sletniJEkpsj_EMvI&usqp=CAU'),  
('Pinacote Benedito Calixto', 'Cultural', 'Av. Bartholomeu de Gusmão, 15 - Boqueirão, Santos/SP', 'Museu', '09:00 – 18:00', 'A Fundação Pinacoteca Benedicto Calixto, está localizada no imóvel conhecido como Casarão Branco do Boqueirão em Santos, um exemplar da época áurea do café no Brasil. Foi construído em 1900 pelo alemão Anton Carl Dick, que em 1910, por motivos familiares, sai do Brasil, desfazendo-se do imóvel.', 'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0e/65/66/85/lado-externo.jpg?w=800&h=400&s=1', 'https://www.turismosantos.com.br/static/files_turismosantos/styles/simples/public/MARCELO%20MARTINS4945.jpg?itok=14Kx8UE6', 'https://www.pinacotecadesantos.org.br/assets/img/backgrounds/pinacotecadigital1.png', 'https://www.santos.sp.gov.br/static/files_www/styles/newspagesimples/public/field/image/isabela_carrari_6143.jpg?itok=YgUWTTm6'),  
('Museu Pelé', 'Cultural', 'Largo Marquês de Monte Alegre, 1 - Valongo, Santos/SP', 'Museu', '10:00 – 17:30', 'Museu Pelé é um museu na cidade de Santos, dedicado à carreira do ex-jogador Pelé. Foi inaugurado em 15 de junho de 2014, como parte dos eventos paralelos à Copa do Mundo FIFA de 2014. Sua construção chegou a ser contestada por conta dos altíssimos valores envolvidos nas obras.', 'https://amabrasil.org.br/wp-content/uploads/2017/07/Vector-Smart-Object7-01.jpg', 'https://www.santos.sp.gov.br/static/files_www/styles/newspagesimples/public/field/image/mueseu_gerall_abre.jpg?itok=Gr0e2WA6', 'https://viajanteeconomica.com.br/wp-content/uploads/2023/06/ESTATUA-PELE-rotated-e1686227976421.jpg', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBYmOey0Sa__xof984rN_QW62p7Nm40Yc98g&s'),  
('Feirarte', 'Cultural', 'Praça Ribeiro de Moraes e Silva – Santos/Sp', 'Feira', '16:00 – 21:00', 'A Feira de Produtos Artísticos e Artesanais (Feirarte) reúne trabalhos de diversos expositores e traz barracas com artesanato, bijouterias, roupas, sapatos, bolsas, artigos esotéricos e presentes em geral, além de praça de alimentação com diversidade gastronômica. Aos domingos, a Feirarte acontece no bairro da Aparecida, na praça em frente ao Sesc Santos.', 'https://www.turismosantos.com.br/static/files_turismosantos/styles/large/public/field/image/feirart_raimundo_rosa.jpg?itok=G0rtLgsx', 'https://www.sescsp.org.br/wp-content/uploads/2022/02/03.2022-Acoes-para-a-Cidadania-Feira-Cultural-Independente-1.jpg', 'https://www.santos.sp.gov.br/static/files_www/styles/newspagemodal/public/field/image/chico7.jpg', 'https://www.santos.sp.gov.br/static/files_www/styles/large/public/field/image/galeria/chico10.jpg?itok=WDOhuiq3'),  
('Play Jump', 'Entreterimento', 'R. Amazonas, Vila Belmira  - Santos/SP', 'Diversão', 'A revelar', 'O maior parque de entretenimento da Baixada Santista é real e logo você vai poder conhecer!.', ' https://cdn.dooca.store/5819/products/p5g5nss26znklloki2krxrx6qjfpiotbtthv_640x640+fill_ffffff.jpg?v=1630884341&webp=0', ' https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/d8/79/74/queimada.jpg?w=1200&h=1200&s=1', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc0lQyLN7FghUl_WuPuB6MIxlzjaqHykrOuw&s', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPGzoWhK3YRm6xhbbk5RXFS_Ed_owbUFFmy7lPruCoBdXXIOHAIKbNjDCbOopsBuywHdU&usqp=CAU'),  
('Cine Roxy 5', 'Entreterimento', ' Av. Ana Costa, 443 - Gonzaga, Santos/SP', 'Cinema', '13:00 – 21:00', 'O "Cine Roxy 5" é uma sala do tradicional complexo de cinemas Cine Roxy em Santos, SP, e a história é a do próprio cinema, que tem mais de 90 anos, tendo sido fundado em 1933. O Cine Roxy 5 é a unidade principal do cinema de rua e sua história inclui inovações como ser o primeiro cinema de Santos com ar-condicionado, digitalização completa em 2015 e participação em programas de inclusão social e apoio a cineastas locais. ', ' https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhAg72DtQqdiXL9ELpPrHwlGqXaI1e2ePwnLZBKOohLhefhxmLyuH62UBPYXGp-A12iv8eSq_qSslTSC1alIi2upNWz_4gmP57DeTHEJZT10ufqw5q3TKemgZT7yABt7JxD7vgfCGACxFY/s1600/01.JPG', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrFfhFJOP0GCn0dpmFHA_0si5mDyOpvqdHZw&s', ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjZjGl0mC5FTg3cPVd0LvzuComDTC9YtS0Lg&s', ' https://www.cineroxy.com.br/Arquitetura/Imagens/internas/roxy06-01.jpg');

CREATE TABLE eventosDestaques (
    id INT AUTO_INCREMENT PRIMARY KEY,
    cidade VARCHAR(50) NOT NULL,
    nome VARCHAR(100) NOT NULL,
    imagem VARCHAR(255) NOT NULL,
    legenda VARCHAR(255) NOT NULL
);

INSERT INTO eventos (cidade, nome, imagem, legenda) VALUES
('sao-paulo', 'The Town', 'imagens/the-town.jpg', 'Maior festival de música de SP'),
('sao-paulo', 'Lollapalooza', 'imagens/lolla.jpg', 'Festival com artistas incríveis'),
('sao-paulo', 'Bapho', 'imagens/bapho.jpg', 'Evento LGBTQIA+ com muita música'),
('rio-de-janeiro', 'Rock in Rio', 'imagens/rockinrio.jpg', 'O maior festival do Brasil'),
('rio-de-janeiro', 'Ensaios da Anitta', 'imagens/anitta.jpg', 'Show especial da Anitta'),
('rio-de-janeiro', 'Show da Katy Perry', 'imagens/katy.jpg', 'Turnê mundial no RJ');

