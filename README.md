
# Autored - Test Full-Stack

Por medio de este test se evaluarán algunos de tus conocimientos que nos interesan como desarrollador.




## Instrucciones

    - Duplica el proyecto
    - Cambiar su visibilidad a privado
    - Agrega al usuario autoredteam como colaborador dentro del repositorio
    - Desarrollar lo que se indica
    - Adjuntar imagenes (Ejercicio 1.1), código (Ejercicio 1.2) y documentos necesarios para revisar el test.
    - Notificar mediante email a dventura@autored.cl cuando este listo y enviar el link del repositorio privado.


## Ejercicio 1 - Modelado de datos y consultas SQL

#### Contexto del problema
Los   informes   Autosafe   son   documentos   que   permiten   conocer el
historial 100% actualizado de cualquier vehículo usado en el país (chile). 
Este informe posee información como: Encargo por robo, Multas anotadas, Pérdida total, Revisiones técnicas y muchas más.

#### Requisitos
1 - Diseñar un   modelo  E/R  que   permita   gestionar   la   venta   de   informes   autosafe
cumpliendo los siguientes requisitos:
 - Un cliente puede comprar uno o varios informes ingresando la patente del vehículo y su correo.
 - Un informe posee fecha de emisión y estado del informe **(error, entregado)**.
 - El informe tiene un precio de venta de $5.990 (CLP).
 - El pago se puede realizar mediante 2 pasarelas de pago **(kiphu o transbank)**.


2 - Según el modelo E/R creado el punto anterior, se solicita escribir las siguientes consultas SQL.

- Se requiere el correo de todos los clientes que hayan comprado más de un informe a la vez mediante la pasarela de pago 'transbank'.
- Devuelve todos los informes comprados que han sido entregados al cliente juan_daniel@gmail.com **sin utilizar JOIN**.

#### En qué nos fijaremos

- Correcto modelamiento de datos (puedes diseñar tu modelo [aquí](https://draw.io)) 
- Uso de relaciones **(1:1 Uno a uno, 1:N Uno a muchos , N:N Muchos a muchos)**
- Correcta estructura de consultas sql
- Escribe tus querys [acá](querys.sql)
## Ejercicio 2 - Algoritmo JS

#### Contexto del problema

Autored posee un sistema de transferencias de vehículos que permite a sus clientes realizar la compra y venta de automóviles.

El principal problema consiste en prevenir que múltiples usuarios inicien el flujo de transferencias para un mismo vehículo
y así evitar que exista duplicidad de contratos y posibles estafas.
#### Algunos puntos a considerar:

- Se puede crear múltiples transferencias con una misma patente y distinto correo.
- Se puede crear solo 1 transferencia con misma patente y mismo correo.
- Si la transferencia está en estado **'FINALIZADA' o 'ABORTADA'**, entonces se permite crear otra transferencia con misma patente y mismo correo.
- Si una de las transferencias está **'PAGADA'**, entonces no se permiten crear más transferencias con la misma patente (sin importar el correo del usuario)
- Si hay múltiples transferencias con misma patente y distinto correo, y una de estas transferencias avanza al estado **'PAGADA'**, entonces todas las otras transferencias cambian al estado **'ABORTADA'**.
- Todos los campos de la transferencia son requeridos.
- Una patente válida tiene las siguientes características:
    * AAAA00 => **4 letras y 2 números**.
    * AA0000 => **2 letras y 4 números**.
    
#### Requisitos mínimos:

- Crear una función para listar todas las transferencias de un usuario mediante su correo.
- Crear una función para crear una nueva transferencia validando que todos los datos sean ingresados correctamente.
- Crear una función para pagar una transferencia mediante correo y patente.
#### En qué nos fijaremos:

- Código legible y buenas prácticas de programación.
- Utilización de ES6 y Arrow Function.
- Test unitarios. **(Bonus)**
- Escribe tu código [acá](codigo.js)


