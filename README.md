# Clínica Pichicata
### Trabajo Práctico Final Laboratorio IV - UTN FRA
![](https://github.com/fmorales86mb/tp-final-v3/blob/master/src/assets/images/apple-icon-180x180.png)

La clínica Pichicata, cuenta con consultorios, laboratorios y una sala de espera general. Está abierta al público de lunes a viernes en el horario de 8:00 a 19:00, y los sábados en el horario de 8:00 a 14:00. Trabajan en ella profesionales de diversas especialidades, que ocupan los consultorios acorde a su disponibilidad, y reciben en ellos pacientes con turno para consulta o tratamiento. Dichos turnos son pedidos por la web seleccionando el profesional o la especialidad. Estos profesionales pueden tener más de una especialidad. También contamos con un sector dentro de la clínica que se encarga de la organización y administración de la misma.

## Home
Los que visiten esta aplicación van a ser dirigidos en primera instancia al home de la clínica. Desde acá se va a poder acceder al registro del usuario y al ingreso del mismo.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-25-01%20Cl%C3%ADnica%20Pichicata.png)

## Ingreso
Desde acá se va a poder ingresar al sistema. Es necesario estar registrado previamente. Para el ingreso se requiere el email y la contraseña. También se cuenta con botones de acceso rápido.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-28-14%20Cl%C3%ADnica%20Pichicata.png)

## Registro
En esta sección vamos poder elegir con qué rol nos queremos registrar (especialista o paciente). Una vez elegido el tipo de registro vamos a completar un formulario en dos pasos. 

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-29-03%20Cl%C3%ADnica%20Pichicata.png)

Al confirmar se va a mostrar un captcha para validación.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-31-22%20Cl%C3%ADnica%20Pichicata.png)

## Pacientes

### Home
Una vez logueado el usuario va a ser dirigido a esta vista que va a contener un encabezado con su email y los accesos a las diferentes secciones. También va a poder habilitar o deshabilitar el captcha.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-31-51%20Cl%C3%ADnica%20Pichicata.png)

### Mi perfil
En esta sección va a poder ver una card con sus datos personales, incluyendo imágenes cargadas, y va a poder ver su historia clínica y descargarla en pdf. 

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-32-17%20Cl%C3%ADnica%20Pichicata.png)

Cada ítem de la historia clínica fue cargada por un especialista y tiene un botón que despliega un modal con el detalle de la historia seleccionada.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-32-28%20Cl%C3%ADnica%20Pichicata.png)

### Solicitar Turno
Desde esta sección vamos a poder tomar un nuevo turno. Para esto primero seleccionamos la especialidad, luego un especialista y por último se nos presenta una lista de los turnos libres en los próximos 15 días. Si se encuentra habilitado el captcha, al confirmar el turno se va a mostrar un captcha para validación.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-18%20Cl%C3%ADnica%20Pichicata.png)

### Mis Turnos
Acá vamos a poder ver el listado de los turnos tomados por el paciente y tenemos la opción de descargar el pdf con todos los turnos o sólo con los atendidos. Este listado cuenta con un filtro por especialista, especialidad e historia clínica. 
Haciendo click en cualquiera de esos turnos se va al detalle del mismo, donde vamos a poder completar la encuesta, calificar la atención y cancelarlo (según el estado en el que esté).

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

## Especialista

### Home
Una vez logueado el usuario va a ser dirigido a esta vista que va a contener un encabezado con su email y los accesos a las diferentes secciones. También va a poder habilitar o deshabilitar el captcha.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Mis Turnos
Acá vamos a poder ver el listado de los turnos tomados para el especialista y tenemos la opción de descargar el pdf con todos los turnos. Este listado cuenta con un filtro por especialista, especialidad e historia clínica. Haciendo click en cualquiera de esos turnos se va al detalle del mismo, donde el especialista va a poder cambiar el estado del mismo, agragar reseña, comentario y cargar un item de historia clínica de ese paciente.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Historia clínica
La historia clínica cuenta con campos obligatorios y 6 campos opcionales. Si se encuentra habilitado el captcha, al guardar el historial se va a mostrar un captcha para validación.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Mis Pacientes.
Desde esta sección se a a poder visualizar el listado de todos los pacientes atendidos por el profesional y la descarga en pdf del mismo. Seleccionando un paciente se accede al detalle del mismo y a su historia clínica.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Mi perfil
En esta sección va a poder ver una card con sus datos personales, incluyendo imágenes cargadas

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Mis Horarios
Desde esta sección el especialista va a poder cargar y modificar los horarios de atención para cada especialidad que tenga.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

## Administrador

### Home
Una vez logueado el usuario va a ser dirigido a esta vista que va a contener un encabezado con su email y los accesos a las diferentes secciones.

### Mi perfil
En esta sección va a poder ver una card con sus datos personales, incluyendo imágenes cargadas  

### Listado usuarios
El administrador va a tener acceso al listado de todos los usuarios del sistema y su descarga en pdf. Dependiendo del rol del usuario se va a mostrar en un color distinto. Al seleccionar uno de ellos se va a desplegar una card con los datos personales del usuario seleccionado. En caso de ser un paciente, también se va a mostrar su historia clínica. en caso de ser un especialista va a poder habilitarlo o deshabilitarlo del sistema.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Mis Turnos
Acá vamos a poder ver el listado de los turnos tomados de toda la clínica y tenemos la opción de descargar el pdf. Este listado cuenta con un filtro por especialista, especialidad e historia clínica. Haciendo click en cualquiera de esos turnos se va al detalle del mismo, donde vamos a poder cancelarlo (según el estado en el que esté).

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Nuevo Turno
Desde esta sección vamos a poder tomar un nuevo turno. Para esto primero seleccionamos a un paciente, luego la especialidad, luego un especialista y por último se nos presenta una lista de los turnos libres en los próximos 15 días para ese especialista.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Estadísticas - Registro de ingresos
Desde esta vista vamos a tener acceso al listado de los ingresos al sistema, con el nombre del usuario y la fecha y hora del ingreso. También se puede descargar el pdf con el listado. Se incluye un gráfico de torta que representa la porcion de ingresos de cada usuario.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Estadísticas - Turnos
El administrador va a tener acceso a algunos gráficos estadísticos y descargarlos en pdf.
- Gráfico de barras de los turnos por especialidad.
- Gráfico lineal representando la cantidad de turnos tomados por días
- Gráfico de barras representando los turnos solicitados por especialista, diferenciando los finalizados de los no finalizados

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)

### Registro
En esta sección vamos poder elegir con qué rol nos queremos registrar (especialista, paciente, administrador). Una vez elegido el tipo de registro vamos a completar un formulario en dos pasos. Al confirmar se va a mostrar un captcha para validación.

![](https://github.com/fmorales86mb/tp-final-v3/blob/master/doc/images-readme/Screenshot%202021-08-12%20at%2017-33-42%20Cl%C3%ADnica%20Pichicata.png)
