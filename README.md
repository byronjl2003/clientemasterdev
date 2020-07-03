#Version en produccion
Para ver la api en funcionamiento ir al siguiente link
# Proyecto CLIENTE para aplicar a plaza de Backend dev

Este proyecto consiste en una aplicacion cliente que consuma la API del proyecto.
link del repositorio(https://github.com/byronjl2003/masterDevBack) .

A continuacion se muestan unas pantallas de la aplicacion.

* imagen de como crear una llave
![key-secret][img1]

[img1]: https://raw.githubusercontent.com/byronjl2003/clientemasterdev/master/imagesdocs/uno.png "creacion llave"




* imagen de como el sistema detecta llave duplicada

![key-secret-error][img2]

[img2]: https://raw.githubusercontent.com/byronjl2003/clientemasterdev/master/imagesdocs/dos.png "llave duplicada"

PD: El boton de calcular signatura esta temas de pruebas. No es necesario utilizarlo antes para generar la signatura que se manda con la peticion.

* imagen de como crear un mensaje, con dos tags.

![crearmensage][img3]

[img3]: https://raw.githubusercontent.com/byronjl2003/clientemasterdev/master/imagesdocs/tres.png "Creacion de mensaje"

* imagen de como buscar un mensaje por ID.
![buscarmensaje][img4]

[img4]: https://raw.githubusercontent.com/byronjl2003/clientemasterdev/master/imagesdocs/cuatro.png "Buscar mensaje por id"

Nota: para saber el id del ultimo mensaje creado. Ver la consola del desarrollador, alli se imprime un objeto data con el id del mensaje. Es importante adjuntarle al campo 'Route' el path relativo incluyendo el id  como parametro.


* imagen de como buscar un mensaje por ID.
![resultado1][img5]

[img5]: https://raw.githubusercontent.com/byronjl2003/clientemasterdev/master/imagesdocs/cinco.png "resultado Busqueda mensaje por id"



* imagen de como buscar un mensaje por ID.
![resultado2][img6]

[img6]: https://raw.githubusercontent.com/byronjl2003/clientemasterdev/master/imagesdocs/seis.png "resultado Busqueda mensaje por tag"

Nota: Es importante adjuntarle al campo 'Route' el path relativo incluyendo el tag de busqueda.

---
## Mas detalles de la aplicacion
Este proyecto es una aplicacion reactica   realizada con el framework/Libreria React.

## Requerimientos

Para entornos de desarrollo solo se necesitara de Nodejs instalado en tu equipo, asi como tambien los siguientes paquetes:

* React
* crypto-js
 

### Node
- #### Instalacion de Node en Windows

  Ir a la pagina oficial de Node [official Node.js website](https://nodejs.org/) y descargar el instalador.

  Tener en cuenta en configurar tus variables de entorno para acceder a `npm`

- #### Instalacion de Node en sistemas Unix/Linux

    Tienes la opcion de instalar linux atraves del gestor de paquetes nativo.
    Por ejemplo en Ubuntu solo bastara de los siguientes comandos:
      $ sudo apt install nodejs
      $ sudo apt install npm




## Instalacion y descarga de dependencias

    $ git clone https://github.com/byronjl2003/clientemasterdev
    $ cd NOMBRE_PROYECTO
    $ npm install


## Para correr el proyecto

    $ npm start

