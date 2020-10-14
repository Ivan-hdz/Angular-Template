# Template de angular

## Estructura general propuesta
A continuación se muestra la estructura general propuesta a seguir para el desarrollo del proyecto,
en caso de no encontrarse alguna carpeta, favor de crearla. Así mismo, cada vez que se cree un componente/servicio/clase, favor de considerar la siguiente estructura:
 - [assets](#assets) 
 - [enviroments](#enviroments)
    - enviroment.prod.ts
    - enviroment.ts
 - [app](#app)
    - ./components (componentes del modulo, crear carpeta)
    - ./services (servicios del modulo, crear carpeta)
    - ./classes (clases del modulo, crear carpeta)
    - ./interfaces (interfaces del modulo, crear carpeta)
    - ./modules (submodulos del modulo, crear carpeta)
        - ./modulo1
            - ./components (componentes del modulo, crear carpeta)
            - ./services (servicios del modulo, crear carpeta)
            - ./classes (clases del modulo, crear carpeta)
            - ./interfaces (interfaces del modulo, crear carpeta)
            - ./modules (submodulos del modulo, crear carpeta)
            - modulo1-module.ts (archivos autogenerados por el CLI al crear el modulo)
            - modulo1-routing.module.ts (archivos autogenerados por el CLI al crear el modulo)
        ...
    - ./shared
        - ./components (componentes del modulo, crear carpeta)
        - ./services (servicios del modulo, crear carpeta)
        - ./classes (clases del modulo, crear carpeta)
        - ./interfaces (interfaces del modulo, crear carpeta)
        - ./modules (submodulos del modulo, crear carpeta)
    - app.component.html
    - app.component.scss
    - app.component.ts
    - app.module.ts
    - app-routing-module.ts
### Assets
En esta carpeta se guardarán todos los recursos multimedia a utilizar en el proyecto, se recomienda guradar los assets por pantalla (creando una carpeta para cada pantalla).
Si un asset es utilizado frecuentemente a través de múltiples pantallas, guardarlos en una carpeta de nombre 'shared'
### Enviroments
En esta carpeta se guardan los archivos que contendran las constantes globales a utilizar. **Deben de existir las mismas constantes con los mismos nombres en ambos archivos, solo cambia el valor de la constante**.
Así mismo siempre que se haga referencia a una constante global dentro del código, importar la constante del archivo **enviroment.ts**.
#### Producción
El archivo que termina con '.prod', es el archivo que contiene las constantes con los valores para producción.
#### Desarrollo
El archivo que **no** termina en '.prod', es el que tiene las constantes utilizadas en el ambiente de desarrollo.

### App
Carpeta subdividida por:
 - Módulos (pacientes, protocolos, perfiles, reportes).
 - Módulos, clases e interfaces compartidas entre todos los módulos (shared/modules, shared/interfaces, shared/classes).
 - Archivos de entrada (app.component, app.module)
 
### De los módulos
Todo módulo es independiente de otro y si se quiere utilizar un elemento de un módulo ageno,
se debe importar el módulo ageno en la definición del módulo en el que se requiere utilizar el elemento:
 - [nombre]-module.ts:
 -      imports: [ ... , [external].module.ts , ... ]
Así mismo, se debe exportar el elemenot a utilizar en el módulo ageno:
 - Si se quiere exportar un servicio, anotarlo en la sección **providers**
  -      providers: [ ... , [external].module.ts , ... ]

 - Si se quiere exportar un componente, anotarlo en la sección **exports**
 -      exports: [ ... , [external].module.ts , ... ]

**Hacer todo lo anterior en el archivo **[external].module.ts**
 
 Para mayor ver código ejemplo dirigirse a [app.module.ts](src/app/app.module.ts), en la parte de '@NgModule'
 
 ### Del CLI
 Si se requiere crear un componente | servicio | módulo, utilizar los siguientes comandos
#### Componente
Para crear un componente desde la linea de comando, utilizar el siguiente comando:
 -      ng g c [nombre-carpeta-modulo]/components/[nombre-componente]
Para crear un servicio compartido desde la linea de comando, utilizar el siguiente comando:
 -      ng g c shared/modules/[nombre-carpeta-modulo]/components/[nombre-componente]
#### Servicios
Para crear un servicio desde la linea de comando, utilizar el siguiente comando:
 -      ng g s [nombre-carpeta-modulo]/services/[nombre-servicio]
Para crear un servicio compartido desde la linea de comando, utilizar el siguiente comando:
 -      ng g s shared/modules/[nombre-carpeta-modulo]/services/[nombre-servicio]
#### Módulos
Para crear un módulo desde la linea de comando, utilizar el siguiente comando:
 -      ng g m [nombre-módulo] --routing
Para crear un módulo compartido desde la linea de comando, utilizar el siguiente comando:
 -      ng g m shared/modules/[nombre-módulo]

 
** Nota: tratar de centralizar la lògica del negocio en los servicios y no en los componentes **
