CREATE TABLE IF NOT EXISTS Profesor(
    id INTEGER PRIMARY KEY AUTOINCREMENT, 
    nombre TEXT,
    apellidos TEXT,
    domicilio INTEGER,
    email TEXT,
    fono TEXT,
    usuario TEXT,
    clave TEXT);

    
INSERT INTO Profesor
    ( nombre, apellidos, domicilio, email,fono,usuario,clave) VALUES 
    ('Cristian','Tapia Tamayo','Cordillera 637','cri.tapiat@duocuc.cl','+56974978240','ctapia','4928');

INSERT INTO Profesor
    ( nombre, apellidos, domicilio, email,fono,usuario,clave) VALUES 
    ('Fabian','Acuña Varas','12 de Octubre 7586','fa.acunav@duocuc.cl','+123456789','facuna','1234');