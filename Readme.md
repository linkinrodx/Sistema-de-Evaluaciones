# Sistema de Evaluaciones

Este sistema fue desarrollado en:

- SPA angular 8
- Servicios api rest .net core 2.2 (documentacion swagger.html)
- Servicios Soap de .net framework 4.7
- Base de Datos sql server
- Las pruebas de Integracion se encuentrar dentro de los repositorios de cada solucion (por ahora no hay)

## Los proyectos se desplegaron y sus links de acceso son los siguientes:

- app: http://proyecto.evaluaciones.s3-website-us-west-2.amazonaws.com/login
- api: http://wappevaluacionapieu2.azurewebsites.net (pruebas a través de swagger.html)
- wcf: https://appsevaluacionwcfeu2.azurewebsites.net

## Los links de los repositorios son los siguientes

- app: https://github.com/linkinrodx/Sistema-de-Evaluaciones
- api: https://github.com/linkinrodx/Evaluaciones.API
- wcf: https://github.com/linkinrodx/Evaluaciones.WCF

## Cadena de conneccion a la bd sql server

- "SistemaEvaluaciones": "Server=tcp:asdbevaluacionservereu2.database.windows.net,1433;Initial Catalog=adbevaluaciondatabaseeu22;Persist Security Info=False;User ID=linkinrodx;Password=Facil12345;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"

## Usuarios de prueba para acceso al sistema

- correo@email.com
- prueba2@email.com
- prueba3@email.com
- prueba4@email.com

## Listado de Servicios

### Rest:

- InsEvaluacion
- GetEvaluacion
- GetListEvaluacion
- UpdEvaluacion

### SOAP

- GetUser
- InsUser
- UpdUser
