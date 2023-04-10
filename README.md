# Cars_Api

## Descripción

Esto es un API sencilla, basada en un CRUD (Create, Read ,Update, Delete). La cual, contiene 4 métodos concernientes a las silgas dichas.

## ¿Cómo correr el API?

1. Debe cerciorarse de que tiene instaladas las tecnologías: NodeJs y MySQL.
2. Agregar a una carpeta (preferiblemente vacías) los archivos contenidos en este reporitorio.
3. Abra una terminal que apunte a esta carpeta agregada y escriba el siguiente comando ```npm install```. Esto instalará todas las dependencias que requiere el proyecto.
4. Una vez instaladas todas las dependencias y tecnologías, siga las siguientes instrucciones para configurar el gestor de base de datos MySql.
4.1. Visite el archivo `server.js` para configurar la variable concerniente a la instancia de conexión SQL.
4.2. En la configuración del servidor, diríjase a la constante `DbOptions`.
4.3. Cambie los parámetros de la base de datos de acuerdo a las características de su instancia de mysql y el nombre que le colocó a la base de datos.
4.4. En la instancia de colocó, ejecute el siguiente código para crear la tabla sobre la que se hizo el CRUD. 
```
-- crear la base de datos
create database sample_api
-- apuntar a la base de datos
use sample_api
-- crear la tabla de carros (cars)
CREATE TABLE `Cars` (
  `car_id` int AUTO_INCREMENT,
  `make` varchar(19),
  `model` varchar(25),
  `year` year,
  `vin` varchar(25),
  `mileage` int,
  `price` decimal(10,2),
  `status` varchar(25),
  `location` varchar(50),
  PRIMARY KEY (`car_id`)
);
```

5. En el mismo archivo de `server.js` modifique el puerto sobre el cual desea corra el API de manera local.

### Consultar los distintos métodos o campos

#### Insertar carro.
Para insertar un carro, se utilza el siguiente enlace en la petición: `http://localhost:9000/api/insertcars`. Con un cliente http (preferiblemente **Postman**). Introduzca el cuerpo de la petición, en formato json, de la siguiente manera:
```
{
  "make": "Ford",
  "model": "Mustang",
  "year": 2022,
  "vin": "1FA6P8CF9L5145698",
  "mileage": 5000,
  "price": 32999.99,
  "status": "available",
  "location": "456 Broadway St, Anytown USA"
}

Esto es un ejemplo de data, puede cambiar los datos respetando el formato.
```
Asegúrese de realizar la petición en formato `post` con el cliente http.

#### Editar carro.

En esta petición, se utiliza el siguiente enlace: ```http://localhost:9000/api/updatecars/{id}```
Donde modificará el apartado de id, por el id real del carro que desea editar. Por ejemplo `http://localhost:9000/api/updatecars/1` en caso de que el id sea 1, esto es el parámetro de la petición. Este método únicamente edita el estado del id, por lo tanto; el cuerpo de la petición, también en formato json, será:
```
{
    "status" : "Available"
}
```
En este caso puntual, se colocará en estado *disponible* el carro con id=1. Asegúrese de realizar la petición en formato `post` con el cliente http.

#### Eliminar carro.

Para eliminar un carro en específico, se realizará igual que en el método anterior. Con el matiz de que, en este caso, solo es requerido el parámetro id. A partir de este enlace: `http://localhost:9000/api/deletecars/{id}`, por ejemplo, con el siguiente enlace se eliminará el carro con id = 2: `http://localhost:9000/api/deletecars/2`. Esta petición no requiere ningún cuerpo en formato json, únicamente el parámetro. Asegúrese de realizar la petición en formato `delete` con el cliente http.

#### Mostrar todos los carros.

Esta petición únicamente requiere acceder al enlace, sin cuerpo ni parámetros. A partir del siguiente enlace, podrá visualizar todos los carros insertados en la base de datos:
``http://localhost:9000/api/getcars``. Asegúrese de realizar la petición en formato `get` con el cliente http.


Todos estos métodos ofrecerán una respuesta en el siguiente formato:
```
{
    "message":"Car updated/deleted/inserted successfully"
}
```
Si recibe este mensaje, entonces ha realizado el proceso de manera correcta. De lo contrario, revise nuevamente los puntos y lea detenidamente el manual.


### Información de contacto

* **Mail**: 1099429@est.intec.edu.do o deivyjunior12@gmail.com
* **Teléfono**: +18297787625.


## Descripción de las GitHub Actions
* **assign-me.yml**. A partir de los pull requests, asigna al autor de dicho pull al repositorio en GitHub.
* **build-test.yml**. Hace build y test del proyecto cada vez que se haga push al repositorio.
* **documentation.yml**. Actualiza la documentación intrínseca del proyecto cada vez que se suban cambios al repositorio.
* **qa.yml**. Comprueba la calidad del código con cada push al repositorio.
* **security.yml**. Verifica las vulnerabilidades dentro del código fuente del proyecto con cada actualización del repositorio.