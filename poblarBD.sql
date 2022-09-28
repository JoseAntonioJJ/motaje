--poblando tabla peluquerias

INSERT INTO agenda.peluquerias ( nombre, direccion, telefono, peluquerias.password)
VALUES ('Mari Loly Style','Calle Hermosa 19','+34555444333','mariloli'),
('Deluxe Style','Avd Fallera 12 (Valencia)','+34666555444','deluxe');

--poblando usuarios

INSERT INTO agenda.usuarios (usuarios.telefono, usuarios.password, usuarios.id_peluqueria, usuarios.email, usuarios.nombre)
VALUES
('+34666777888','paquita',1,'paquita@correo.es','paquita la zurda'),
('+34555777888','begoña',2,'begoña@correo.es','begoña chaflana'),
('+34444777888','macarena',1,'macarena@correo.es','macarena mojada'),
('+34333777888','dolores',1,'dolores@correo.es','dolores la sonrisas'),
('+34222777888','remedios',2,'remedios@correo.es','remedios fuertes');

--poblando servicios