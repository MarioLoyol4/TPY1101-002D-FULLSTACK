DROP TABLE IF EXISTS usuarios;


CREATE TABLE usuarios (
    id_usuario BIGINT AUTO_INCREMENT PRIMARY KEY,
    usuario VARCHAR(50) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL
);


INSERT INTO usuarios (usuario, password) VALUES 
('admin', 'admin123'),
('jperez', 'clave123'),
('mrodriguez', 'pass456'),
('cgonzalez', 'qwerty'),
('lsepulveda', '12345678'),
('evaluador', 'eval123');