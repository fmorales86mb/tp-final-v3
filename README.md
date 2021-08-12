# TpFinalV3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.






# Clínica Pichicata
### Trabajo Práctico Final Laboratorio IV - UTN FRA

La clínica Pichicata, cuenta con consultorios, laboratorios y una sala de espera general. Está abierta al público de lunes a viernes en el horario de 8:00 a 19:00, y los sábados en el horario de 8:00 a 14:00. Trabajan en ella profesionales de diversas especialidades, que ocupan los consultorios acorde a su disponibilidad, y reciben en ellos pacientes con turno para consulta o tratamiento. Dichos turnos son pedidos por la web seleccionando el profesional o la especialidad. Estos profesionales pueden tener más de una especialidad. También contamos con un sector dentro de la clínica que se encarga de la organización y administración de la misma.

## Home
Los que visiten esta aplicación van a ser dirigidos en primera instancia al home de la clínica. Desde acá se va a poder acceder al registro del usuario y al ingreso del mismo.

## Ingreso
Desde acá se va a poder ingresar al sistema. Es necesario estar registrado previamente. Para el ingreso se requiere el email y la contraseña. También se cuenta con botones de acceso rápido.

## Registro
En esta sección vamos poder elegir con qué rol nos queremos registrar (especialista o paciente). Una vez elegido el tipo de registro vamos a completar un formulario en dos pasos. 
Al confirmar se va a mostrar un captcha para validación.

## Pacientes

### Home
Una vez logueado el usuario va a ser dirigido a esta vista que va a contener un encabezado con su email y los accesos a las diferentes secciones. También va a poder habilitar o deshabilitar el captcha.

### Mi perfil
En esta sección va a poder ver una card con sus datos personales, incluyendo imágenes cargadas, y va a poder ver su historia clínica y descargarla en pdf. Cada ítem de la historia clínica fue cargada por un especialista y tiene un botón que despliega un modal con el detalle de la historia seleccionada.

### Solicitar Turno
Desde esta sección vamos a poder tomar un nuevo turno. Para esto primero seleccionamos la especialidad, luego un especialista y por último se nos presenta una lista de los turnos libres en los próximos 15 días. Si se encuentra habilitado el captcha, al confirmar el turno se va a mostrar un captcha para validación.

### Mis Turnos
Acá vamos a poder ver el listado de los turnos tomados por el paciente y tenemos la opción de descargar el pdf con todos los turnos o sólo con los atendidos. Este listado cuenta con un filtro por especialista, especialidad e historia clínica. 
Haciendo click en cualquiera de esos turnos se va al detalle del mismo, donde vamos a poder completar la encuesta, calificar la atención y cancelarlo (según el estado en el que esté).

## Especialista

### Home
Una vez logueado el usuario va a ser dirigido a esta vista que va a contener un encabezado con su email y los accesos a las diferentes secciones. También va a poder habilitar o deshabilitar el captcha.

### Mis Turnos
Acá vamos a poder ver el listado de los turnos tomados para el especialista y tenemos la opción de descargar el pdf con todos los turnos. Este listado cuenta con un filtro por especialista, especialidad e historia clínica. Haciendo click en cualquiera de esos turnos se va al detalle del mismo, donde el especialista va a poder cambiar el estado del mismo, agragar reseña, comentario y cargar un item de historia clínica de ese paciente.

### Historia clínica
La historia clínica cuenta con campos obligatorios y 6 campos opcionales. Si se encuentra habilitado el captcha, al guardar el historial se va a mostrar un captcha para validación.

### Mis Pacientes.
Desde esta sección se a a poder visualizar el listado de todos los pacientes atendidos por el profesional y la descarga en pdf del mismo. Seleccionando un paciente se accede al detalle del mismo y a su historia clínica.

### Mi perfil
En esta sección va a poder ver una card con sus datos personales, incluyendo imágenes cargadas

### Mis Horarios
Desde esta sección el especialista va a poder cargar y modificar los horarios de atención para cada especialidad que tenga.

## Administrador

### Home
Una vez logueado el usuario va a ser dirigido a esta vista que va a contener un encabezado con su email y los accesos a las diferentes secciones.

### Mi perfil
En esta sección va a poder ver una card con sus datos personales, incluyendo imágenes cargadas  

### Listado usuarios
El administrador va a tener acceso al listado de todos los usuarios del sistema y su descarga en pdf. Dependiendo del rol del usuario se va a mostrar en un color distinto. Al seleccionar uno de ellos se va a desplegar una card con los datos personales del usuario seleccionado. En caso de ser un paciente, también se va a mostrar su historia clínica. en caso de ser un especialista va a poder habilitarlo o deshabilitarlo del sistema.

### Mis Turnos
Acá vamos a poder ver el listado de los turnos tomados de toda la clínica y tenemos la opción de descargar el pdf. Este listado cuenta con un filtro por especialista, especialidad e historia clínica. Haciendo click en cualquiera de esos turnos se va al detalle del mismo, donde vamos a poder cancelarlo (según el estado en el que esté).

### Nuevo Turno
Desde esta sección vamos a poder tomar un nuevo turno. Para esto primero seleccionamos a un paciente, luego la especialidad, luego un especialista y por último se nos presenta una lista de los turnos libres en los próximos 15 días para ese especialista.

### Estadísticas - Registro de ingresos
Desde esta vista vamos a tener acceso al listado de los ingresos al sistema, con el nombre del usuario y la fecha y hora del ingreso. También se puede descargar el pdf con el listado. Se incluye un gráfico de torta que representa la porcion de ingresos de cada usuario.

### Estadísticas - Turnos
El administrador va a tener acceso a algunos gráficos estadísticos y descargarlos en pdf.
- Gráfico de barras de los turnos por especialidad.
- Gráfico lineal representando la cantidad de turnos tomados por días
- Gráfico de barras representando los turnos solicitados por especialista, diferenciando los finalizados de los no finalizados

### Registro
En esta sección vamos poder elegir con qué rol nos queremos registrar (especialista, paciente, administrador). Una vez elegido el tipo de registro vamos a completar un formulario en dos pasos. Al confirmar se va a mostrar un captcha para validación.
