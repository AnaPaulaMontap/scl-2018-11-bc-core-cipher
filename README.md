# CifraRegalos

A todos nos a pasado alguna vez que nos regalan algo que no esta en nuestros gustos, que no es tu talla o simplemente no va con tu estilo, bueno ***CifraRegalos*** viene a solucionar esta problematica de manera sencilla y entretenida para entregar una lista de nuestros gustos y divertirnos un poco descifrando el de nuuestros amigos v/ compañeros de oficina / familia , etc.

![cipherChristmas](https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDzC1Dt59hamyiHHeGTuKHoYSRdl73IC0F-vlaoVQPxG5RuE1w)

## ¿Cómo puedo probarla?

Puedes conocer CifraRegalos en la siguiente dirección,

[CifraRegalos](https://anapaulamontap.github.io/scl-2018-11-bc-core-cipher/)

*Próximanente disponible para descarga moviles.*

## ¿Conoces el Cifrado Cesar?

El cifrado césar es una de las técnicas más simples para cifrar un mensaje, consiste en sustituir cada letra del texto original por otra que se encuentra un número fijo de posiciones más adelante en el mismo alfabeto.

Por ejemplo, si desplazamos 1 posición reemplazaríamos la letra A con la B, la B con la C, y así sucesivamente hasta sustituir la Z por la A.

- Abecedario sin cifrar : A B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z 
- Cifrado con  desplazamiento 1: B C D E F G H I J K L M N Ñ O P Q R S T U V W X Y Z A

Cuentan los antiguos escritos romanos que el emperador Julio César utilizaba este tipo de encriptación para cifrar sus mensajes militares y que sus enemigos no pudieran leerlos si capturaban al mensajero.

## ¿Como debo utilizarlo?

Muy facil! con CifraRegalos solo tienes que escribir la lista de deseos o favoritos que quieres enviar a tus amigos, elige con que desplazamiento quieres cambiar tus letras y listo!. Puedes copiar el texto y enviarselo a todos tus amigos. 


![Instrucciones](https://drive.google.com/open?id=1HhTCukz7U3soJOqbxvD5N_xOU84u4GQa)


## Objetivos de la Aplicación

El objetivo de CIfraRegalos es que todos los usuarios de esta aplicación ( oficinistas, familias, grupos de amigos) que jueguen al conocido Amigo Secreto y no sepan que regalar, generen esta lista de regalos de manera entretenida como una guia de gustos para que no les lleguen regalos equivocados y/o no equivocarse en regalar. 

Yo como *PARTICIPANTE*

necesito / deseo / quiero *ENTREGAR MI LISTA DEDESEOS/GUSTOS*

para *QUE LAS PERSONAS SEPAN QUE REGALARME* y 

para *SABER QUE REGALAR A MI AMIGO SECRETO*

|*Historia de Usuario*|
|-----------|
CifraRegalo ha sido creada para personas principalmente oficinistas que cada año en la epoca navideña deben jugar al tipico AMIGO SECRETO y que se le asigna una persona que no conoce y no tiene idea de sus gustos, en nuestro sitio se crea una dinamica previa al sorteo en que los integrantes del juego podrán entregar secretamente una lista de al menos 3 gustos o potenciales regalos como una guía para su amigo secreto. 

    a. Ejemplo de Usuario

Tenemos un usuario ejemplo llamada Rafaella de 30 años quíen comenzó a trabajar en una nueva empresa hace un mes, su equipo de trabajo propone realizar por las fiestas de fin de año un AMIGO SECRETO como una forma de compartir en estas fiestas, ella al estar recientemente en el equipo no tiene idea de que poder regalar y probablemente el compañero que le tenga que regalar a ella tampoco. Entonces ¿Cómo lo hacen?

Para esto hemos creado esta plataforma en donde se podrán codificar mensajes y ser enviados de forma simultanea a los compañeros de oficina para tener una guía en que regalar.

    b. Testeo  de Usuarios 

Se  realiza una prueba con dos usuarios,

- Pilar de 23 años (Trabajadora por sistema de turnos) prueba la aplicación y se encuentra con que las instrucciones no explican que significa de manera practica como codificar un mensaje y los pasos a seguir para poder descifrar el mensaje de los compañeros.


- Alberto de 55 años (Trabajador bancario) hace uso de la aplicación y considera que existen partes de la interfaz que la letra es poco clara y no se entiente, además de considerar que para decodificar la lista de mi compañero debería saber cuál fue su desplazamiento.

Luego de esto se considera lo siguiente:

    Las instrucciones fueron corregidas para que sea entendible de forma más clara y llamativa con palabras comunes, se corrigió el diseño de las fuentes para que no se superpongan con algún objeto de la aplicación y se completo la aplicación de manera Responsive para que sea utilizable en todos los dispositivos. 

    Para una próxima  versión se considera crear un prototipo de correo electrónico donde el usuario pueda enviar y recibir la lista de sus compañeros. 


|*Criterios de Aceptación*|
|-----------|
DADO – CUANDO – ENTONCES


1. Elegir Categoría
______________

DADO que me encuentro en la página de bienvenida,

CUANDO se lean las instrucciones,

ENTONCES se pedirá que elija una categoría.


2. Elegir Cifrar
____________

DADO que me encuentro en la página de cifrados
Y haya escrito el mensaje deseado,

CUANDO seleccione el desplazamiento de mi mensaje,

ENTONCES se codificara el mensaje. 



3. Elegir Descifrar
______________________

DADO que me encuentro en la página de descifrados y haya escrito el mensaje deseado,

CUANDO seleccione el desplazamiento de mi mensaje,

ENTONCES se codificara el mensaje. 


## Decisiones de Diseño


En esta aplicación tiene un diseño simple e intutivo, pensada para que los usuarios no tengan duda de su funcionalidad. 

1. Planificación
_________

El primer paso para la creación del diseño web fue la planificación de la app pensando siempre desde el ambito del usuario.

Pueder revisar la planificación [aquí](https://trello.com/b/UhhdwEqt/cifrado-cesar-1).

2. Pantallas
____

CifraRegalos esta pensada para tener un uso instuitivo de los usuarios por lo que solo contiene dos interfaces de pantalla, el primero nos permite leer las instrucciones de uso y luego pasar al cifrado o descifrado.

![Pantalla](https://drive.google.com/open?id=1vkVWeKu-QaCRMhv8s90W8hBu6nGJopWM)


3. Colores
____

Los colores e imagenes de la aplicación fueron utilizadas de manera descriptiva y fue utilizado el color rojo ya que invoca a la epoca navideña que es por excelencia donde más participamos de estos juegos. 


## Developers

CifraRegalos es una aplicación con `código` simple de funciones y condicionales que cifra todos los ascpectos del mensaje como mayúsculas, minúsculas y números negativos. 


## Versión Beta

Esperamos en las proximas actualizaciones facilitar aún más la experiencia del usuario y poder compartirla con las redes sociales o por correo electrónico.
