
# Prueba Técnica - Frontend Angular
### Información
- Nodejs: 18.10.0
- Angular cli: 16.2.4
- npm: 9.1.0
### Funciones:
- Listar peliculas
- Filtrar peliculas por nombre
- Filtrar peliculas por descripción
- Filtrar peliculas por Género
- Selección de multiples géneros para filtrar
- Buscador de peliculas
- Eliminar género seleccionado

## Consideraciones:
#### Instalar dependencias
Ejecutar:
```console
npm install
```
#### Ejecutar Json Server
Ejecutar el comando:
```console
json-server --watch db.json -p 3001
```
para levantar el servidor local para consultar los datos json brindados.

#### Ejecutar proyecto
Ejecutar:
```console
ng serve
```

## Observaciones

#### Axios y HttpClient
Se utilizo axios por requerimiento del documento pero angular maneja lo que es HttpClient para manejar las peticiones lo cual es más optimo utilizar.

## Notas
Puedo cambiar el puerto y baseUrl en los environments.



